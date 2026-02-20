import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { initializeC3D, setupCognitive3DSession } from './src/cognitive3d.js'; 
import { createInteractableObjects, updateObjectMomentum } from './src/objects.js'; 
import { setupControllers, handleControllerIntersections, adjustObjectWithGamepad } from './src/controllers.js';

let camera, scene, renderer;
let controller1, controller2;
let interactableGroup;

let c3dAdapter = null; 
const clock = new THREE.Clock(); 

// --- PROFILING VARIABLES ---
let profilingData = [];
let isProfiling = false;
let profileStartTime = 0;
const PROFILING_DURATION_MS = 120000; // 2 minutes
// ---------------------------

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
            // Find the first dynamic cube to export (e.g., "Cube_1")
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
            navigator.serviceWorker.register('/service-worker.js').then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, err => {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }

    // 1. Setup SDK tracking (Gaze, Dynamic Objects) but DO NOT start the loop
    c3dAdapter.startTracking(renderer, camera, interactableGroup);

    // 2. Start the render loop manually
    renderer.setAnimationLoop(render);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function render(timestamp, frame) {
    // 1. Start CPU Execution Timer
    const startJSTime = performance.now();

    // 2. Initialize Profiling Timer on the first frame
    if (!isProfiling && timestamp) {
        isProfiling = true;
        profileStartTime = timestamp;
        console.log("Profiling started for 2 minutes...");
    }

    const deltaTime = clock.getDelta();
    const elapsedTime = clock.getElapsedTime(); 

    // --- YOUR EXISTING RENDER LOGIC ---
    if (c3dAdapter) {
        c3dAdapter.update();
    }

    if (interactableGroup) {
        updateObjectMomentum(interactableGroup, deltaTime, elapsedTime); 
        handleControllerIntersections(controller1, interactableGroup);
        handleControllerIntersections(controller2, interactableGroup);
        adjustObjectWithGamepad(controller1);
        adjustObjectWithGamepad(controller2);
    }

    renderer.render(scene, camera);
    // ----------------------------------

    // 3. Collect Profiling Metrics
    if (isProfiling) {
        const endJSTime = performance.now();
        const jsExecutionTime = endJSTime - startJSTime; // CPU Proxy
        
        const currentElapsedMs = timestamp - profileStartTime;
        
        // Calculate Instantaneous FPS
        const currentFps = deltaTime > 0 ? 1 / deltaTime : 0;
        
        // Calculate JS RAM Usage (Requires Chrome/Edge)
        let ramUsedMb = 0;
        if (performance.memory) {
            ramUsedMb = performance.memory.usedJSHeapSize / (1024 * 1024);
        }

        // Store current frame data
        profilingData.push({
            timeMs: currentElapsedMs.toFixed(2),
            fps: currentFps.toFixed(2),
            jsTimeMs: jsExecutionTime.toFixed(4),
            ramMb: ramUsedMb.toFixed(2)
        });

        // 4. End Profiling after 2 minutes (120,000 ms)
        if (currentElapsedMs >= PROFILING_DURATION_MS) {
            isProfiling = false;
            renderer.setAnimationLoop(null); // Stop the render loop
            
            if (renderer.xr.isPresenting) {
                renderer.xr.getSession().end(); // Exit VR
            }
            
            exportProfilingData();
        }
    }
    
}
    function exportProfilingData() {
        console.log("Profiling complete. Generating CSV...");
        
        let csvContent = "data:text/csv;charset=utf-8,TimeElapsed(ms),FPS,JS_Execution_Time(ms),RAM_Used(MB)\n";
        
        let totalFps = 0, totalJsTime = 0, totalRam = 0;
        const count = profilingData.length;

        profilingData.forEach(row => {
            csvContent += `${row.timeMs},${row.fps},${row.jsTimeMs},${row.ramMb}\n`;
            totalFps += parseFloat(row.fps);
            totalJsTime += parseFloat(row.jsTimeMs);
            totalRam += parseFloat(row.ramMb);
        });

        // Calculate and append averages at the very bottom of the CSV
        if (count > 0) {
            const avgFps = (totalFps / count).toFixed(2);
            const avgJsTime = (totalJsTime / count).toFixed(4);
            const avgRam = (totalRam / count).toFixed(2);
            csvContent += `\nAVERAGES,-,${avgFps},${avgJsTime},${avgRam}\n`;
            console.log(`Averages -> FPS: ${avgFps} | JS Time: ${avgJsTime}ms | RAM: ${avgRam}MB`);
        }

        // Trigger File Download
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        // You can rename this string to "profiling_without_sdk.csv" when doing your baseline test
        link.setAttribute("download", "profiling_with_sdk.csv"); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }