import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { initializeC3D, setupCognitive3DSession } from './src/cognitive3d.js'; 
import { createInteractableObjects, updateObjectMomentum } from './src/objects.js'; 
import { setupControllers, handleControllerIntersections, adjustObjectWithGamepad } from './src/controllers.js';

let camera, scene, renderer;
let controller1, controller2;
let interactableGroup;
// Define adapter in outer scope so it can be accessed by render loop
let c3dAdapter = null; 
const clock = new THREE.Clock(); 

init();

async function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.set(0, 1.6, 3);
    scene.add(camera);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 4, 0);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace; 
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);
    
    // Initialize SDK and assign to the outer variable
    const result = initializeC3D(renderer);
    c3dAdapter = result.c3dAdapter;
    const c3d = result.c3d;

    interactableGroup = await createInteractableObjects(c3d); 
    scene.add(interactableGroup);

    document.body.appendChild(VRButton.createButton(renderer));
    
    [controller1, controller2] = setupControllers(scene, renderer, interactableGroup);
    
    // Setup session listeners
    setupCognitive3DSession(renderer);
    
    window.addEventListener('resize', onWindowResize);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (renderer.xr.isPresenting) {
                renderer.xr.getSession().end();
            }
        }
    });
    
    // Export object (cube) functionality of the c3d-sdk-webxr, Press O to export  
    window.addEventListener('keydown', async (event) => { 
        if (event.key.toLowerCase() === 'o') {
            const cube = interactableGroup.children.find(obj => obj.name === "Cube_1");
            if (cube && c3dAdapter) {
                await c3dAdapter.exportObject(cube, "Cube_1", renderer, camera);
                console.log("Exported Cube_1.");
            } else {
                console.log("Could not find Cube_1 to export.");
            }
        }
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
    // Network Status Logic
    setupNetworkStatusUI();

    // 1. Setup SDK tracking (Gaze, Dynamic Objects) but DO NOT start the loop
    c3dAdapter.startTracking(renderer, camera, interactableGroup);

    // 2. Start the render loop manually
    renderer.setAnimationLoop(render);
}

function setupNetworkStatusUI() {
    const statusEl = document.getElementById('network-status');

    function updateNetworkStatus() {
        if (navigator.onLine) {
            statusEl.textContent = '🟢 Online - Syncing Data if Cognitive3D Session Active';
            statusEl.className = 'status-online';
        } else {
            statusEl.textContent = '🔴 Offline - Caching Locally';
            statusEl.className = 'status-offline';
        }
        
        // Ensure it is always visible
        statusEl.style.display = 'block';
        statusEl.style.opacity = '1';
    }

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    // Initialize state on load
    updateNetworkStatus();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// 3. Update the render signature to accept timestamp and frame (standard WebXR/ThreeJS)
function render(timestamp, frame) {
    const deltaTime = clock.getDelta();
    const elapsedTime = clock.getElapsedTime(); // Get elapsed time for movement

    // 4. Manually call the SDK update method
    if (c3dAdapter) {
        c3dAdapter.update();
    }

    if (interactableGroup) {
        // Pass elapsed time to the update function
        updateObjectMomentum(interactableGroup, deltaTime, elapsedTime); 
        
        handleControllerIntersections(controller1, interactableGroup);
        handleControllerIntersections(controller2, interactableGroup);

        adjustObjectWithGamepad(controller1);
        adjustObjectWithGamepad(controller2);
    }

    renderer.render(scene, camera);
}