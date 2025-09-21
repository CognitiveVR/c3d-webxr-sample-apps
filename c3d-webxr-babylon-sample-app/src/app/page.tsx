"use client";

import { useEffect, useRef } from "react";

import { Scene } from "@babylonjs/core/scene";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { WebXRDefaultExperience } from "@babylonjs/core/XR/webXRDefaultExperience";

import { HavokPlugin } from "@babylonjs/core/Physics/v2/Plugins/havokPlugin";
import HavokPhysics from "@babylonjs/havok";

// Cognitive3D Imports
import C3D from '@cognitive3d/analytics';
import C3DBabylonAdapter from '@cognitive3d/analytics/adapters/babylon';

import "@babylonjs/core/Loading/loadingScreen";
import "@babylonjs/core/Loading/Plugins/babylonFileLoader";
import "@babylonjs/core/Cameras/universalCamera";
import "@babylonjs/core/Meshes/groundMesh";
import "@babylonjs/core/Lights/directionalLight";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Materials/PBR/pbrMaterial";
import "@babylonjs/core/Materials/standardMaterial";
import "@babylonjs/core/XR/features/WebXRDepthSensing";
import "@babylonjs/core/Rendering/depthRendererSceneComponent";
import "@babylonjs/core/Rendering/prePassRendererSceneComponent";
import "@babylonjs/core/Materials/Textures/Loaders/envTextureLoader";
import "@babylonjs/core/Physics";
import "@babylonjs/materials/sky";

import { loadScene } from "babylonjs-editor-tools";
import { scriptsMap } from "@/scripts";

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const engine = new Engine(canvasRef.current, true, {
            stencil: true,
            antialias: true,
            audioEngine: true,
            adaptToDeviceRatio: true,
            disableWebGL2Support: false,
            useHighPrecisionFloats: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
        });

        const scene = new Scene(engine);

        // Add a basic light
        new HemisphericLight("light", new Vector3(0, 1, 0), scene);

        // Add a ground
        MeshBuilder.CreateGround("ground", { width: 10, height: 10 }, scene);

        handleLoad(engine, scene);

        let listener: () => void;
        window.addEventListener("resize", listener = () => {
            engine.resize();
        });

        return () => {
            scene.dispose();
            engine.dispose();

            window.removeEventListener("resize", listener);
        };
    }, [canvasRef]);

    async function handleLoad(engine: Engine, scene: Scene) {
        const havok = await HavokPhysics();
        scene.enablePhysics(new Vector3(0, -9.81, 0), new HavokPlugin(true, havok));

        await loadScene("/scene/", "example.babylon", scene, scriptsMap, {
            quality: "high",
        });

        if (scene.activeCamera) {
            scene.activeCamera.attachControl();
        }

        // Initialize WebXR
        const xr = await scene.createDefaultXRExperienceAsync({
            floorMeshes: [scene.getMeshByName("ground")!],
        });

        // Initialize Cognitive3D
        const c3d = new C3D({
            config: {
                APIKey: "YOUR_APPLICATION_KEY_HERE",
                allSceneData: [{
                    sceneName: "YOUR_SCENE_NAME",
                    sceneId: "YOUR_SCENE_ID",
                    versionNumber: "1"
                }],
            }
        });

        const c3dAdapter = new C3DBabylonAdapter(c3d);

        // Set user and device properties
        c3d.setScene('YOUR_SCENE_NAME'); // Replace with your Scene name
        c3d.userId = 'userid' + Date.now();
        c3d.setUserName('SDK_Test_User');
        c3d.setDeviceName('WindowsPCBrowserVR');
        c3d.setDeviceProperty("AppName", "BabylonJS_WebXR_SDK_Test_App");
        c3d.setUserProperty("c3d.app.version", "0.1");
        c3d.setUserProperty("c3d.deviceid", 'babylonjs_windows_device_' + Date.now());

        // Start and end C3D session with WebXR
        xr.baseExperience.onStateChangedObservable.add((state) => {
            if (state === WebXRState.IN_XR) {
                console.log("XR session started");
                c3d.startSession(xr.baseExperience.sessionManager.session);
            } else if (state === WebXRState.NOT_IN_XR) {
                console.log("XR session ended");
                c3d.endSession();
            }
        });


        engine.runRenderLoop(() => {
            if (scene.activeCamera && xr.baseExperience.state === WebXRState.IN_XR) {
                c3dAdapter.recordGazeFromCamera(scene.activeCamera);
            }
            scene.render();
        });
    }

    return (
        <main className="flex w-screen h-screen flex-col items-center justify-between">
            <canvas
                ref={canvasRef}
                className="w-full h-full outline-none select-none"
            />
        </main>
    );
}

// BabylonJS WebXRState enum
enum WebXRState {
    NOT_IN_XR = 0,
    ENTERING_XR = 1,
    IN_XR = 2,
    EXITING_XR = 3,
}