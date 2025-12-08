import { Component, Type } from "@wonderlandengine/api";
import C3D from "@cognitive3d/analytics";
import C3DWonderlandAdapter from "@cognitive3d/analytics/adapters/wonderland";

let c3d;

export class C3DAnalyticsComponent extends Component {
    static TypeName = "c3d-analytics-component";
    static Properties = {
        apiKey: { type: Type.String, default: "YOUR_APPLICATION_API_KEY" },
        sceneName: { type: Type.String, default: "Your_Scene_Name" },
        sceneId: { type: Type.String, default: "YOUR_SCENE_ID" },
        versionNumber: { type: Type.String, default: "1" },
        exportScale: { type: Type.String, default: "1.0" },
        exportRootObject: { type: Type.Object },
        
        // Boolean toggle to enable the feature
        enableSceneExport: { type: Type.Bool, default: false },
    };

    adapter = null;

    start() {
        if (c3d) return;

        // Initialize SDK
        c3d = new C3D({
            config: {
                APIKey: this.apiKey,
                allSceneData: [{
                    sceneName: this.sceneName,
                    sceneId: this.sceneId,
                    versionNumber: this.versionNumber
                }]
            }
        });
        
        this.adapter = new C3DWonderlandAdapter(c3d, this.engine);

        c3d.setScene(this.sceneName);
        c3d.setDeviceProperty("AppName", "Wonderland_WebXR_SDK_Test_App");
        c3d.setUserProperty("c3d.app.version", "1.0");
        
        this.engine.onXRSessionStart.add(this.onXRSessionStart.bind(this));
        this.engine.onXRSessionEnd.add(this.onXRSessionEnd.bind(this));
        
        this._setupSceneExportInput();
    }

    // LOGIC IS TIED TO c3d-sdk-webxr scene export (Press O on keyboard at Runtime to initiate scene export)
    _setupSceneExportInput() {
        if (!this.adapter) return;

        window.addEventListener("keyup", async (event) => {
            // Check if the key is 'O' AND the toggle is enabled
            if (event.key.toUpperCase() === "O" && this.enableSceneExport) {
                console.log('Key "O" detected. Initiating static scene export...');
                
                // Parse the string back to a float
                const numericScale = parseFloat(this.exportScale) || 1.0; 

                await this.adapter.exportScene(
                    this.sceneName, 
                    numericScale, 
                    this.exportRootObject 
                );
            } else if (event.key.toUpperCase() === "O" && !this.enableSceneExport) {
                console.log('Key "O" pressed, but Scene Export is currently disabled in the component properties.');
            }
        });

        console.log('Cognitive3D: Scene Export listener active.');
    }

    async onXRSessionStart(session) {
        console.log('Cognitive3D: VR Session Started');
        const success = await c3d.startSession(session);
        if (success) console.log('Cognitive3D SDK session successfully started.');
    }

    onXRSessionEnd() {
        console.log('Cognitive3D: VR Session Ended');
        if (c3d) c3d.endSession().then(status => console.log('Cognitive3D SDK session ended with status:', status));
    }
}