# Three.js WebXR Basketball Demo

Basketball free-throw demo using Three.js + WebXR with Cognitive3D Javascript SDK.

## Quick Start
### 1. Install dependencies
```bash
npm install
```

### 2. Create environment variables
Create a `.env.local` file
```
VITE_C3D_NETWORK_HOST = data.cognitive3d.com
VITE_C3D_APPLICATION_KEY = <YOUR_APP_KEY>
VITE_C3D_SCENE_ID = <YOUR_SCENE_ID>
VITE_C3D_SCENE_NAME = <YOUR_SCENE_NAME>
VITE_C3D_SCENE_VERSION_NUMBER = <YOUR_SCENE_VERSION_NUMBER>
```

### 3. Upload the scene to Cognitive3D using [c3d-upload-tools](https://github.com/CognitiveVR/c3d-upload-tools)

### 4. Run server
```bash
npm run host
```

### 5. View on a headset (HTTPS via ngrok)
Install ngrok and see setup/usage in the official guide: https://ngrok.com/docs/getting-started/
```bash
ngrok http 5173
```
Open the https URL ngrok prints in your headset’s browser.

## Requirements
- Node.js 22+
- WebXR-capable device/browser
- Cognitive3D project