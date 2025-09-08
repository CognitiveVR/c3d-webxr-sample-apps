import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js'; // Standard VRButton
import { c3d, initializeC3D, setupCognitive3DSession } from './src/cognitive.js'; 
import { createInteractableObjects, updateObjectMomentum } from './src/objects.js'; 
import { setupControllers, handleControllerIntersections } from './src/controllers.js';

let camera, scene, renderer;
let controller1, controller2;
let interactableGroup;
const clock = new THREE.Clock(); 

let lastSnapshotTime = 0;
const snapshotInterval = 1;

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
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    initializeC3D(renderer); 

    document.body.appendChild(VRButton.createButton(renderer));
    
    interactableGroup = await createInteractableObjects(); 
    scene.add(interactableGroup);

    [controller1, controller2] = setupControllers(scene, renderer, interactableGroup);
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
    const elapsedTime = clock.getElapsedTime();


    if (interactableGroup) {
        updateObjectMomentum(interactableGroup, deltaTime); 
        handleControllerIntersections(controller1, interactableGroup);
        handleControllerIntersections(controller2, interactableGroup);
        // if (c3d.isSessionActive()) {
        //     const dynamicObject = interactableGroup.children.find(child => child.userData.isDynamic);
        //     if (dynamicObject && dynamicObject.userData.c3dId) {
        //         c3d.dynamicObject.addSnapshot(
        //             dynamicObject.userData.c3dId,
        //             dynamicObject.position.toArray(),
        //             dynamicObject.quaternion.toArray()
        //         );
        //     }
        // }
        const dynamicObject = interactableGroup.children.find(child => child.userData.isDynamic);

        if (dynamicObject && dynamicObject.userData.c3dId && (elapsedTime - lastSnapshotTime > snapshotInterval)) {
            const worldPosition = new THREE.Vector3();
            const worldQuaternion = new THREE.Quaternion();

            dynamicObject.getWorldPosition(worldPosition);
            dynamicObject.getWorldQuaternion(worldQuaternion);
            
            c3d.dynamicObject.addSnapshot(
                dynamicObject.userData.c3dId,
                worldPosition.toArray(),
                worldQuaternion.toArray()
            );

            lastSnapshotTime = elapsedTime;
        }
    }

    renderer.render(scene, camera);
}