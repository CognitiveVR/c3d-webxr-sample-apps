# ThreeJS WebXR PWA with Cognitive3D Analytics

## ℹ️ Description 
This is a simple WebXR application built with Three.js, featuring a basic interactive VR scene. 
The project is also configured as a Progressive Web App (PWA).  

Most importantly, it integrates Cognitive3D WEBXR SDK (c3d-webxr-sdk) within a javascript/ threeJS/ PWA project. The SDK currently tracks session and gaze tracking with the application. Please view the browser console for details on the network calls. 
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
* Click on the "ENTER VR" button to start an immersive session.
* The C3D session will start as soon as XR starts, and will end when the XR session ends.
* To exit the program, either press on "EXIT VR" or press ESC key on your keyboard.
* Inside of the VR scene, you can move objects by pointing your controller at an object and pressing the trigger button. If you cannot view the controllers in the scene, ensure both controllers are on. 
