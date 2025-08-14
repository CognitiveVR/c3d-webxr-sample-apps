# ThreeJS WebXR PWA with Cognitive3D Analytics

## FEATURES: 
This is a simple WebXR application built with Three.js, featuring an interactive VR scene. 
The project is also configured as a Progressive Web App (PWA).  

Most importantly, it integrates Cognitive3D WEBXR SDK (c3d-webxr-sdk) within a javascript/ threeJS/ PWA project. The SDK currently tracks session and gaze tracking with the application. Please view the browser console for details on the network calls. 
This application can be accessed within a VR browser so through a desktop browser (via Oculus Link)


## PREREQUISITES
* Node.js (LTS version) and npm.
* A modern WebXR-compatible browser (Meta Quest Browser, Chrome, Edge, etc...)
* A VR headset for testing the immersive features (Meta Quest 2).

## INSTALLATION
Run the standard install command 
```
npm install 
```
### Configure Cognitive3D with your own information  
Navigate to src/cognitive.js 
Replace YOUR_API_KEY and the scene data (SceneID, Scene Version, Scene Name) with your own from the Cog3D dashboard. 

Run the development server 
```
npm run dev
```

In your terminal, vite will output a local url. Open this url to view the application. 

## USAGE  
* Click on the "ENTER VR" button to start an immersive session.
* The cog3d session will start as soon as XR starts, and will end when the XR session ends.
* To exit the program, either press on "EXIT VR" or press ESC key on your keyboard.
* Inside of the VR scene, you can move objects by pointing your controller at an object and pressing the trigger button. If you cannot view the controllers in the scene, ensure both controllers are on. 
