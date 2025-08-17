import * as THREE from 'three';
import { c3d, initializeC3D, setupCognitive3DSession } from './src/cognitive.js'; 
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
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.xr.enabled = true;
    document.body.appendChild(renderer.domElement);

    initializeC3D(renderer); 

    if ('xr' in navigator) {
        const button = document.createElement('button');
        button.id = 'VRButton';
        button.textContent = 'ENTER VR';

        button.onclick = async () => {
            if (renderer.xr.isPresenting) {
                renderer.xr.getSession().end();
            } else {
                try {
                    const session = await navigator.xr.requestSession('immersive-vr', {
                        optionalFeatures: [
                            'local-floor',
                            'bounded-floor',
                            'hand-tracking',
                            'eye-tracking'
                        ]
                    });
                    renderer.xr.setSession(session);
                } catch (e) {
                    console.error("Failed to start XR session:", e);
                }
            }
        };

        document.body.appendChild(button);
    } else {
        const message = document.createElement('a');
        message.href = 'https://immersiveweb.dev/';
        message.innerHTML = 'VR NOT SUPPORTED';
        document.body.appendChild(message);
    }
    
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
    if (interactableGroup) {
        updateObjectMomentum(interactableGroup, deltaTime); 
        handleControllerIntersections(controller1, interactableGroup);
        handleControllerIntersections(controller2, interactableGroup);

        const dynamicObject = interactableGroup.children.find(child => child.userData.isDynamic);
           if (c3d.isSessionActive()) {
            if (dynamicObject && dynamicObject.userData.c3dId) {
                c3d.dynamicObject.addSnapshot(
                    dynamicObject.userData.c3dId,
                    dynamicObject.position.toArray(),
                    dynamicObject.quaternion.toArray()
                );
            }
        }
    }

    renderer.render(scene, camera);
}