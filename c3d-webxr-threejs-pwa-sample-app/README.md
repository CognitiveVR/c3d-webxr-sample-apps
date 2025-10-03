# ThreeJS WebXR PWA with Cognitive3D Analytics

## ℹ️ Description 
This is a simple WebXR application built with Three.js, featuring a basic interactive VR scene. 
The project is also configured as a Progressive Web App (PWA).  

The project integrates the Cognitive3D WebXR SDK (c3d-webxr-sdk) within a JavaScript, Three.js, and Progressive Web App (PWA) environment. The SDK enables tracking of user sessions and gaze behavior, while also providing dynamic object tracking and export capabilities tailored for Three.js VR applications. This integration allows for comprehensive analytics and interaction monitoring within immersive WebXR experiences.

Please view the browser console for details on the network calls. 

This application can be accessed within a VR browser so through a desktop browser (via Oculus Link)


## 🚀 Getting Started
### Prerequisites
* [Node.js and npm](https://nodejs.org/en/) (Node version 20+ recommended).
* A modern WebXR-compatible browser (Meta Quest Browser, Chrome, Edge, etc...)
* Modern VR headset such as a Meta Quest 3

## 🔧 Installation and Setup
1. **Run the standard install command** 
```
npm install 
```
2. **Configure Cognitive3D with your own information** 
- Create a `.env.local` file in this projects root directory and add the following line with your application key:
```
VITE_C3D_APPLICATION_KEY="YOUR_APPLICATION_KEY"
```
- Open `src/cognitive.js` and enter your Scene data: `SceneID`, `Scene Version`, `Scene Name` with your own from the Cog3D dashboard. 


## 💻 Scripts

The following command starts the development server. Open the local URL provided in your terminal to view the application. The app will automatically reload if you change any of the source files.
```
npm run dev
```
The following command bundles your app into static files for production into a `/dist` directory.
```
npm run build
```
The following command starts a local server to preview the production build. 
```
npm run preview
```
In your terminal, vite will output a local url. Open this url to view the application. 

## ▶️ USAGE  

1. Click on the "ENTER VR" button to start an immersive session. 
2. The C3D session will start as soon as XR starts, and will end when the XR session ends.
3. Inside of the VR scene, you can move objects by pointing your controller at an object and pressing the trigger button, only the purple cube in the center is a Cognitive3D Dynamic object. 
4. To exit the program, either press on "EXIT VR" or press ESC key on your keyboard.

If you cannot view the controllers in the scene, ensure the controllers are on.

## Dynamic Object Tracking and Export 

### Dynamic Object 
* The Cognitive3D Dynamic Object is a simple cube with a BoxGeometry and a MeshStandardMaterial of purple color.
* It is registered with the Cognitive3D SDK to track its position and rotation within the scene, **no other objects are Cognitive3D Dynamic Objects in this scene**.
* **A Dynamic Object in Cognitive3D is an interactive element within the VR scene whose position, rotation, scale, and state are continuously tracked over the user session. These tracked transforms and interactions are recorded as snapshots, allowing them to be visualized during session replay in Cognitive3D's Scene Explorer for detailed analysis of user engagement with the 3D environment.**

#### Export Object

* `exportObject(objectToExport, objectName, renderer, camera)` exports a specific Three.js object (The purple cube) to GLTF, binary, and PNG screenshot files.
* Pressing the "O" key while running the application will export this cube object using the Cognitive3D ThreeJS adapter, ready for upload using the [c3d-upload-tools](https://github.com/CognitiveVR/c3d-upload-tools). 

