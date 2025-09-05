import { Component, Type } from "@wonderlandengine/api";
import C3D from "@cognitive3d/analytics";
import C3DWonderlandAdapter from "@cognitive3d/analytics/adapters/wonderland";

let c3d;
let c3dAdapter;

export class C3DAnalyticsComponent extends Component {
    static TypeName = "c3d-analytics-component";
    static Properties = {
        apiKey: { type: Type.String, default: "YOUR_APPLICATION_API_KEY" },
        sceneName: { type: Type.String, default: "SampleScene" },
        sceneId: { type: Type.String, default: "50542ff3-4f51-4c9a-99d8-6082921953f9" },
        versionNumber: { type: Type.String, default: "1" },
    };

    start() {

        if (c3d) return;

        // 1. Initialize the core C3D SDK
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
        
        // 2. Instantiate the Wonderland Adapter
        c3dAdapter = new C3DWonderlandAdapter(c3d, this.engine);

        // Configure your session details 
        c3d.setScene(this.sceneName);
        c3d.userId = 'wonderland_user_' + Date.now();
        c3d.setUserName('Wonderland_SDK_Test_User');
        c3d.setDeviceName('WonderlandEngineVR');
        c3d.setDeviceProperty("AppName", "Wonderland_WebXR_SDK_Test_App");
        c3d.setUserProperty("c3d.app.version", "0.2");
        c3d.setUserProperty("c3d.deviceid", 'wonderland_device_' + Date.now());
        
        this.engine.onXRSessionStart.add(this.onXRSessionStart.bind(this));
        this.engine.onXRSessionEnd.add(this.onXRSessionEnd.bind(this));
    }

    // update(dt) {
    //     // 3. Record gaze data on every frame if the adapter is ready
    //     if (c3dAdapter && c3d && c3d.isSessionActive()) {
    //         c3dAdapter.recordGazeFromCamera();
    //     }
    // }

    /**
     * Called when a WebXR session starts.
     * @param {XRSession} session
     */
    async onXRSessionStart(session) {
        console.log('Cognitive3D: VR Session Started');
        
        const success = await c3d.startSession(session);
        if (success) {
            console.log('Cognitive3D SDK session successfully started.');
        }
    }

    /**
     * Called when a WebXR session ends.
     */
    onXRSessionEnd() {
        console.log('Cognitive3D: VR Session Ended');
        if (c3d) {
            c3d.endSession().then(status => {
                console.log('Cognitive3D SDK session ended with status:', status);
            });
        }
    }
}
