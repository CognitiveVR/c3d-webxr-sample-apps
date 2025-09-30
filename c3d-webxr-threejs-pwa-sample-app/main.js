import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
// We now need more functions from cognitive.js
import { initializeC3D, setupTracking, setupCognitive3DSession } from './src/cognitive.js'; 
import { createInteractableObjects, updateObjectMomentum } from './src/objects.js'; 
import { setupControllers, handleControllerIntersections } from './src/controllers.js';

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
    // FIX: Updated for modern Three.js versions
    renderer.outputColorSpace = THREE.SRGBColorSpace; 
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);
    
    // 1. Initialize C3D to get the instance
    const c3d = initializeC3D(renderer);

    // 2. Create objects, passing in the c3d instance
    interactableGroup = await createInteractableObjects(c3d); 
    scene.add(interactableGroup);

    // 3. Finish setting up tracking now that objects exist
    setupTracking(camera, interactableGroup);

    document.body.appendChild(VRButton.createButton(renderer));
    
    [controller1, controller2] = setupControllers(scene, renderer, interactableGroup);
    
    // 4. Setup session listeners
    setupCognitive3DSession(renderer);
    
    window.addEventListener('resize', onWindowResize);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (renderer.xr.isPresenting) {
                renderer.xr.getSession().end();
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

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    renderer.setAnimationLoop(render);
}

function render() {
    const deltaTime = clock.getDelta();
    if (interactableGroup) {
        updateObjectMomentum(interactableGroup, deltaTime); 
        handleControllerIntersections(controller1, interactableGroup);
        handleControllerIntersections(controller2, interactableGroup);
    }

    renderer.render(scene, camera);
}