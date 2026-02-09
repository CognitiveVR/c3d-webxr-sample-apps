import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { CONFIG, SCORE_REGION } from "./config.js";
import { c3d } from "./cognitive3d.js";

export class Basketball {
    constructor(index, initialPosition) {
        this.mesh = new THREE.Mesh(
            new THREE.SphereGeometry(CONFIG.ball.radius, 20, 20),
            new THREE.MeshLambertMaterial({ color: CONFIG.ball.color })
        );
        this.mesh.castShadow = true;
        this.velocity = new THREE.Vector3();
        this.isHeld = false;
        this.hasScored = false;
        this.isSeated = true;

        if (initialPosition) {
            this.mesh.position.copy(initialPosition);
        }

        this.mesh.name = `Basketball_${index}`;
        this.mesh.userData.isDynamic = true;

        if (c3d) {
            const meshName = "Basketball";
            const customId = `ball_${index}`;
            const worldPos = [this.mesh.position.x, this.mesh.position.y, this.mesh.position.z];
            const quaternion = this.mesh.quaternion.toArray();

            const objectId = c3d.dynamicObject.registerObjectCustomId(
                this.mesh.name,
                meshName,
                customId,
                worldPos,
                quaternion
            );
            this.mesh.userData.c3dId = objectId;
        }
    }

    get position() { return this.mesh.position; }
    set position(v) { this.mesh.position.copy(v); }

    update(deltaTime, environment) {
        if (this.isHeld) return;
        this.velocity.y += CONFIG.physics.gravity * deltaTime;
        this.position.add(this.velocity.clone().multiplyScalar(deltaTime));
        this.checkGroundCollision();
        environment.hoop?.checkCollisions(this);
        environment.rack?.checkCollisions(this);
    }

    checkGroundCollision() {
        if (this.position.y <= CONFIG.ball.radius) {
            this.position.y = CONFIG.ball.radius;
            this.velocity.y *= -CONFIG.physics.ground.bounce;
            this.velocity.x *= CONFIG.physics.ground.friction;
            this.velocity.z *= CONFIG.physics.ground.friction;
        }
    }

    grab(controller) {
        this.isHeld = true;
        this.isSeated = false;
        this.velocity.set(0, 0, 0);
        controller.add(this.mesh);
        this.mesh.position.copy(CONFIG.controller.ballOffset);
    }

    release(controller, throwVelocity) {
        this.isHeld = false;
        this.hasScored = false;
        controller.remove(this.mesh);
        controller.getWorldPosition(this.position);
        this.velocity.copy(throwVelocity);
        this.velocity.multiplyScalar(CONFIG.controller.throwMultiplier);
        if (this.velocity.y < CONFIG.controller.minThrowVelocity) {
            this.velocity.y = CONFIG.controller.minThrowVelocity;
        }
        return this.mesh;
    }
}

export class BasketballHoop {
    constructor(scene) {
        this.position = new THREE.Vector3(0, CONFIG.hoop.height, CONFIG.hoop.distance);
        this.group = new THREE.Group();
        this.createBackboard();
        this.createRim();
        this.createNet();
        this.createStand();
        scene.add(this.group);
    }

    createBackboard() {
        const geometry = new THREE.BoxGeometry(1.8, 1.2, 0.04);
        const material = new THREE.MeshLambertMaterial({ color: 0xffffff });
        this.backboard = new THREE.Mesh(geometry, material);
        this.backboard.position.set(this.position.x, this.position.y, this.position.z - 0.17);
        this.backboard.castShadow = true;
        this.backboard.receiveShadow = true;
        this.group.add(this.backboard);
    }

    createRim() {
        const geometry = new THREE.TorusGeometry(CONFIG.hoop.rimRadius, CONFIG.hoop.rimThickness, 12, 24);
        const material = new THREE.MeshLambertMaterial({ color: 0xff4500 });
        this.rim = new THREE.Mesh(geometry, material);
        this.rim.position.copy(this.position);
        this.rim.rotation.x = Math.PI / 2;
        this.group.add(this.rim);
    }

