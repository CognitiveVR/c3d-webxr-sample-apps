# Wonderland Engine VR App with Cognitive3D Analytics

This project is a sample [Wonderland Engine](https://wonderlandengine.com/) VR application that demonstrates an integration of the [Cognitive3D WebXR SDK](https://github.com/CognitiveVR/c3d-sdk-webxr). 

This repository includes a pre-configured Wonderland Engine project and a custom analytics component that handles the initialization and data-passing to the Cognitive3D platform.


---

## 🚀 Getting Started

These instructions will allow you to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js and npm](https://nodejs.org/en/) (Node version 20+ recommended)
* The [Wonderland Engine](https://wonderlandengine.com/downloads) editor
* Modern VR Headset such as a Meta Quest 3

### 🔧 Installation & Setup

1.  **Open in Wonderland Engine:**
    Launch the Wonderland Engine editor and open the `Wonderland VR.wlp` project file from the cloned repository.

2.  **Install dependencies:**
    The Wonderland engine should take care of packages, if not. You can open a terminal in this projects directory and run the following command.  This will download the Wonderland Engine API, the Cognitive3D SDK, and other necessary packages.
    ```sh
    npm install
    ```

3.  **Set Your API Key and Project:**
    * In the Wonderland Editor, navigate to the **Scene Outline** panel.
    * Find the `c3d-analytics-component` and select the object it's attached to **Cognitive3D Analytics** object. 
    * In the **Properties** panel on the right, you will see fields for **`apiKey`**, **`Scene Name`**, **`Scene id`**, and **`Version Number`**.
    * Paste your unique Application Key and scene data from your Cognitive3D dashboard into these fields.
  
4. 📦 **Scene Export:** To visualize scene data in the Cognitive3D dashboard, you can upload a 3D model of your environment (static scene geometry). 

    #### 1. Configuration (Editor): In the Wonderland Editor, select the object with the `c3d-analytics-component`. In the **Properties** panel, you can configure the export:
    * **Export Scale:** (Optional) Set the global scale for the exported model (Default: `1.0`).
    * **Export Root Object:** Drag and drop a specific parent object from the Scene Outline into this field. If set, the exporter will only include this object and its children for export.
    * **enableSceneExport:** Toggle for enabling the scene export at runtime with the press of the O button. (Default: `true`). Disable to prevent accidental scene export. 

    #### 2. Triggering Export (Runtime)
    1.  Run the project in your browser (desktop mode).
    2.  Press the **`O`** key on your keyboard.
    3.  A browser prompt will ask you to select a folder. Choose an empty folder on your computer.
    4.  The script will generate and save the following 4 files directly into that folder:
        * `scene.gltf` / `scene.bin`: The static geometry of your scene.
        * `settings.json`: Configuration file containing scale and scene metadata.
        * `screenshot.png`: A snapshot of your current view (taken immediately when you press the key).
  
    #### 3. Upload: Once exported, use the [Cognitive3D CLI tools](https://docs.cognitive3d.com/uploading-your-scene/) to upload the folder content to your dashboard.

---

## ▶️ Usage

To run the project, simply click the **Package** button (▶️ icon) in the top toolbar of the Wonderland Engine editor. This will build the project and open it in your default web browser, you can also specific the VR device if it is connected via usb cable.

Once the application is running, you can enter VR (if you have a compatible device) to start a session. Analytics data will be sent to your Cognitive3D dashboard in real-time, **check browser console for logs if session does not appear on the Cog3D Dashboard.**

---

## 📂 Key Files

* **`js/c3d-analytics-component.js`**: This is the core of the integration. This Wonderland component handles initializing the Cognitive3D SDK, creating the engine adapter, and managing the analytics session.
* **`js/index.js`**: Enter point for Wonderland application, it import all the component scripts you are using in your project (including our C3DAnalyticsComponent) and register them with the engine. 
* **`package.json`**: Defines the project's dependencies, including the `@cognitive3d/analytics` package.
