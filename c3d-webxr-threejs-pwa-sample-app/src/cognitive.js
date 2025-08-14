import C3DAnalytics from '@cognitive3d/analytics';
import C3DThreeAdapter from '@cognitive3d/analytics/adapters/threejs';

export const c3d = new C3DAnalytics({
    config: {
        APIKey: import.meta.env.VITE_C3D_APPLICATION_KEY,
        allSceneData: [{
            sceneName: "BasicScene", 
            sceneId: "93f486e4-0e22-4650-946a-e64ce527f915",
            versionNumber: "1"
        }]
    }
});

c3d.setScene('BasicScene');
c3d.userId = 'threejs_user_' + Date.now();
c3d.setUserName('ThreeJS_SDK_Test_User');
c3d.setDeviceName('WindowsPCBrowserVR');
c3d.setDeviceProperty("AppName", "ThreeJS_WebXR_SDK_Test_App");
c3d.setUserProperty("c3d.app.version", "0.2");

c3d.setUserProperty("c3d.deviceid", 'threejs_windows_device_' + Date.now());
const c3dAdapter = new C3DThreeAdapter(c3d);

export function setupCognitive3DSession(renderer) {
    renderer.xr.addEventListener('sessionstart', async () => {
        console.log('Cognitive3D: VR Session Started');
        
        const xrSession = renderer.xr.getSession();
        if (xrSession.supportedFrameRates && xrSession.supportedFrameRates.includes(120)) {
            try {
                await xrSession.updateTargetFrameRate(120);
                console.log('Target frame rate set to 120Hz');
            } catch (e) {
                console.error('Failed to set target frame rate to 120Hz:', e);
            }
        }  
        if (c3d.startSession(xrSession)) {
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
