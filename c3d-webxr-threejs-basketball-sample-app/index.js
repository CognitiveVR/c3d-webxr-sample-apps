// ==============================================================================
// IMPORTS & DEPENDENCIES
// ==============================================================================

// Three.js core and utilities
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

// WebXR components
import { VRButton } from "three/examples/jsm/webxr/VRButton.js";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";

// Cognitive3D analytics
import C3DAnalytics from "@cognitive3d/analytics";
import C3DThreeAdapter from "@cognitive3d/analytics/adapters/threejs";

// Game configuration
const CONFIG = {
	hoop: {
		height: 2.85,
		distance: -2.6,
		rimRadius: 0.3,
		rimThickness: 0.02,
		scoreRadius: 0.27,
		net: {
			strands: 16,
			segments: 4,
			segmentLength: 0.1,
			thickness: 0.003,
			inwardCurve: 0.15,
		},
	},
	ball: {
		radius: 0.12,
		color: 0xff8c00,
		count: 12,
	},
	physics: {
		gravity: -4.5,
		ground: { bounce: 0.6, friction: 0.9 },
		rim: { bounce: 0.25, friction: 0.4 },
		backboard: { bounce: 0.8 },
		rack: { bounce: 0.3 },
	},
	rack: {
		rows: 3,
		cols: 4,
		position: new THREE.Vector3(0.95, 0, 0.25),
		shelfHeights: [0.38, 0.68, 0.98],
		snap: {
			radius: 0.12,
			strength: 7.0,
			damping: 0.55,
			maxSpeed: 0.8,
		},
	},
	controller: {
		grabDistance: 0.33,
		throwMultiplier: 1.5,
		minThrowVelocity: 1.0,
		ballOffset: new THREE.Vector3(0, 0, -0.15),
	},
};

const SCORE_REGION = {
	radius: CONFIG.hoop.scoreRadius, // keep your current radius for now
	height: 0.06, // 6 cm tall band
	topOffset: 0.015, // starts 1.5 cm below the rim plane
};

// Derived configuration
const BALL_RADIUS = CONFIG.ball.radius;
const RACK_BOUNCE = CONFIG.physics.rack.bounce;

const RACK_CONFIG = {
	rows: CONFIG.rack.rows,
	columns: CONFIG.rack.cols ?? 4,
	length: 1.35,
	depth: 0.5,
	tubeRadius: 0.02,
	shelfHeights: CONFIG.rack.shelfHeights,
	ballSpacing: CONFIG.ball.radius * 2 + 0.05,
};

const SNAP_CONFIG = {
	captureRadius: 0.18,
	verticalTolerance: 0.08,
	strength: CONFIG.rack.snap.strength,
	damping: CONFIG.rack.snap.damping,
	maxSpeed: CONFIG.rack.snap.maxSpeed,
};

// ==============================================================================
// UTILITY VARIABLES & FUNCTIONS
// ==============================================================================

const tmpV1 = new THREE.Vector3();
const tmpQ1 = new THREE.Quaternion();

// Global C3D instance
let c3d = null;

// ==============================================================================
// HUD & ANALYTICS
// ==============================================================================

function initializeC3D(renderer) {
	if (c3d) return c3d;

	console.log(import.meta.env.VITE_C3D_APPLICATION_KEY);
	console.log(import.meta.env.VITE_C3D_NETWORK_HOST);
	console.log(import.meta.env.VITE_C3D_SCENE_NAME);
	console.log(import.meta.env.VITE_C3D_SCENE_ID);
	console.log(import.meta.env.VITE_C3D_VERSION_NUMBER);

	c3d = new C3DAnalytics(
		{
			config: {
				APIKey: import.meta.env.VITE_C3D_APPLICATION_KEY,
				networkHost: import.meta.env.VITE_C3D_NETWORK_HOST,
				allSceneData: [
					{
						sceneName: import.meta.env.VITE_C3D_SCENE_NAME,
						sceneId: import.meta.env.VITE_C3D_SCENE_ID,
						versionNumber: import.meta.env.VITE_C3D_SCENE_VERSION_NUMBER,
					},
				],
			},
		},
		renderer
	);

	c3d.setScene(import.meta.env.VITE_C3D_SCENE_NAME);
	c3d.userId = "threejs_user_" + Date.now();
	c3d.setUserName("ThreeJS_SDK_Test_User");
	c3d.setDeviceName("WindowsPCBrowserVR");
	c3d.setDeviceProperty("AppName", "ThreeJS_WebXR_SDK_Test_App");
	c3d.setUserProperty("c3d.version", "0.1");
	c3d.setUserProperty("c3d.app.version", "0.2");
	c3d.setUserProperty("c3d.deviceid", "threejs_windows_device_" + Date.now());

	new C3DThreeAdapter(c3d);

	return c3d;
}

