import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useOnBeforeRender, Event } from '@zcomponent/core';
import { Object3D } from '@zcomponent/three';
import * as THREE from 'three';
import { LeverContext } from './MyContext';

// For type-safe access into your zcomp file, import it at the top like this,
// then pass the class into `getZComponentInstance` below
// import { default as Scene } from './Scene.zcomp';

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

// The type of node that this behavior can be attached to
type NodeType = Object3D;

/**
 * @zbehavior
 **/
export class Lever extends Behavior<NodeType> {
	// The zcomponent this behavior has been constructed in
	// For type-safe access to the zcomp, import it above and pass the class in here
	protected zcomponent = this.getZComponentInstance(/* Scene */);

	/**
	 * @zprop
	 * @zdefault 45
	 */
	public maxRot = 45;

		/**
	 * @zprop
	 * @zui This is the current lever rotation (in radians)
	 */
	public leverRotation = new Number(0);

	/**
	 * Event emitted when the target grabs the lever
	 * @zui
	 */
	public onGrabbed = new Event<[]>();

	private dir = new THREE.Vector3();
	private _leverPos = new THREE.Vector3();
	private _isGrabbed = false;

	constructor(
		contextManager: ContextManager,
		instance: NodeType,
		protected constructorProps: ConstructionProps
	) {
		super(contextManager, instance);
		this.register(useOnBeforeRender(this.contextManager), this._frame);
	}

	private _v3 = new THREE.Vector3();

	private _frame = (dt: number) => {
		const ctx = this.contextManager.get(LeverContext);
		if (!ctx.target) return;
		const {target} = ctx;
		if (!(target instanceof Object3D)) return;
	
		if (!target.enabledResolved.value) return;


		target.element.getWorldPosition(this._v3);
		this.instance.element.getWorldPosition(this._leverPos);

		// Check distance
		const distance = this._v3.distanceTo(this._leverPos);
		if (distance > 0.3) {
			this._isGrabbed = false;
			return; // Only proceed if within 0.3 meters
		}

		// Emit grabbed event when target first comes into contact
		if (!this._isGrabbed) {
			this._isGrabbed = true;
			this.onGrabbed.emit();
		}

		// this.onLeverMoved.emit(this.leverRotation);


		this.dir.subVectors(this._v3, this._leverPos);

		const angleX = Math.atan2(this.dir.y, this.dir.z);
		let targetAngle = -angleX + Math.PI / 2;
		
		const maxAngle = THREE.MathUtils.degToRad(this.maxRot);
		const clampedTarget = THREE.MathUtils.clamp(targetAngle, -maxAngle, maxAngle);

		const lerpSpeed = 0.025;
		const lerpAlpha = THREE.MathUtils.clamp(lerpSpeed * dt, 0, 1);
		this.instance.element.rotation.x = THREE.MathUtils.lerp(this.instance.element.rotation.x, clampedTarget, lerpAlpha);
		this.leverRotation = this.instance.element.rotation.x;


		// console.log('Lever Rotation X (radians):', this.instance.element.rotation.x);

	};

	dispose() {
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(Lever);
