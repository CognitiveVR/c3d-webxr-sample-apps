import { Component, Behavior, ContextManager, useOnBeforeRender } from "@zcomponent/core";
import { XRContext } from "@zcomponent/three-webxr";
import { ThreeContext, ThreeSceneContext } from "@zcomponent/three";
import * as THREE from "three";
import { EditorContext } from "@zcomponent/three/lib/editorcontext";
import C3D from "@cognitive3d/analytics/lib/c3d.umd.js";
import C3DThreeAdapter from "@cognitive3d/analytics/lib/c3d-threejs-adapter.umd.js";


interface Cognitive3DConstructionProps {
    /** @zui */
    apiKey: string;
    /** @zui */
    sceneId: string;
    /** @zui */
    sceneName: string;
    /** @zui */
    sceneVersion?: string;
}

/**
 * @zbehavior
 * @zdescription Cognitive3D Integration
 */
export class Cognitive3D extends Behavior<Component> {

    public static instance: Cognitive3D | null = null;

    private c3d: C3D | null = null;
    private c3dAdapter: C3DThreeAdapter | null = null;
    private xrContext: XRContext;
    private threeContext: ThreeContext;
    private sceneContext: ThreeSceneContext;
    private _lastGazeTime: number = 0; 

    constructor(contextManager: ContextManager, instance: Component, protected constructorProps: Cognitive3DConstructionProps) {
        super(contextManager, instance);

        // Assign Singleton
        Cognitive3D.instance = this;

        this.threeContext = this.contextManager.get(ThreeContext);
        this.sceneContext = this.contextManager.get(ThreeSceneContext);
        this.xrContext = this.contextManager.get(XRContext);

        try {
            this.c3d = new C3D({
                config: {
                    APIKey: this.constructorProps.apiKey,
                    LOG: true,
                    gazeTrackingSource: "engine",
                    allSceneData: [{
                        sceneId: this.constructorProps.sceneId,
                        sceneName: this.constructorProps.sceneName,
                        versionNumber: this.constructorProps.sceneVersion || "1"
                    }]
                }
            });

            this.c3dAdapter = new C3DThreeAdapter(this.c3d);

            if (this.constructorProps.sceneName) {
                this.c3d.setScene(this.constructorProps.sceneName);
            }
            this.c3d.setDeviceProperty("AppEngine", "MatterCraft");
            this.c3d.setAppVersion("1.0");

            if (this.xrContext) {
                this.register(this.xrContext.currentSession, (session: XRSession | null) => {
                    this.handleSessionChange(session);
                });
            }

            // this.register(useOnBeforeRender(this.contextManager), () => {
            //     const renderer = this.threeContext.renderer as THREE.WebGLRenderer;

            //     if (renderer && this.c3dAdapter && renderer.xr.isPresenting) {
            //         const frame = renderer.xr.getFrame();
            //         if (frame) {
            //             this.c3dAdapter.update();
            //     }
            //     }
            // });

            // // Run the update unconditionally 
            // this.register(useOnBeforeRender(this.contextManager), () => {
            //     if (this.c3dAdapter) {
            //         this.c3dAdapter.update();
            //     }
            // });

            this.register(useOnBeforeRender(this.contextManager), () => {
                // 1. Keep the adapter updating so dynamic objects and FPS tracking work
                if (this.c3dAdapter) {
                    this.c3dAdapter.update();
                }

                // 2. BYPASS THE ADAPTER: Manually calculate Engine Gaze to avoid the UMD singleton bug
                const trackingCamera = this.sceneContext.activeCamera.value;
                
                if (this.c3d && trackingCamera && this.c3d.isSessionActive()) {
                    const now = performance.now();
                    
                    // Only run 10 times a second (100ms) to save performance
                    if (now - this._lastGazeTime >= 100) {
                        this._lastGazeTime = now;

                        const worldPos = new THREE.Vector3();
                        const worldQuat = new THREE.Quaternion();
                        trackingCamera.getWorldPosition(worldPos);
                        trackingCamera.getWorldQuaternion(worldQuat);

                        // Fetch the raycast hit using the adapter's interactable list
                        let gazeHitData = null;
                        if (this.c3d.gazeRaycaster) {
                            gazeHitData = this.c3d.gazeRaycaster();
                        }

                        // Push the properly formatted data directly into the core tracker
                        this.c3d.gaze.recordGaze(
                            [worldPos.x, worldPos.y, -worldPos.z],
                            [worldQuat.x, worldQuat.y, -worldQuat.z, -worldQuat.w],
                            gazeHitData
                        );
                    }
                }
            });
            
            window.addEventListener('keydown', this.handleKeyDown);

        } catch (err) {
            console.error("Cognitive3D: Init Failed", err);
        }
    }

