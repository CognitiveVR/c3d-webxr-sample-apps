import * as THREE from "three";
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";

import { CONFIG } from "./src/config.js";
import { setupCognitive3DSession, c3d } from "./src/cognitive3d.js";
import { Basketball, BasketballHoop } from "./src/basketball.js";
import { BallRack } from "./src/rack.js";
import { Scoreboard } from "./src/ui.js";
import { VRControllerManager } from "./src/controller.js";

class GameState {
    constructor() {
        this.score = 0;
        this.attempts = 0;
        this.balls = [];
        this.controllers = new Map();
    }
    addScore() { this.score++; }
    addAttempt() { this.attempts++; }
}

class VRBasketballGame {
    constructor() {
        this.c3dAdapter = null;
        this.gameState = new GameState();
        this.clock = new THREE.Clock();
        this.setupRenderer();
        this.setupScene();
        this.createGameObjects();
        this.setupVR();

        if (this.c3dAdapter) {
            this.c3dAdapter.startTracking(this.renderer, this.camera, this.scene);
        }

        this.renderer.setAnimationLoop((time, frame) => this.update(time, frame));
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.xr.enabled = true;
        document.body.appendChild(this.renderer.domElement);
        document.body.appendChild(VRButton.createButton(this.renderer));
        window.addEventListener("resize", () => this.onResize());

        const { adapter } = setupCognitive3DSession(this.renderer, () => ({
            attempts: this.gameState.attempts,
            made: this.gameState.score,
        }));
        this.c3dAdapter = adapter;
        this.setupKeyHandlers();
    }

    setupKeyHandlers() {
        document.addEventListener("keydown", async (e) => {
            if (e.key.toLowerCase() === "e" && this.c3dAdapter) {
                const exportGroup = new THREE.Group();
                exportGroup.name = "VRHoops_StaticScene";
                if (this.floor) exportGroup.add(this.floor.clone());
                if (this.hoop?.group) exportGroup.add(this.hoop.group.clone(true));
                if (this.rack?.group) exportGroup.add(this.rack.group.clone(true));
                this.c3dAdapter.exportScene(exportGroup, "VR Hoops", this.renderer, this.camera);
            }
            if (e.key.toLowerCase() === "o" && this.c3dAdapter) {
                const ball = this.gameState.balls[0];
                if (ball?.mesh) {
                    const exportMesh = ball.mesh.clone();
                    exportMesh.geometry = exportMesh.geometry.clone();
                    exportMesh.geometry.center();
                    exportMesh.position.set(0, 0, 0);
                    exportMesh.quaternion.set(0, 0, 0, 1);
                    exportMesh.scale.set(1, 1, 1);
                    exportMesh.updateMatrix();
                    exportMesh.updateMatrixWorld(true);
                    await this.c3dAdapter.exportObject(exportMesh, "Basketball", this.renderer, this.camera);
                }
            }
        });
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87ceeb);
        this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
        this.camera.position.set(0, 1.8, 1.2);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
        const sunlight = new THREE.DirectionalLight(0xffffff, 0.8);
        sunlight.position.set(10, 10, 5);
        sunlight.castShadow = true;
        this.scene.add(sunlight);
    }

    createGameObjects() {
        this.floor = new THREE.Mesh(new THREE.PlaneGeometry(15, 28), new THREE.MeshLambertMaterial({ color: 0x8b4513, side: THREE.DoubleSide }));
        this.floor.rotation.x = -Math.PI / 2;
        this.floor.receiveShadow = true;
        this.scene.add(this.floor);

        this.hoop = new BasketballHoop(this.scene);
        this.rack = new BallRack(this.scene);
        this.scoreboard = new Scoreboard(this.scene);

        for (let i = 0; i < CONFIG.ball.count; i++) {
            const position = this.rack.getSocketWorldPosition(i);
            if (position) {
                const ball = new Basketball(i, position);
                this.scene.add(ball.mesh);
                this.gameState.balls.push(ball);
            }
        }
        this.scoreboard.update(0, 0);
    }

    setupVR() {
        this.controllerManager = new VRControllerManager(this.renderer, this.scene, this.gameState, {
            onAttempt: () => this.scoreboard.update(this.gameState.score, this.gameState.attempts),
        });
    }

    update(time, frame) {
        if (this.c3dAdapter) this.c3dAdapter.update(time, frame);
        const deltaTime = Math.min(this.clock.getDelta(), 0.1);
        this.controllerManager.update(deltaTime);

        const environment = { hoop: this.hoop, rack: this.rack };
        for (const ball of this.gameState.balls) {
            ball.update(deltaTime, environment);
            this.hoop.checkIfScored(ball, () => {
                this.gameState.addScore();
                this.scoreboard.update(this.gameState.score, this.gameState.attempts);
                if (c3d) {
                    const p = ball.position;
                    c3d.customEvent.send("score", [p.x, p.y, p.z], {
                        score: this.gameState.score,
                        attempts: this.gameState.attempts,
                        speed: ball.velocity.length(),
                    });
                }
            });
        }
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

new VRBasketballGame();