function setupCognitive3DSession(renderer, getFinalStats = () => null) {
	const c3dInstance = initializeC3D(renderer);

	renderer.xr.addEventListener("sessionstart", async () => {
		const xrSession = renderer.xr.getSession();
		if (xrSession?.supportedFrameRates?.includes?.(120)) {
			await xrSession.updateTargetFrameRate(120);
		}
		await c3dInstance.startSession(xrSession);
	});

	const flushUserPropsAndEnd = () => {
		try {
			const stats = getFinalStats?.();
			if (stats && c3dInstance) {
				// write once, right before we end
				c3dInstance.setUserProperty("game.shotsAttempted", stats.attempts | 0);
				c3dInstance.setUserProperty("game.shotsMade", stats.made | 0);
			}
		} catch (_) {}
		c3dInstance.endSession();
	};

	renderer.xr.addEventListener("sessionend", flushUserPropsAndEnd);

	// cover normal tab closes, refreshes, and backgrounding
	window.addEventListener("pagehide", flushUserPropsAndEnd);
	document.addEventListener("visibilitychange", () => {
		if (document.visibilityState === "hidden") flushUserPropsAndEnd();
	});
}

// ==============================================================================
// GAME CLASSES
// ==============================================================================

// Game state management
class GameState {
	constructor() {
		this.score = 0;
		this.attempts = 0;
		this.balls = [];
		this.controllers = new Map();
	}
	addScore() {
		this.score++;
	}
	addAttempt() {
		this.attempts++;
	}
	reset() {
		this.score = 0;
		this.attempts = 0;
	}
}

// Basketball physics object
class Basketball {
	constructor() {
		this.mesh = new THREE.Mesh(
			new THREE.SphereGeometry(CONFIG.ball.radius, 20, 20),
			new THREE.MeshLambertMaterial({ color: CONFIG.ball.color })
		);
		this.mesh.castShadow = true;
		this.velocity = new THREE.Vector3();
		this.isHeld = false;
		this.hasScored = false;
		this.isSeated = true;
	}
	get position() {
		return this.mesh.position;
	}
	set position(v) {
		this.mesh.position.copy(v);
	}
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

// Basketball hoop with physics
class BasketballHoop {
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
		const merger = BufferGeometryUtils.mergeGeometries ?? BufferGeometryUtils.mergeGeometries;
		const merged = merger(geos, false);
		const netMat = new THREE.MeshStandardMaterial({
			color: 0xffffff,
			roughness: 0.9,
			metalness: 0.0,
			flatShading: true,
		});
		const netMesh = new THREE.Mesh(merged, netMat);
		netMesh.castShadow = false;
		netMesh.receiveShadow = false;
		netGroup.add(netMesh);
		netGroup.position.copy(this.position);
		netGroup.position.y += 0.0;
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

		// Horizontal: inside cylinder
		const inCylinder =
			Math.hypot(ball.position.x - this.position.x, ball.position.z - this.position.z) <= SCORE_REGION.radius;

		// Vertical: inside short band under the rim
		const inShortBand =
			ball.position.y <= rimY - SCORE_REGION.topOffset &&
			ball.position.y >= rimY - SCORE_REGION.topOffset - SCORE_REGION.height;

		// Require falling so it doesn't score on the way up
		if (inCylinder && inShortBand && ball.velocity.y < 0) {
			ball.hasScored = true;
			onScore?.();
		}
	}
}

// Ball storage rack with snapping physics
class BallRack {
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

		const base = new THREE.Mesh(
			new THREE.BoxGeometry(this.config.length, this.config.tubeRadius, this.config.depth),
			materials.frame
		);
		base.position.y = this.config.shelfHeights[0] - 0.12;
		base.castShadow = true;
		this.group.add(base);

		const sideWidth = this.config.tubeRadius * 2;
		const sideHeight = this.config.shelfHeights[2] + 0.25;

		[-1, 1].forEach((side) => {
			const panel = new THREE.Mesh(
				new THREE.BoxGeometry(sideWidth, sideHeight, this.config.depth),
				materials.side
			);
			panel.position.set(side * (this.config.length / 2 + sideWidth / 2), sideHeight / 2 - 0.02, 0);
			this.group.add(panel);
		});

		const railGeometry = new THREE.CylinderGeometry(
			this.config.tubeRadius,
			this.config.tubeRadius,
			this.config.length - 0.02,
			16
		);