    public registerDynamicObject(behavior: Cognitive3DDynamicObject) {
        if (!this.c3d || !this.c3dAdapter || !this.c3d.isSessionActive()) {
            return;
        }

        const groupObj = behavior.getTrackedObject();
        const props = behavior.getProps();

        if (!groupObj) {
            console.warn("Cognitive3D: Dynamic Object has no Three.js element yet.");
            return;
        }

        const fallbackName = groupObj.name || "UnnamedObject";
        const meshName = props.c3dMeshName || fallbackName;
        const objectName = meshName;
        const customId = props.c3dCustomId || groupObj.uuid;

        groupObj.updateWorldMatrix(true, false);
        const worldPos = new THREE.Vector3();
        const worldQuat = new THREE.Quaternion();
        const worldScale = new THREE.Vector3();
        groupObj.matrixWorld.decompose(worldPos, worldQuat, worldScale);

        // Pass the world coordinates (and add the scale parameter!)
        const runtimeId = this.c3d.dynamicObject.registerObjectCustomId(
            objectName,
            meshName,
            customId,
            [worldPos.x, worldPos.y, worldPos.z * -1], 
            [worldQuat.x, worldQuat.y, worldQuat.z * -1, worldQuat.w * -1],
            [worldScale.x, worldScale.y, worldScale.z] // <--- Add this
        );
        
        groupObj.userData.c3dId = runtimeId;

        this.c3dAdapter.trackDynamicObject(groupObj, runtimeId, {
            positionThreshold: props.positionThreshold,
            rotationThreshold: props.rotationThreshold
        });

        // if (typeof this.c3dAdapter.addInteractable === 'function') {
        //     const geometryMesh = this.findMesh(groupObj);

        //     if (geometryMesh) {
        //         geometryMesh.userData.c3dId = runtimeId;
        //         this.c3dAdapter.addInteractable(geometryMesh);
        //         console.log(`Cognitive3D: Raycasting enabled for mesh inside ${objectName}`);
        //     } else {
        //         console.warn(`Cognitive3D: No mesh found in ${objectName} for raycasting.`);
        //     }
        // }

        if (typeof this.c3dAdapter.addInteractable === 'function') {
            let raycastTarget: THREE.Object3D = groupObj;

            // If the tracked Mattercraft object is an empty AttachmentPoint, 
            // search the scene for the actual visual GLTF node with the same name.
            if (!this.hasGeometry(groupObj)) {
                const scene = this.sceneContext.scene;
                scene.traverse((node) => {
                    if (node.name === objectName && this.hasGeometry(node)) {
                        raycastTarget = node;
                    }
                });
                
                if (raycastTarget !== groupObj) {
                    console.log(`Cognitive3D: Swapped empty tracker '${objectName}' for visual node in raycaster.`);
                }
            }

            // Apply the tracking ID to the root of the visual object
            raycastTarget.userData.c3dId = runtimeId;
            
            // Pass the target to the adapter so it recursively raycasts all its visual children
            this.c3dAdapter.addInteractable(raycastTarget);
            
            console.log(`Cognitive3D: Raycasting enabled for full object ${objectName}`);
        }

        console.log(`Cognitive3D: Dynamic Object Registered: ${objectName}`);
    }

