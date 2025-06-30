import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { c3d, setupCognitive3DSession } from './src/cognitive.js';
import { createInteractableObjects } from './src/objects.js';
import { setupControllers, handleControllerIntersections } from './src/controllers.js';

let camera, scene, renderer;
let controller1, controller2;
let interactableGroup;

init();
animate();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color('lightblue');

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 10);
    camera.position.set(0, 1.6, 3);
    scene.add(camera);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 4, 0);
    scene.add(light);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.SRGBColorSpace;
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);
    document.body.appendChild(VRButton.createButton(renderer));

    // Modules
    // Create interactable objects
    interactableGroup = createInteractableObjects();
    scene.add(interactableGroup);

    // Setup VR controllers
    [controller1, controller2] = setupControllers(scene, renderer, interactableGroup);

    // Setup Cog3D session management
    setupCognitive3DSession(renderer);

    window.addEventListener('resize', onWindowResize); // Window resize listener

    // Listener for ESC key to end VR
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (renderer.xr.isPresenting) {
                renderer.xr.getSession().end();
            }
        }
    });

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    renderer.setAnimationLoop(render);
}

function render() {  // Handle controller interactions
    handleControllerIntersections(controller1, interactableGroup);
    handleControllerIntersections(controller2, interactableGroup);

    if (c3d.isSessionActive()) {     // Record Cognitive3D gaze data
        const pos = camera.position.toArray();
        const rot = camera.quaternion.toArray();
        c3d.gaze.recordGaze(pos, rot);
    }
    renderer.render(scene, camera);     // Render the scene
}