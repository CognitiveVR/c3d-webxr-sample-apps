import * as THREE from "three";
import { CONFIG } from "./config.js";

export class Scoreboard {
    constructor(scene) {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 256;
        this.ctx = canvas.getContext("2d");
        this.texture = new THREE.CanvasTexture(canvas);
        this.mesh = new THREE.Mesh(
            new THREE.PlaneGeometry(1.6, 0.8),
            new THREE.MeshBasicMaterial({ map: this.texture, transparent: true })
        );
        this.mesh.position.set(-2.0, CONFIG.hoop.height, CONFIG.hoop.distance + 0.8);
        this.mesh.rotation.y = Math.PI / 4;
        scene.add(this.mesh);
    }

    update(score, attempts) {
        const { ctx, texture } = this;
        ctx.clearRect(0, 0, 512, 256);
        ctx.fillStyle = "rgba(0,0,0,0.75)";
        ctx.fillRect(0, 0, 512, 256);
        ctx.fillStyle = "#00ff88";
        ctx.font = "bold 64px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("VR Hoops", 256, 90);
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 56px monospace";
        ctx.fillText(`${score} / ${attempts}`, 256, 180);
        texture.needsUpdate = true;
    }
}