    private findMesh(root: THREE.Object3D): THREE.Mesh | null {
        if ((root as THREE.Mesh).isMesh) {
            return root as THREE.Mesh;
        }

        for (const child of root.children) {
            const found = this.findMesh(child);
            if (found) return found;
        }

        return null;
    }
    private async handleSessionChange(session: XRSession | null) {
        if (!this.c3d) return;

        if (session === null) {
            if (this.c3d.isSessionActive()) await this.c3d.endSession();
            return;
        }

        try {
            if (this.c3d.isSessionActive()) await this.c3d.endSession();
            
            session.addEventListener("end", () => {
                if (this.c3d && this.c3d.isSessionActive()) this.c3d.endSession();
            });

            const success = await this.c3d.startSession(session);
            
            if (success) {
                console.log("Cognitive3D: Session Started");
                
                const renderer = this.threeContext.renderer as THREE.WebGLRenderer;
                const scene = this.sceneContext.scene;
                

                // Active PerspectiveCamera from Mattercraft's context
                const trackingCamera = this.sceneContext.activeCamera.value;

                if (renderer && trackingCamera) {
                    // FIX 2: Pass 'scene' directly as an object, NOT wrapped in an array [scene]
                    (this.c3d as any).config.gazeTrackingSource = "engine";
                    this.c3dAdapter?.startTracking(renderer, trackingCamera as THREE.Camera, scene);
                }
                // -------------------------------------------------------------
                // FIX: Delay initial tracking snapshot by 150ms. 
                // This gives Mattercraft time to fully sync AttachmentPoints 
                // to their GLTF bones before the SDK records their positions. Otherwise initially the 
                // SDK will record the AttachmentPoints incorrect (objects appear misplaced/ size is incorrect, etc...)
                // -------------------------------------------------------------
                setTimeout(() => {
                    let initCount = 0;
                    Cognitive3DDynamicObject.instances.forEach(behavior => {
                         this.registerDynamicObject(behavior);
                         initCount++;
                    });
                    
                    console.log(`Cognitive3D: Force-registered ${initCount} existing dynamic objects after layout sync.`);
                }, 60); 
            }
        } catch (err) {
            console.error("Cognitive3D: Error starting session", err);
        }
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        if (event.shiftKey && (event.key === 'E' || event.key === 'e')) {
            this.exportScene();
        }
        if (event.shiftKey && (event.key === 'D' || event.key === 'd')) {
            this.exportDynamicObjects();
        }
    }