    createNet() {
        const netGroup = new THREE.Group();
        const rings = 7;
        const pointsPerRing = 16;
        const netHeight = 0.45;
        const topRadius = CONFIG.hoop.rimRadius * 0.98;
        const bottomRadius = topRadius * 0.4;
        const ropeRadius = 0.004;
        const tubeSegs = 10;
        const tubeRadialSegs = 6;
        const sagFactor = 0.04;
        const inwardFactor = 0.96;

        const ringYs = [];
        const ringRs = [];
        for (let i = 0; i < rings; i++) {
            const t = i / (rings - 1);
            ringYs.push(-netHeight * t);
            ringRs.push(THREE.MathUtils.lerp(topRadius, bottomRadius, Math.pow(t, 1.1)));
        }
        const ringPts = [];
        for (let i = 0; i < rings; i++) {
            const pts = [];
            const offset = (i % 2) * ((Math.PI * 2) / (pointsPerRing * 2));
            for (let j = 0; j < pointsPerRing; j++) {
                const a = (j / pointsPerRing) * Math.PI * 2 + offset;
                pts.push(new THREE.Vector3(Math.cos(a) * ringRs[i], ringYs[i], Math.sin(a) * ringRs[i]));
            }
            ringPts.push(pts);
        }
        const makeEdge = (A, B) => {
            const mid = A.clone().add(B).multiplyScalar(0.5);
            mid.set(mid.x * inwardFactor, mid.y - sagFactor, mid.z * inwardFactor);
            const curve = new THREE.QuadraticBezierCurve3(A, mid, B);
            return new THREE.TubeGeometry(curve, tubeSegs, ropeRadius, tubeRadialSegs, false);
        };
        const geos = [];
        for (let i = 0; i < rings - 1; i++) {
            const rowA = ringPts[i];
            const rowB = ringPts[i + 1];
            for (let j = 0; j < pointsPerRing; j++) {
                const A = rowA[j];
                const B = rowB[j];
                const C = rowB[(j + 1) % pointsPerRing];
                geos.push(makeEdge(A, B));
                geos.push(makeEdge(A, C));
            }
        }
        const last = ringPts[rings - 1];
        for (let j = 0; j < pointsPerRing; j++) {
            const A = last[j];
            const B = last[(j + 1) % pointsPerRing];
            geos.push(makeEdge(A, B));
        }
        const merger = BufferGeometryUtils.mergeGeometries;
        const merged = merger(geos, false);
        const netMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.9,
            metalness: 0.0,
            flatShading: true,
        });
        const netMesh = new THREE.Mesh(merged, netMat);
        netGroup.add(netMesh);
        netGroup.position.copy(this.position);
        this.group.add(netGroup);
    }

    createStand() {
        const materials = {
            post: new THREE.MeshLambertMaterial({ color: 0x444444 }),
            base: new THREE.MeshLambertMaterial({ color: 0x3a3a3a }),
        };
        const postHeight = this.position.y + 0.3;
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, postHeight, 20), materials.post);
        post.position.set(this.position.x, postHeight / 2, this.position.z - 0.9);
        post.castShadow = true;
        const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 1.1), materials.base);
        base.position.set(post.position.x, 0.06, post.position.z);
        base.castShadow = true;
        this.group.add(post, base);
    }

    checkCollisions(ball) {
        this.checkBackboardCollision(ball);
        this.checkRimCollision(ball);
    }

    checkBackboardCollision(ball) {
        const boardFront = this.backboard.position.z + 0.02;
        const bounds = { width: 0.9, height: 0.6 };
        const inBounds =
            Math.abs(ball.position.x - this.position.x) <= bounds.width &&
            Math.abs(ball.position.y - this.position.y) <= bounds.height &&
            ball.velocity.z < 0 &&
            ball.position.z <= boardFront + CONFIG.ball.radius;
        if (inBounds) {
            ball.velocity.z *= -CONFIG.physics.backboard.bounce;
            ball.position.z = boardFront + CONFIG.ball.radius + 0.001;
        }
    }

    checkRimCollision(ball) {
        const toRim = new THREE.Vector2(ball.position.x - this.position.x, ball.position.z - this.position.z);
        const horizontalDist = toRim.length() || 0.0001;
        const toTubeCenter = horizontalDist - CONFIG.hoop.rimRadius;
        const verticalDiff = ball.position.y - this.position.y;
        const distToTube = Math.sqrt(toTubeCenter * toTubeCenter + verticalDiff * verticalDiff);
        const minDistance = CONFIG.hoop.rimThickness + CONFIG.ball.radius;
        const penetration = minDistance - distToTube;
        if (penetration > 0) {
            const normal = new THREE.Vector3(
                toRim.x * (toTubeCenter / horizontalDist),
                verticalDiff,
                toRim.y * (toTubeCenter / horizontalDist)
            ).normalize();
            ball.position.add(normal.clone().multiplyScalar(penetration + 0.001));
            const normalVel = normal.clone().multiplyScalar(ball.velocity.dot(normal));
            const tangentVel = ball.velocity.clone().sub(normalVel);
            ball.velocity.copy(
                tangentVel
                    .multiplyScalar(1 - CONFIG.physics.rim.friction)
                    .sub(normalVel.multiplyScalar(1 + CONFIG.physics.rim.bounce))
            );
        }
    }

    checkIfScored(ball, onScore) {
        if (ball.hasScored) return;
        const rimY = this.position.y;
        const inCylinder = Math.hypot(ball.position.x - this.position.x, ball.position.z - this.position.z) <= SCORE_REGION.radius;
        const inShortBand = ball.position.y <= rimY - SCORE_REGION.topOffset && ball.position.y >= rimY - SCORE_REGION.topOffset - SCORE_REGION.height;
        if (inCylinder && inShortBand && ball.velocity.y < 0) {
            ball.hasScored = true;
            onScore?.();
        }
    }
}