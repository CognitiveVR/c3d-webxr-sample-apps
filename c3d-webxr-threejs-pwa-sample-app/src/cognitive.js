import C3DAnalytics from '@cognitive3d/analytics';

export const c3d = new C3DAnalytics({
    config: {
        APIKey: import.meta.env.VITE_APPLICATION_KEY,
        allSceneData: [{
            sceneName: "BasicScene", 
            sceneId: "93f486e4-0e22-4650-946a-e64ce527f915",
            versionNumber: "1"
        }]
    }
});

// All these properties are required for session data to appear on Cog3d dashboard. 
// Ensure no spaces are present in the following parameters

c3d.setScene('BasicScene');                     // Replace with your Scene name
c3d.userId = 'threejs_user_' + Date.now();
c3d.setUserName('ThreeJS_SDK_Test_User');
c3d.setDeviceName('WindowsPCBrowserVR');
c3d.setDeviceProperty("AppName", "ThreeJS_WebXR_SDK_Test_App");
c3d.setUserProperty("c3d.version", "1.0");
c3d.setUserProperty("c3d.app.version", "0.2");
c3d.setUserProperty("c3d.app.engine", "Three.js");
c3d.setUserProperty("c3d.deviceid", 'threejs_windows_device_' + Date.now());

export function setupCognitive3DSession(renderer) {
    renderer.xr.addEventListener('sessionstart', () => {
        console.log('Cognitive3D: VR Session Started');
        if (c3d.startSession()) {
            console.log('Cognitive3D SDK session successfully started.');
        }
    });
    renderer.xr.addEventListener('sessionend', () => {
        console.log('Cognitive3D: VR Session Ended');
        c3d.endSession().then(status => {
            console.log('Cognitive3D SDK session ended with status:', status);
        });
    });
}