		this.config.shelfHeights.forEach((height) => {
			const railZ = this.config.depth * 0.28;
			[-1, 1].forEach((side) => {
				const rail = new THREE.Mesh(railGeometry, materials.frame);
				rail.position.set(0, height + 0.02, side * railZ);
				rail.rotation.z = Math.PI / 2;
				rail.castShadow = true;
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

	getSocketWorldPosition(rowOrIndex, colMaybe) {
		let row, col;
		if (typeof colMaybe === "number") {
			row = rowOrIndex;
			col = colMaybe;
		} else {
			const i = rowOrIndex;
			row = Math.floor(i / this.config.columns);
			col = i % this.config.columns;
		}
		if (row < 0 || row >= this.config.rows || col < 0 || col >= this.config.columns) return null;
		const idx = row * this.config.columns + col;
		const socket = this.sockets[idx];
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

		if (
			localPos.x < bounds.xMin - 0.4 ||
			localPos.x > bounds.xMax + 0.4 ||
			localPos.z < bounds.zMin - 0.4 ||
			localPos.z > bounds.zMax + 0.4 ||
			localPos.y > bounds.yMax
		) {
			return;
		}

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
		const shelfBounds = {
			xMin: -this.config.length / 2,
			xMax: this.config.length / 2,
			zMin: -this.config.depth * 0.3,
			zMax: this.config.depth * 0.3,
		};

		for (const shelfY of this.config.shelfHeights) {
			const inX = localPos.x > shelfBounds.xMin + BALL_RADIUS && localPos.x < shelfBounds.xMax - BALL_RADIUS;
			const inZ = localPos.z > shelfBounds.zMin + BALL_RADIUS && localPos.z < shelfBounds.zMax - BALL_RADIUS;
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

	trySnapToSocket(ball, deltaTime) {
		if (ball.isHeld) return;
		if (ball.velocity.length() > SNAP_CONFIG.maxSpeed) return;

		const localPos = this.group.worldToLocal(tmpV1.copy(ball.position));

		let nearestSocket = null;
		let nearestDistance = Infinity;

		for (const socket of this.sockets) {
			const targetY = socket.localPos.y + BALL_RADIUS;
			if (Math.abs(localPos.y - targetY) > SNAP_CONFIG.verticalTolerance) continue;
			const dist = Math.hypot(localPos.x - socket.localPos.x, localPos.z - socket.localPos.z);
			if (dist < SNAP_CONFIG.captureRadius && dist < nearestDistance) {
				nearestDistance = dist;
				nearestSocket = socket;
			}
		}

		if (nearestSocket) {
			const target = nearestSocket.localPos.clone();
			target.y += BALL_RADIUS;
			const force = target.sub(localPos).multiplyScalar(SNAP_CONFIG.strength * deltaTime);
			localPos.add(force);
			ball.velocity.multiplyScalar(SNAP_CONFIG.damping);
			ball.position.copy(this.group.localToWorld(localPos));
		}
	}
}

// 3D canvas-based scoreboard
class Scoreboard {
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

// VR controller input handling
class VRControllerManager {
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
			this.scene.add(controller);
			this.scene.add(grip);
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

// ==============================================================================
// MAIN GAME CLASS
// ==============================================================================

class VRBasketballGame {
	constructor() {
		this.gameState = new GameState();
		this.clock = new THREE.Clock();
		this.setupRenderer();
		this.setupScene();
		this.createGameObjects();
		this.setupVR();
		this.renderer.setAnimationLoop(() => this.update());
	}

	// Initialize WebGL renderer and VR setup
	setupRenderer() {
		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.renderer.xr.setReferenceSpaceType("local-floor");
		this.renderer.xr.enabled = true;
		document.body.appendChild(this.renderer.domElement);
		document.body.appendChild(VRButton.createButton(this.renderer));
		window.addEventListener("resize", () => this.onResize());

		setupCognitive3DSession(this.renderer, () => ({
			attempts: this.gameState.attempts,
			made: this.gameState.score,
		}));

		// Export scene on 'E' key press
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === "e") {
				this.exportSceneGLTFWithBin();
			}
		});
	}

	// Setup 3D scene, camera, and lighting
	setupScene() {
		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0x87ceeb);
		this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
		this.camera.position.set(0, 1.8, 1.2);
		this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
		const sunlight = new THREE.DirectionalLight(0xffffff, 0.8);
		sunlight.position.set(10, 10, 5);
		sunlight.castShadow = true;
		sunlight.shadow.mapSize.set(2048, 2048);
		this.scene.add(sunlight);
	}

	// Create all game objects (floor, hoop, rack, balls, scoreboard)
	createGameObjects() {
		// Create floor
		this.floor = new THREE.Mesh(
			new THREE.PlaneGeometry(15, 28),
			new THREE.MeshLambertMaterial({ color: 0x8b4513, side: THREE.DoubleSide })
		);
		this.floor.rotation.x = -Math.PI / 2;
		this.floor.receiveShadow = true;
		this.scene.add(this.floor);

		// Create game objects
		this.hoop = new BasketballHoop(this.scene);
		this.rack = new BallRack(this.scene);
		this.scoreboard = new Scoreboard(this.scene);

		// Create and position basketballs
		for (let i = 0; i < CONFIG.ball.count; i++) {
			const ball = new Basketball();
			const position = this.rack.getSocketWorldPosition(i);
			if (position) ball.position = position;
			this.scene.add(ball.mesh);
			this.gameState.balls.push(ball);
		}
		this.scoreboard.update(0, 0);
	}

	// Setup VR controllers
	setupVR() {
		this.controllerManager = new VRControllerManager(this.renderer, this.scene, this.gameState, {
			onAttempt: () => this.scoreboard.update(this.gameState.score, this.gameState.attempts),
		});
	}

	// Main game loop
	update() {
		const deltaTime = Math.min(this.clock.getDelta(), 0.1);
		this.controllerManager.update(deltaTime);

		// Update ball physics and check scoring
		const environment = { hoop: this.hoop, rack: this.rack };
		for (const ball of this.gameState.balls) {
			ball.update(deltaTime, environment);
			this.hoop.checkIfScored(ball, () => {
				this.gameState.addScore();
				this.scoreboard.update(this.gameState.score, this.gameState.attempts);

				// Send scoring analytics
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

	// Handle window resize
	onResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	// ==============================================================================
	// GLTF EXPORT FUNCTIONALITY
	// ==============================================================================

	// Ensure export directory exists (File System Access API)
	async ensureExportDir() {
		if (this.exportDirHandle) return this.exportDirHandle;
		if (!window.showDirectoryPicker) return null;
		const root = await window.showDirectoryPicker();
		const sceneDir = await root.getDirectoryHandle("scene", { create: true });
		const perm = await sceneDir.requestPermission?.({ mode: "readwrite" });
		if (perm && perm !== "granted") throw new Error("Write permission denied");
		this.exportDirHandle = sceneDir;
		return sceneDir;
	}
	// Write file using File System Access API
	async writeFile(dirHandle, filename, blob) {
		const fileHandle = await dirHandle.getFileHandle(filename, { create: true });
		const writable = await fileHandle.createWritable();
		await writable.write(blob);
		await writable.close();
	}

	// Export current scene to GLTF with separate .bin file
	exportSceneGLTFWithBin() {
		const exporter = new GLTFExporter();

		const exportGroup = new THREE.Group();
		exportGroup.name = "VRHoops_StaticScene";
		if (this.floor) exportGroup.add(this.floor.clone());
		if (this.hoop?.group) exportGroup.add(this.hoop.group.clone(true));
		if (this.rack?.group) exportGroup.add(this.rack.group.clone(true));

		const balls = new THREE.Group();
		balls.name = "Balls";
		for (const b of this.gameState.balls) {
			const c = b.mesh.clone();
			c.position.copy(b.mesh.position);
			c.quaternion.copy(b.mesh.quaternion);
			c.scale.copy(b.mesh.scale);
			balls.add(c);
		}
		exportGroup.add(balls);

		exporter.parse(
			exportGroup,
			async (gltf) => {
				const prefix = "data:application/octet-stream;base64,";
				const uri = gltf.buffers?.[0]?.uri || "";
				let binBlob = null;
				if (uri.startsWith(prefix)) {
					const b64 = uri.slice(prefix.length);
					const raw = atob(b64);
					const bytes = new Uint8Array(raw.length);
					for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
					binBlob = new Blob([bytes.buffer], { type: "application/octet-stream" });
					gltf.buffers[0].uri = "scene.bin";
				}
				const gltfBlob = new Blob([JSON.stringify(gltf, null, 2)], { type: "model/gltf+json" });

				const dir = await this.ensureExportDir().catch(() => null);
				if (dir) {
					if (binBlob) await this.writeFile(dir, "scene.bin", binBlob);
					await this.writeFile(dir, "scene.gltf", gltfBlob);
					console.log("Saved to directory: scene/scene.gltf + scene/scene.bin");
				} else {
					if (binBlob) this._downloadBlob(binBlob, "scene.bin");
					this._downloadBlob(gltfBlob, "scene.gltf");
					console.warn("File System Access API not available; used downloads instead.");
				}
			},
			(err) => console.error("GLTF export failed:", err),
			{ binary: false, embedImages: true, onlyVisible: true, truncateDrawRange: true, maxTextureSize: 4096 }
		);
	}

	// Fallback download for browsers without File System Access API
	_downloadBlob(blob, filename) {
		const a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			URL.revokeObjectURL(a.href);
			a.remove();
		}, 800);
	}
}

// ==============================================================================
// GAME INITIALIZATION
// ==============================================================================

new VRBasketballGame();