    // Helper method to check if a node contains any visual meshes
    private hasGeometry(obj: THREE.Object3D): boolean {
        let hasGeom = false;
        obj.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                hasGeom = true;
            }
        });
        return hasGeom;
    }

    private async exportDynamicObjects() {
        if (!this.c3dAdapter) {
            console.warn("Cognitive3D: Cannot export, adapter not initialized.");
            return;
        }

        const renderer = this.threeContext.renderer;
        const camera = this.sceneContext.activeCamera.value;

        if (!renderer || !camera) {
            console.warn("Cognitive3D: Missing Renderer or Camera for export.");
            return;
        }

        console.log(`Cognitive3D: Checking ${Cognitive3DDynamicObject.instances.size} Dynamic Objects for export...`);
        
        // 1. Gather all dynamic object export names to identify sub-objects
        const dynamicNames = new Set<string>();
        for (const behavior of Array.from(Cognitive3DDynamicObject.instances)) {
            const wrapper = behavior.getTrackedObject();
            const props = behavior.getProps();
            if (wrapper) {
                const fallbackName = wrapper.name || "UnnamedObject";
                dynamicNames.add(props.c3dMeshName || fallbackName);
            }
        }

        const exportedMeshes = new Set<string>();

        for (const behavior of Array.from(Cognitive3DDynamicObject.instances)) {
            const wrapper = behavior.getTrackedObject();
            const props = behavior.getProps();
            
            if (wrapper) {
                const fallbackName = wrapper.name || "UnnamedObject";
                const exportName = props.c3dMeshName || fallbackName;

                if (exportedMeshes.has(exportName)) {
                    console.log(`Cognitive3D: Skipping duplicate Dynamic Object export: '${exportName}'`);
                    continue; 
                }

                exportedMeshes.add(exportName);

                console.log("------------------------------------------------");
                console.log(`Cognitive3D: Exporting Dynamic Object: '${exportName}'`);
                console.log("------------------------------------------------");

                let objToExport = wrapper.clone();

                // If the tracked object is an AttachmentPoint (no geometry), 
                // find the actual visual geometry in the scene with the same name.
                if (!this.hasGeometry(objToExport)) {
                    const scene = this.sceneContext.scene;
                    let foundVisualNode: THREE.Object3D | null = null;
                    scene.traverse((node) => {
                        // Find the node in the GLTF that matches the AttachmentPoint's target name
                        if (node.name === exportName && this.hasGeometry(node)) {
                            foundVisualNode = node;
                        }
                    });
                    
                    // Use 'as any' to bypass TypeScript's callback control flow analysis 
                    if (foundVisualNode as any) {
                        objToExport = (foundVisualNode as any).clone();
                        console.log(`Cognitive3D: Found actual visual geometry for '${exportName}' in scene.`);
                    } else {
                        console.warn(`Cognitive3D: Could not find visual geometry for '${exportName}'. Exporting as empty group.`);
                    }
                }

                // Strip out nested dynamic objects by their names
                const nodesToRemove: THREE.Object3D[] = [];
                objToExport.traverse((node) => {
                    // Skip the root node itself
                    if (node === objToExport) return;
                    
                    // If this node's name matches another dynamic object's name, queue it for removal
                    if (dynamicNames.has(node.name)) {
                        nodesToRemove.push(node);
                    }
                });

                // Safely remove the identified sub-objects so they aren't in the parent export
                nodesToRemove.forEach(node => {
                    if (node.parent) {
                        node.parent.remove(node);
                    }
                });

                // Normalize transformations so the C3D dashboard gets a clean, centered 1:1 mesh
                objToExport.position.set(0, 0, 0);
                objToExport.quaternion.identity();
                objToExport.scale.set(1, 1, 1);
                objToExport.updateMatrixWorld(true);

                // Apply the coordinate system fix here before passing to the adapter
                const exportRoot = new THREE.Group();
                exportRoot.name = "CoordinateSystemFix";
                exportRoot.add(objToExport);
                exportRoot.scale.z = -1;
                exportRoot.scale.x = -1;

                if (typeof this.c3dAdapter.exportObject === 'function') {
                    await this.c3dAdapter.exportObject(
                        exportRoot, 
                        exportName,
                        renderer as THREE.WebGLRenderer,
                        camera
                    );
                } else {
                    console.error("Cognitive3D: c3dAdapter.exportObject function not found. Please update the C3DThreeAdapter.");
                }
            }
        }
    }
    
    // private exportScene() {
    //     if (!this.c3dAdapter) return;
    //     const renderer = this.threeContext.renderer;
    //     const scene = this.sceneContext.scene;
    //     const camera = this.sceneContext.activeCamera.value;

    //     if (renderer && scene && camera) {
    //         console.log("Cognitive3D: Exporting Scene...");

    //         // 1. Temporarily strip C3D userData from the entire scene.
    //         // This safely bypasses the internal 'traverse' array-mutation crash in C3DThreeAdapter.
    //         const strippedUserData: { obj: THREE.Object3D, isDynamic?: boolean, c3dId?: string }[] = [];
            
    //         scene.traverse((obj) => {
    //             if (obj.userData && (obj.userData.c3dId !== undefined || obj.userData.isDynamic !== undefined)) {
    //                 strippedUserData.push({
    //                     obj,
    //                     isDynamic: obj.userData.isDynamic,
    //                     c3dId: obj.userData.c3dId
    //                 });
                    
    //                 // Delete to prevent the adapter from finding and removing it
    //                 delete obj.userData.isDynamic;
    //                 delete obj.userData.c3dId;
    //             }
    //         });

    //         // 2. Hide dynamic object roots so the GLTFExporter explicitly ignores them
    //         const hiddenObjects: { obj: THREE.Object3D, originalVisibility: boolean }[] = [];
            
    //         Cognitive3DDynamicObject.instances.forEach(behavior => {
    //             const obj = behavior.getTrackedObject();
    //             if (obj) {
    //                 hiddenObjects.push({ obj, originalVisibility: obj.visible });
    //                 obj.visible = false;
    //             }
    //         });

    //         // 3. Export Scene (The adapter will clone the scene in this clean, hidden state)
    //         // Use the sceneName from constructorProps, falling back to a default if undefined
    //         const exportName = this.constructorProps.sceneName || "Unnamed-MatterCraft-Scene";
    //         this.c3dAdapter.exportScene(scene, exportName, renderer as THREE.WebGLRenderer, camera);

    //         // 4. Safely restore the live scene's visibility and userData immediately
    //         hiddenObjects.forEach(({ obj, originalVisibility }) => {
    //             obj.visible = originalVisibility;
    //         });

    //         strippedUserData.forEach(({ obj, isDynamic, c3dId }) => {
    //             if (isDynamic !== undefined) obj.userData.isDynamic = isDynamic;
    //             if (c3dId !== undefined) obj.userData.c3dId = c3dId;
    //         });
            
    //         console.log(`Cognitive3D: Scene '${exportName}' Exported & Dynamic Objects Restored.`);
    //     }
    // }
    private exportScene() {
        if (!this.c3dAdapter) return;
        const renderer = this.threeContext.renderer as THREE.WebGLRenderer;
        const scene = this.sceneContext.scene;
        let camera = this.sceneContext.activeCamera.value;

        // 1. Attempt to get the Editor's camera so the screenshot matches your editor view
        try {
            const editorContext = this.contextManager.get(EditorContext);
            if (editorContext && editorContext.orbitControls.value) {
                camera = editorContext.orbitControls.value.object as THREE.Camera;
                console.log("Cognitive3D: Using Editor camera for export.");
            }
        } catch (e) {
            // EditorContext isn't available in published builds, fallback to the standard tracking camera
            console.log("Cognitive3D: Editor environment not found, using active camera.");
        }

        if (renderer && scene && camera) {
            console.log("Cognitive3D: Exporting Scene...");

            // 2. Temporarily strip C3D userData from the entire scene.
            const strippedUserData: { obj: THREE.Object3D, isDynamic?: boolean, c3dId?: string }[] = [];
            
            scene.traverse((obj) => {
                if (obj.userData && (obj.userData.c3dId !== undefined || obj.userData.isDynamic !== undefined)) {
                    strippedUserData.push({
                        obj,
                        isDynamic: obj.userData.isDynamic,
                        c3dId: obj.userData.c3dId
                    });
                    
                    delete obj.userData.isDynamic;
                    delete obj.userData.c3dId;
                }
            });

            // 3. Hide dynamic object roots so the GLTFExporter explicitly ignores them
            const hiddenObjects: { obj: THREE.Object3D, originalVisibility: boolean }[] = [];
            
            Cognitive3DDynamicObject.instances.forEach(behavior => {
                const obj = behavior.getTrackedObject();
                if (obj) {
                    hiddenObjects.push({ obj, originalVisibility: obj.visible });
                    obj.visible = false;
                }
            });

            // 4. FORCE RENDER: Draw the scene to the buffer right before export to prevent blank screenshots
            renderer.render(scene, camera);

            // 5. Export Scene 
            const exportName = this.constructorProps.sceneName || "Unnamed-MatterCraft-Scene";
            this.c3dAdapter.exportScene(scene, exportName, renderer, camera);

            // 6. Safely restore the live scene's visibility and userData immediately
            hiddenObjects.forEach(({ obj, originalVisibility }) => {
                obj.visible = originalVisibility;
            });

            strippedUserData.forEach(({ obj, isDynamic, c3dId }) => {
                if (isDynamic !== undefined) obj.userData.isDynamic = isDynamic;
                if (c3dId !== undefined) obj.userData.c3dId = c3dId;
            });
            
            console.log(`Cognitive3D: Scene '${exportName}' Exported & Dynamic Objects Restored.`);
        }
    }
}

