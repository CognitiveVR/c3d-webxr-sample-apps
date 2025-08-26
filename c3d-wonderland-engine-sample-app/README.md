# Wonderland Engine VR App with Cognitive3D Analytics

This project is a sample [Wonderland Engine](https://wonderlandengine.com/) application that demonstrates a full integration of the [Cognitive3D](https://cognitive3d.com/) analytics SDK. 

This repository includes a pre-configured Wonderland Engine project and a custom analytics component that handles the initialization and data-passing to the Cognitive3D platform.

!


---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js and npm](https://nodejs.org/en/) (Node version 16+ recommended)
* The [Wonderland Engine](https://wonderlandengine.com/downloads) editor

### Installation & Setup

1.  **Open in Wonderland Engine:**
    Launch the Wonderland Engine editor and open the `Wonderland VR.wlp` project file from the cloned repository.

2.  **Install dependencies:**
    The Wonderland engine should take care of packages, if not. You can open a terminal in this projects directory.
    ```sh
    npm install
    ```
 This will download the Wonderland Engine API, the Cognitive3D SDK, and other necessary packages.

3.  **Set Your API Key and Project:**
    * In the Wonderland Editor, navigate to the **Assets** panel.
    * Find the `c3d-analytics-component` and select the object it's attached to (e.g., "Player").
    * In the **Properties** panel on the right, you will see fields for **`apiKey`**, **`Scene Name`**, **`Scene id`**, and **`Version Number`**.
    * Paste your unique Application Key from your Cognitive3D dashboard into this field.

---

## ▶️ Usage

To run the project, simply click the **Package** button (▶️ icon) in the top toolbar of the Wonderland Engine editor. This will build the project and open it in your default web browser, you can also specific the VR device if it is connected via usb cable.

Once the application is running, you can enter VR (if you have a compatible device) to start a session. Analytics data will be sent to your Cognitive3D dashboard in real-time, check browser console for logs if session does not appear on the Cog3D Dashboard.

---

## 📂 Key Files

* **`js/c3d-analytics-component.js`**: This is the core of the integration. This Wonderland component handles initializing the Cognitive3D SDK, creating the engine adapter, and managing the analytics session.
* **`package.json`**: Defines the project's dependencies, including the `@cognitive3d/analytics` package.
