import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
// We now need more functions from cognitive.js
import { initializeC3D, setupTracking, setupCognitive3DSession } from './src/cognitive.js'; 
import { createInteractableObjects, updateObjectMomentum } from './src/objects.js'; 
import { setupControllers, handleControllerIntersections, adjustObjectScaleWithGamepad } from './src/controllers.js';
import { c3d } from './src/cognitive.js';
import C3DThreeAdapter from '@cognitive3d/analytics/adapters/threejs';
 
let camera, scene, renderer;
let controller1, controller2;
let interactableGroup;
const clock = new THREE.Clock(); 
let c3dAdapter; 

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
    
    // Initialize C3D to get the instance
    const c3d = initializeC3D(renderer);
    c3dAdapter = new C3DThreeAdapter(c3d); 

    // Create objects, passing in the c3d instance
    interactableGroup = await createInteractableObjects(c3d); 
    scene.add(interactableGroup);

    // Finish setting up tracking now that objects exist
    setupTracking(camera, interactableGroup);

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

    window.addEventListener('keydown', async (event) => {
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

        adjustObjectScaleWithGamepad(controller1);
        adjustObjectScaleWithGamepad(controller2);
    }
    if (c3dAdapter) {
        c3dAdapter.updateTrackedObjectTransforms();
    }

    renderer.render(scene, camera);
}