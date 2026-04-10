import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime, useOnBeforeRender } from "@zcomponent/core";
import { default as Lever_zcomp } from "./Lever.zcomp";
import { default as Scene} from "./Scene.zcomp";
import { Cognitive3D } from "@cognitive3d/three-mattercraft";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 **/
export class LeverBehavior extends Behavior<Lever_zcomp> {

	protected zcomponent = this.getZComponentInstance(Scene);
		

	constructor(contextManager: ContextManager, instance: Lever_zcomp, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);


        this.register(useOnBeforeRender(contextManager), dt => {
			// Get the rotation from the Lever behavior, which handles the actual lever rotation
			const leverBehavior = this.zcomponent.nodes.Lever.nodes.Group.behaviors.Lever;
			const rotationRadians = Number(leverBehavior.leverRotation); // Convert Number object to primitive
			const rotationDegrees = rotationRadians * (180 / Math.PI); // Convert radians to degrees
			
			this.updateForkliftAnimation(rotationDegrees);
			Cognitive3D.recordSensor("lever.rotation", rotationDegrees);
        });
	}

	updateForkliftAnimation(rotationDegrees: number){
		// Clamp rotation to -45 to +45 degrees
		const clampedRotation = Math.max(-45, Math.min(45, rotationDegrees));
		
		// Create continuous mapping: 
		// -45° maps to 3333.33ms (fully down)
		// 0° maps to 1666.67ms (neutral/middle)  
		// +45° maps to 0ms (fully up)
		const normalizedRotation = (clampedRotation + 45) / 90; // Convert -45 to +45 range into 0 to 1
		const timelinePosition = 3333.333333333324 - (normalizedRotation * (3333.333333333324 - 0));
		
		// Seek to the calculated position and play
		this.zcomponent.animation.layers.Forklift.clips.ForkliftUpandDown0.seek(timelinePosition);
	}

	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(LeverBehavior);