interface Cognitive3DDynamicObjectConstructionProps {
    /**
     * @zui
     * @zlabel Model Mesh Name (must match the uploaded object mesh name of Cognitive3d Dashboard)
     */
    c3dMeshName?: string;

    /**
     * @zui
     * @zlabel Custom ID (must be unique for each object)
     */
    c3dCustomId?: string;

    /**
     * @zui
     * @zdefault 0.1
     */
    positionThreshold: number;

    /**
     * @zui
     * @zdefault 0.1
     */
    rotationThreshold: number;

}

/**
 * @zbehavior
 * @zdescription Marks an object for Cognitive3D Tracking & Movement
 */
export class Cognitive3DDynamicObject extends Behavior<Component> {
    
    public static readonly instances: Set<Cognitive3DDynamicObject> = new Set();

    private _isInitialized = false;
    private _originalY: number = 0;
    private _movePhase: number = 0;
    private _lastTrackedUUID: string | null = null;

    constructor(contextManager: ContextManager, instance: Component, protected constructorProps: Cognitive3DDynamicObjectConstructionProps) {
        super(contextManager, instance);
        
        Cognitive3DDynamicObject.instances.add(this);
        
        this.register(useOnBeforeRender(this.contextManager), () => this.onUpdate());

        this.tryRegisterWithManager();
    }

