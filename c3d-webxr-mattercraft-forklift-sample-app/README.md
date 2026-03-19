# Mattercraft WebXR Forklift Training Demo

This is an interactive forklift operator training simulation built with [Mattercraft](https://mattercraft.io/) and WebXR. It's integrated with the Cognitive3D SDK for WebXR, which provides detailed analytics and session playback.

This project serves as a practical example of how to:
* Build a guided, step-based XR training experience in Mattercraft.
* Use a physical lever controller to drive a 3D forklift animation.
* Integrate Cognitive3D analytics to track user behavior and dynamic object movement.
* Export scene assets and dynamic objects directly from a running application for upload to the Cognitive3D platform.

## Requirements
- [Mattercraft](https://mattercraft.io/) editor
- WebXR-capable device (Meta Quest recommended)
- Cognitive3D Account

## Project Structure

| File / Folder | Description |
|---|---|
| `Scene.zcomp` | Main Mattercraft scene — warehouse environment, forklift, game state animations |
| `Lever.zcomp` | Reusable lever component with physical grab interaction |
| `Box.zcomp` | Warehouse box component used as a dynamic tracked object |
| `index.ts` | Entry point — initializes the Mattercraft scene with WebXR support |
| `Cognitive3D.ts` | Cognitive3D integration: session tracking, gaze recording, and dynamic object registration |
| `LeverBehavior.ts` | Reads lever rotation and seeks the forklift's up/down animation timeline |
| `GameStepsContext.ts` | Manages the training step state machine (Step 1 → 4) |
| `Audio/` | Narration and ambient audio clips for each training step |
| `*.glb` | 3D models: warehouse scene, forklift, and warehouse box |

## How It Works

### Training Flow
The experience is guided through a series of steps driven by Mattercraft's animation state machine (`Game_States` layer):

1. **Step 1 (`Step_10`)** — Welcome narration plays; user is introduced to the warehouse.
2. **Step 2 (`Step_20`)** — User is prompted to interact with the forklift lever.
3. **Step 3 (`Step_30`)** — The user's XR position is offset to place them at the forklift; the fork raising task begins.
4. **Step 4 (`Step40`)** — Completion sequence plays.

A button in the scene advances through steps 1–3 on `onPointerDown`.

### Lever Interaction
The `Lever` behavior (in `Lever/Lever.ts`) detects when the user's hand/controller enters within 0.3 m of the lever handle. Once grabbed, the lever's X-axis rotation follows the hand position. `LeverBehavior.ts` reads this rotation each frame and maps it to a position on the forklift's `ForkliftUpandDown0` animation clip:

- Lever pulled back (−45°) → forks fully lowered
- Lever neutral (0°) → forks at mid-height
- Lever pushed forward (+45°) → forks fully raised

### Cognitive3D Analytics
`Cognitive3D.ts` provides:
- **Session tracking** — starts/ends automatically with the XR session.
- **Gaze recording** — sampled at 10 Hz using the active camera's world transform.
- **Dynamic object tracking** — the forklift and boxes are registered as dynamic objects so their positions are recorded throughout the session.

## Setup

### 1. Open in Mattercraft
Open the project folder in the Mattercraft editor. The editor will install dependencies automatically via `package.json`.

### 2. Configure Cognitive3D Credentials
In the Mattercraft scene editor, select the node that has the `Cognitive3D` behavior attached and fill in the following properties in the inspector:

| Property | Description |
|---|---|
| `apiKey` | Your Cognitive3D application key |
| `sceneId` | The scene ID from the Cognitive3D dashboard |
| `sceneName` | The scene name registered on the Cognitive3D dashboard |
| `sceneVersion` | (Optional) Scene version number — defaults to `"1"` |

### 3. Run / Publish
Use the Mattercraft editor's built-in **Run** or **Publish** workflow to preview and deploy the experience to a WebXR device.

## Exporting Assets to Cognitive3D

Before you can view analytics on the Cognitive3D dashboard, you need to upload scene and dynamic object representations.

### Export Dynamic Objects — `Shift + D`
While the app is running in a browser, press **Shift + D** to export all registered dynamic objects. Each object is exported as a GLB file and saved/downloaded. These files are uploaded to the Cognitive3D dashboard to enable object-level heatmaps and tracking.

### Export Scene — `Shift + E`
Press **Shift + E** to export the static scene geometry. This exports:
- `scene.gltf` — the 3D scene model
- `scene.bin` — geometry data
- `settings.json` — uploader configuration
- `screenshot.png` — scene thumbnail

### Uploading to the Dashboard
Once you have the exported files, use the [c3d-upload-tools](https://github.com/CognitiveVR/c3d-upload-tools) to upload the scene and objects to your Cognitive3D account.