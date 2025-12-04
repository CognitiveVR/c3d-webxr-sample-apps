import { Component, Type } from "@wonderlandengine/api";
import C3D from "@cognitive3d/analytics";
import C3DWonderlandAdapter from "@cognitive3d/analytics/adapters/wonderland";

let c3d;

export class C3DAnalyticsComponent extends Component {
    static TypeName = "c3d-analytics-component";
    static Properties = {
        apiKey: { type: Type.String, default: "YOUR_APPLICATION_API_KEY" },
        sceneName: { type: Type.String, default: "Your_Ssene_Name" },
        sceneId: { type: Type.String, default: "YOUR_SCENE_ID" },
        versionNumber: { type: Type.String, default: "1" },
        exportScale: { type: Type.String, default: "1.0" },        
        exportRootObject: { type: Type.Object }, 
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
        c3d.setUserProperty("c3d.deviceid", 'wonderland_device_' + Date.now()); 
        c3d.setDeviceProperty("AppName", "Wonderland_WebXR_SDK_Test_App");
        c3d.setUserProperty("c3d.app.version", "1.0");
        
        this.engine.onXRSessionStart.add(this.onXRSessionStart.bind(this));
        this.engine.onXRSessionEnd.add(this.onXRSessionEnd.bind(this));
        
        // Setup the "O" Key Listener
        this._setupSceneExportInput();
    }

    _setupSceneExportInput() {
        if (!this.adapter) return;

        window.addEventListener("keyup", async (event) => {
            if (event.key.toUpperCase() === "O") {
                console.log('Key "O" detected. Initiating static scene export...');
                const numericScale = parseFloat(this.exportScale) || 1.0;
                await this.adapter.exportScene(
                    this.sceneName, 
                    this.exportScale, 
                    this.exportRootObject 
                );
            }
        });

        console.log('Cognitive3D: Scene Export enabled. Press "O" to export.');
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