import * as THREE from "three";
import { RACK_CONFIG, BALL_RADIUS, RACK_BOUNCE, SNAP_CONFIG } from "./config.js";

const tmpV1 = new THREE.Vector3();
const tmpQ1 = new THREE.Quaternion();

export class BallRack {
    constructor(scene, position = new THREE.Vector3(0.95, 0, 0.25)) {
        this.group = new THREE.Group();
        this.group.position.copy(position);
        this.group.rotation.y = Math.PI / 2;
        this.config = RACK_CONFIG;
        this.sockets = [];
        scene.add(this.group);
        this.group.updateWorldMatrix(true, true);
        this._buildFrame();
        this._createSockets();
    }

    _buildFrame() {
        const materials = {
            frame: new THREE.MeshLambertMaterial({ color: 0x666666 }),
            side: new THREE.MeshLambertMaterial({ color: 0x2a2a2a }),
        };
        const base = new THREE.Mesh(new THREE.BoxGeometry(this.config.length, this.config.tubeRadius, this.config.depth), materials.frame);
        base.position.y = this.config.shelfHeights[0] - 0.12;
        this.group.add(base);

        const sideWidth = this.config.tubeRadius * 2;
        const sideHeight = this.config.shelfHeights[2] + 0.25;
        [-1, 1].forEach((side) => {
            const panel = new THREE.Mesh(new THREE.BoxGeometry(sideWidth, sideHeight, this.config.depth), materials.side);
            panel.position.set(side * (this.config.length / 2 + sideWidth / 2), sideHeight / 2 - 0.02, 0);
            this.group.add(panel);
        });

        const railGeometry = new THREE.CylinderGeometry(this.config.tubeRadius, this.config.tubeRadius, this.config.length - 0.02, 16);
        this.config.shelfHeights.forEach((height) => {
            const railZ = this.config.depth * 0.28;
            [-1, 1].forEach((side) => {
                const rail = new THREE.Mesh(railGeometry, materials.frame);
                rail.position.set(0, height + 0.02, side * railZ);
                rail.rotation.z = Math.PI / 2;
                this.group.add(rail);
            });
        });
    }

    _createSockets() {
        const columnOffsets = [-1.5, -0.5, 0.5, 1.5].map((i) => i * this.config.ballSpacing);
        for (let row = 0; row < this.config.rows; row++) {
            for (let col = 0; col < this.config.columns; col++) {
                this.sockets.push({
                    row,
                    col,
                    localPos: new THREE.Vector3(columnOffsets[col], this.config.shelfHeights[row], 0),
                });
            }
        }
    }

    getSocketWorldPosition(i) {
        const row = Math.floor(i / this.config.columns);
        const col = i % this.config.columns;
        const socket = this.sockets[row * this.config.columns + col];
        if (!socket) return null;
        this.group.updateWorldMatrix(true, false);
        const worldPos = socket.localPos.clone().applyMatrix4(this.group.matrixWorld);
        worldPos.y += BALL_RADIUS + 0.02;
        return worldPos;
    }

    _worldToLocalVelocity(worldVel) {
        this.group.getWorldQuaternion(tmpQ1);
        return worldVel.clone().applyQuaternion(tmpQ1.clone().invert());
    }

    _localToWorldVelocity(localVel) {
        this.group.getWorldQuaternion(tmpQ1);
        return localVel.clone().applyQuaternion(tmpQ1);
    }

    checkCollisions(ball) {
        const localPos = this.group.worldToLocal(tmpV1.copy(ball.position));
        const localVel = this._worldToLocalVelocity(ball.velocity);

        const bounds = {
            xMin: -this.config.length / 2 - this.config.tubeRadius * 2,
            xMax: this.config.length / 2 + this.config.tubeRadius * 2,
            zMin: -this.config.depth / 2,
            zMax: this.config.depth / 2,
            yMax: this.config.shelfHeights[2] + 0.8,
        };

        if (localPos.x < bounds.xMin - 0.4 || localPos.x > bounds.xMax + 0.4 || localPos.z < bounds.zMin - 0.4 || localPos.z > bounds.zMax + 0.4 || localPos.y > bounds.yMax) return;

        if (localPos.x - BALL_RADIUS < bounds.xMin && localVel.x < 0) {
            localPos.x = bounds.xMin + BALL_RADIUS + 0.001;
            localVel.x *= -RACK_BOUNCE;
        }
        if (localPos.x + BALL_RADIUS > bounds.xMax && localVel.x > 0) {
            localPos.x = bounds.xMax - BALL_RADIUS - 0.001;
            localVel.x *= -RACK_BOUNCE;
        }
        if (localPos.z - BALL_RADIUS < bounds.zMin && localVel.z < 0) {
            localPos.z = bounds.zMin + BALL_RADIUS + 0.001;
            localVel.z *= -RACK_BOUNCE;
        }

        let activeShelf = null;
        for (const shelfY of this.config.shelfHeights) {
            const inX = localPos.x > -this.config.length / 2 + BALL_RADIUS && localPos.x < this.config.length / 2 - BALL_RADIUS;
            const inZ = localPos.z > -this.config.depth * 0.3 + BALL_RADIUS && localPos.z < this.config.depth * 0.3 - BALL_RADIUS;
            if (inX && inZ && shelfY <= localPos.y) {
                if (!activeShelf || shelfY > activeShelf) activeShelf = shelfY;
            }
        }

        if (activeShelf !== null) {
            const shelfTop = activeShelf + BALL_RADIUS;
            if (localVel.y <= 0 && localPos.y <= shelfTop + 0.02) {
                localPos.y = shelfTop + 0.001;
                localVel.y *= -0.2;
                localVel.x *= 0.7;
                localVel.z *= 0.7;
            }
        }

        ball.position.copy(this.group.localToWorld(localPos));
        ball.velocity.copy(this._localToWorldVelocity(localVel));
    }
}