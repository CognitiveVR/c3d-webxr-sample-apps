import C3DAnalytics from '@cognitive3d/analytics';
import C3DThreeAdapter from '@cognitive3d/analytics/adapters/threejs';
import * as THREE from 'three';

export let c3d;
export let c3dAdapter;  

export function initializeC3D(renderer) {
    if (c3d) return { c3d, c3dAdapter };  

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
    
   // PARTICIPANT SETUP 
   c3d.setParticipantFullName('ThreeJS_SDK_Test_User');  
    //    c3d.setParticipantId(Date.now());
    
    // DEVICE PROPERTIES 
    // c3d.setDeviceName('WindowsPCBrowserVR');
    c3d.setDeviceProperty("AppName", "c3d-webxr-threejs-pwa-sample-app");
    
    c3d.setAppVersion("1.0");

    c3dAdapter = new C3DThreeAdapter(c3d);
    
    return { c3d, c3dAdapter };  
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
            console.log('Gaze tracking with raycasting is now active.');
        }
    });

    renderer.xr.addEventListener('sessionend', () => {
        console.log('Cognitive3D: VR Session Ended');
        c3d.endSession().then(status => {
            console.log('Cognitive3D SDK session ended with status:', status);
        });
    });
}