# Three.js WebXR Basketball Demo

This is a fully interactive basketball free-throw demo built with Three.js and WebXR. It's integrated with the Cognitive3D SDK for WebXR, which provides detailed analytics and session playback.

This project serves as a practical example of how to:
* Build a physics-based ThreeJS-WebXR experience.
* Integrate Cognitive3D analytics to track user behavior.
* Export a scene and its assets directly from a running application for upload to the Cognitive3D platform.

## Requirements
- Node.js 22+
- WebXR-capable device/browser
- Cognitive3D Account
  


### Setup and Installation 
1. Install Dependencies
```bash
npm install
```

### 2. Create Environment Variables
Create a local environment file to store your Cognitive3D credentials.
1. Create a new file named .env.local in the root of the project.
2. Add the following variables, replacing the placeholder values with your actual credentials from the Cognitive3D dashboard:
```
VITE_C3D_NETWORK_HOST=data.cognitive3d.com
VITE_C3D_APPLICATION_KEY=<YOUR_APP_KEY>
VITE_C3D_SCENE_ID=<YOUR_SCENE_ID>
VITE_C3D_SCENE_NAME=<YOUR_SCENE_NAME>
VITE_C3D_SCENE_VERSION_NUMBER=<YOUR_SCENE_VERSION_NUMBER>
```

### 3. Run development server
```bash
npm run dev
```

### 4. Exporting the Scene 
Before you can see your analytics data on the Cognitive3D dashboard, you need to upload a representation of your scene. This demo includes a built-in tool to export all the necessary files.

1. **Run the Application**: With the development server running, open the application in your browser.

2. **Press the 'E' Key**: While the application is in focus, press the 'E' key on your keyboard.

3. **Save the Files**:
* If your browser supports the File System Access API, you will be prompted to select a directory. A folder named scene-export will be created there, containing all the required files.
* If not, your browser will download a single scene-export.zip file containing everything you need.

The exported package will include:
* `scene.gltf` (The 3D model of the scene)
* `scene.bin` (The geometry data for the model)
* `settings.json` (Configuration for the uploader tool)
* `screenshot.png` (A thumbnail of the scene)

Uploading to the Dashboard
Once you have the exported files, use the [c3d-upload-tools](https://github.com/CognitiveVR/c3d-upload-tools) to upload the scene to your Cognitive3D account

