import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { initializeC3D, setupCognitive3DSession } from './src/cognitive.js'; 
import { createInteractableObjects, updateObjectMomentum } from './src/objects.js'; 
import { setupControllers, handleControllerIntersections, adjustObjectScaleWithGamepad } from './src/controllers.js';

let camera, scene, renderer;
let controller1, controller2;
let interactableGroup;
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
    
    // Get the adapter directly from the initialization
    const { c3d, c3dAdapter } = initializeC3D(renderer);

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

    window.addEventListener('keydown', async (event) => { // Export object (cube) functionality of the c3d-sdk-webxr 
        if (event.key.toLowerCase() === 'o') {
            const cube = interactableGroup.children.find(obj => obj.name === "Cube");
            if (cube && c3dAdapter) {
                await c3dAdapter.exportObject(cube, "Cube", renderer, camera);
                console.log("Exported Cube.");
            }
        }
    });

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }

    // A single call to start all tracking and the render loop.
    // Pass the top-level 'render' function as the callback.
    c3dAdapter.startTracking(renderer, camera, interactableGroup, render);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render() {
    const deltaTime = clock.getDelta();
    if (interactableGroup) {
        updateObjectMomentum(interactableGroup, deltaTime); 
        handleControllerIntersections(controller1, interactableGroup);
        handleControllerIntersections(controller2, interactableGroup);

        adjustObjectScaleWithGamepad(controller1);
        adjustObjectScaleWithGamepad(controller2);
    }

    renderer.render(scene, camera);
}