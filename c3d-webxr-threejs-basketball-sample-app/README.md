# Three.js WebXR Basketball Demo

Basketball free-throw demo using Three.js + WebXR with Cognitive3D Javascript SDK.

## Getting Started
### 1. Scene upload
Upload the scene to Cognitive3D using [c3d-upload-tools](https://github.com/CognitiveVR/).

### 2. Install dependencies
```bash
npm install
```

### 3. Create environment variables
Create a `.env.local` file in the root directory
```
VITE_C3D_NETWORK_HOST=data.cognitive3d.com
VITE_C3D_APPLICATION_KEY=<YOUR_APP_KEY>
VITE_C3D_SCENE_ID=<YOUR_SCENE_ID>
VITE_C3D_SCENE_NAME=<YOUR_SCENE_NAME>
VITE_C3D_SCENE_VERSION_NUMBER=<YOUR_SCENE_VERSION_NUMBER>
```

### 4. Run development server
```bash
npm run dev
```

### 5. View on a headset (HTTPS via ngrok)
In a separate terminal, run ngrok to create a trusted HTTPS tunnel. If you don't have it installed, see the [official guide](https://ngrok.com/docs/getting-started/).
```bash
ngrok http 5173
```
Open the **https** URL that ngrok prints in your headset’s browser.

## Requirements
- Node.js 22+
- WebXR-capable device/browser
- Cognitive3D Account