    private tryRegisterWithManager() {
        if (Cognitive3D.instance) {
            // Delay slightly to ensure Mattercraft has resolved the new AttachmentPoint's transform
            setTimeout(() => {
                Cognitive3D.instance?.registerDynamicObject(this);
            }, 100);
        }
    }

    public getTrackedObject(): THREE.Object3D | null {
        let obj = this.instance.element as THREE.Object3D;

        if (!obj && this.instance.elementsResolved && this.instance.elementsResolved.length > 0) {
            obj = this.instance.elementsResolved[0] as THREE.Object3D;
        }

        if (obj) {
            if (!this._isInitialized) {
                const fallbackName = obj.name || "UnnamedObject";

                obj.userData.isDynamic = true;
                obj.userData.modelId = this.constructorProps.c3dMeshName || fallbackName;
                obj.userData.positionThreshold = this.constructorProps.positionThreshold;
                obj.userData.rotationThreshold = this.constructorProps.rotationThreshold;
                
                this._originalY = obj.position.y;
                this._movePhase = Math.random() * Math.PI * 2;

                if (this.constructorProps.c3dMeshName) {
                    obj.name = this.constructorProps.c3dMeshName;
                }
                
                if (!obj.name) {
                    console.warn(`Cognitive3D: Object with Model '${this.constructorProps.c3dMeshName}' has no name.`);
                }
                
                this._isInitialized = true;
            }
            return obj;
        }
        
        return null;
    }

    private onUpdate() {
        const obj = this.getTrackedObject();
        if (!obj) return;

        obj.updateMatrixWorld(true);

        const vec = new THREE.Vector3();
        obj.getWorldPosition(vec);

        if (obj.uuid !== this._lastTrackedUUID) {
            this._lastTrackedUUID = obj.uuid;
            this.tryRegisterWithManager();
        }
    }

    public getProps() {
        return this.constructorProps;
    }

    dispose() {
        Cognitive3DDynamicObject.instances.delete(this);
        return super.dispose();
    }
}