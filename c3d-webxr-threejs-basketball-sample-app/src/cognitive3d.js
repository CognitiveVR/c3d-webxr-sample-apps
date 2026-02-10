import C3DAnalytics from "@cognitive3d/analytics";
import C3DThreeAdapter from "@cognitive3d/analytics/adapters/threejs";

export let c3d = null;

export function initializeC3D(renderer) {
    if (c3d) return c3d;

    c3d = new C3DAnalytics(
        {
            config: {
                APIKey: import.meta.env.VITE_C3D_APPLICATION_KEY,
                networkHost: import.meta.env.VITE_C3D_NETWORK_HOST,
                allSceneData: [
                    {
                        sceneName: import.meta.env.VITE_C3D_SCENE_NAME,
                        sceneId: import.meta.env.VITE_C3D_SCENE_ID,
                        versionNumber: import.meta.env.VITE_C3D_SCENE_VERSION_NUMBER,
                    },
                ],
            },
        },
        renderer
    );

    c3d.setScene(import.meta.env.VITE_C3D_SCENE_NAME);
    c3d.setDeviceProperty("AppName", "ThreeJS_BasketBall_App");
    c3d.setAppVersion("1.0");

    const adapter = new C3DThreeAdapter(c3d);
    return { c3d, adapter };
}

export function setupCognitive3DSession(renderer, getFinalStats = () => null) {
    const { c3d: c3dInstance, adapter } = initializeC3D(renderer);
    
    renderer.xr.addEventListener("sessionstart", async () => {
        const xrSession = renderer.xr.getSession();
        if (xrSession?.supportedFrameRates?.includes?.(120)) {
            await xrSession.updateTargetFrameRate(120);
        }
        await c3dInstance.startSession(xrSession);
    });

    const flushUserPropsAndEnd = () => {
        try {
            const stats = getFinalStats?.();
            if (stats && c3dInstance) {
                c3dInstance.setUserProperty("game.shotsAttempted", stats.attempts | 0);
                c3dInstance.setUserProperty("game.shotsMade", stats.made | 0);
            }
        } catch (_) {}
        c3dInstance.endSession();
    };

    renderer.xr.addEventListener("sessionend", flushUserPropsAndEnd);
    window.addEventListener("pagehide", flushUserPropsAndEnd);
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "hidden") flushUserPropsAndEnd();
    });
    return { c3dInstance, adapter };
}