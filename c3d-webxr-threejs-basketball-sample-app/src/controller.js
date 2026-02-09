import * as THREE from "three";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";
import { CONFIG } from "./config.js";
import { c3d } from "./cognitive3d.js";

export class VRControllerManager {
    constructor(renderer, scene, gameState, options = {}) {
        this.renderer = renderer;
        this.scene = scene;
        this.gameState = gameState;
        this.onAttempt = options.onAttempt;
        this.modelFactory = new XRControllerModelFactory();
        this.setupControllers();
    }

    setupControllers() {
        for (let i = 0; i < 2; i++) {
            const controller = this.renderer.xr.getController(i);
            const grip = this.renderer.xr.getControllerGrip(i);
            grip.add(this.modelFactory.createControllerModel(grip));
            controller.userData = {
                velocity: new THREE.Vector3(),
                lastPosition: new THREE.Vector3(),
                grabbedBall: null,
            };
            controller.addEventListener("selectstart", () => this.onGrab(controller));
            controller.addEventListener("selectend", () => this.onRelease(controller));
            this.scene.add(controller, grip);
            this.gameState.controllers.set(controller, controller.userData);
        }
    }

    update(deltaTime) {
        for (const [controller, data] of this.gameState.controllers) {
            const currentPos = new THREE.Vector3();
            controller.getWorldPosition(currentPos);
            if (data.lastPosition.lengthSq() > 0 && deltaTime > 0) {
                data.velocity.subVectors(currentPos, data.lastPosition).divideScalar(deltaTime);
            }
            data.lastPosition.copy(currentPos);
        }
    }

    onGrab(controller) {
        const controllerPos = new THREE.Vector3();
        controller.getWorldPosition(controllerPos);
        let nearest = null;
        let nearestDist = CONFIG.controller.grabDistance;
        for (const ball of this.gameState.balls) {
            if (ball.isHeld) continue;
            const dist = controllerPos.distanceTo(ball.position);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = ball;
            }
        }
        if (nearest) {
            controller.userData.grabbedBall = nearest;
            nearest.grab(controller);
        }
    }

    onRelease(controller) {
        const ball = controller.userData.grabbedBall;
        if (!ball) return;
        const releasedMesh = ball.release(controller, controller.userData.velocity);
        this.scene.add(releasedMesh);
        controller.userData.grabbedBall = null;
        this.gameState.addAttempt();
        this.onAttempt?.(this.gameState);

        if (c3d) {
            const p = new THREE.Vector3();
            releasedMesh.getWorldPosition(p);
            c3d.customEvent.send("shotAttempt", [p.x, p.y, p.z], {
                attempts: this.gameState.attempts,
                speed: controller.userData.velocity.length(),
            });
        }
    }
}