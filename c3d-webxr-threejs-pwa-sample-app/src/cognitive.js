import C3DAnalytics from '@cognitive3d/analytics';
import C3DThreeAdapter from '@cognitive3d/analytics/adapters/threejs';

export let c3d;

export function initializeC3D(renderer) {
    if (c3d) return c3d; // Only initialize once

    c3d = new C3DAnalytics({
        config: {
            APIKey: import.meta.env.VITE_C3D_APPLICATION_KEY,
            networkHost: "data.c3ddev.com",
            allSceneData: [{
                sceneName: "BasicScene",
                sceneId: "0da68a5b-704e-42c3-a6f9-dffe54ac61c4",
                versionNumber: "1"
            }]
        }
    }, renderer); // << Pass the renderer to the constructor

    c3d.setScene('BasicScene');
    c3d.userId = 'threejs_user_' + Date.now();
    c3d.setUserName('ThreeJS_SDK_Test_User');
    c3d.setDeviceName('WindowsPCBrowserVR');
    c3d.setDeviceProperty("AppName", "ThreeJS_WebXR_SDK_Test_App");
    c3d.setUserProperty("c3d.app.version", "0.2");
    c3d.setUserProperty("c3d.deviceid", 'threejs_windows_device_' + Date.now());

    new C3DThreeAdapter(c3d);
    return c3d;
}

export function setupCognitive3DSession(renderer) {
    const c3dInstance = initializeC3D(renderer);

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

        // Use await to call the async startSession method
        const success = await c3dInstance.startSession(xrSession);
        if (success) {
            console.log('Cognitive3D SDK session successfully started.');
        }
    });

    renderer.xr.addEventListener('sessionend', () => {
        console.log('Cognitive3D: VR Session Ended');
        c3dInstance.endSession().then(status => {
            console.log('Cognitive3D SDK session ended with status:', status);
        });
    });
}