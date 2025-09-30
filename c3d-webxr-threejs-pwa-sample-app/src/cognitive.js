import C3DAnalytics from '@cognitive3d/analytics';
import C3DThreeAdapter from '@cognitive3d/analytics/adapters/threejs';

export let c3d;
let c3dAdapter;

export function initializeC3D(renderer) {
    if (c3d) return c3d; 

    c3d = new C3DAnalytics({
        config: {
            APIKey: import.meta.env.VITE_C3D_APPLICATION_KEY,
            allSceneData: [{
                sceneName: "SampleScene",
                sceneId: "50542ff3-4f51-4c9a-99d8-6082921953f9",
                versionNumber: "1"
            }]
        }
    }, renderer); 

    c3d.setScene('SampleScene');
    c3d.userId = 'threejs_user_' + Date.now();
    c3d.setUserName('ThreeJS_SDK_Test_User');
    c3d.setDeviceName('WindowsPCBrowserVR');
    c3d.setDeviceProperty("AppName", "ThreeJS_WebXR_SDK_Test_App");
    c3d.setUserProperty("c3d.app.version", "0.2");
    c3d.setUserProperty("c3d.deviceid", 'threejs_windows_device_' + Date.now());

    c3dAdapter = new C3DThreeAdapter(c3d);
    
    return c3d;
}

export function setupTracking(camera, interactableGroup) {
    if (!c3dAdapter) return;

    // Setup gaze raycasting
    if (camera && interactableGroup) {
        c3dAdapter.setupGazeRaycasting(camera, interactableGroup);
    }
    
    // Find the dynamic object and start tracking it
    const dynamicObject = interactableGroup.children.find(child => child.userData.isDynamic);
    if (dynamicObject) {
        c3dAdapter.trackDynamicObject(dynamicObject, dynamicObject.userData.c3dId); // auto track dynamic object if pos, rot or scale changes 
    }
}

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

        const success = await c3d.startSession(xrSession);
        if (success) {
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