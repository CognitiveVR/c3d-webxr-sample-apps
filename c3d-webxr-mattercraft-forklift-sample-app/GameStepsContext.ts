import { Component, Behavior, BehaviorConstructorProps, ContextManager, registerBehaviorRunAtDesignTime } from "@zcomponent/core";
import { XRContext } from "@zcomponent/three-webxr";
import { Group as Group } from "@zcomponent/three/lib/components/Group";
import { default as Scene} from "./Scene.zcomp";
import { Cognitive3DContext } from "@cognitive3d/three-mattercraft";

interface ConstructionProps {
	// Add any constructor props you'd like for your behavior here
}

/**
 * @zbehavior 
 * @zparents three/Object3D/Group/Group
 **/
export class GameStepsContext extends Behavior<Group> {

	protected zcomponent = this.getZComponentInstance(Scene);
	public gameSteps: number = 0;
		

	constructor(contextManager: ContextManager, instance: Group, protected constructorProps: ConstructionProps) {
		super(contextManager, instance);
		const ctx = this.contextManager.get(Cognitive3DContext);

		this.zcomponent.animation.layers.Game_States.clips.Step_10.onPlaying.addListener(()=>{
			this.gameSteps = 1;
			ctx?.sendEvent("StepCompleted", [0, 1, 0], { step: 1 });
			console.log(this.gameSteps)
		})

		this.zcomponent.animation.layers.Game_States.clips.Step_20.onPlaying.addListener(()=>{
			this.gameSteps = 2;
			ctx?.sendEvent("StepCompleted", [0, 1, 0], { step: 2 });
			console.log(this.gameSteps)
		})

		this.zcomponent.animation.layers.Game_States.clips.Step_30.onPlaying.addListener(()=>{
			this.gameSteps = 3;
			ctx?.sendEvent("StepCompleted", [0, 1, 0], { step: 3 });
			console.log(this.gameSteps)
		})

		this.zcomponent.nodes.Button.onPointerDown.addListener(()=>{
			
			if (this.gameSteps == 1){
				this.zcomponent.animation.layers.Game_States.clips.Step_20.play();
				return
			}
			if (this.gameSteps == 2){
				const context = this.contextManager.get(XRContext);
				context.offsetPosition.value = [-1.3, 0, 0];
				this.zcomponent.animation.layers.Game_States.clips.Step_30.play();
				return
			}
			if (this.gameSteps == 3){
				this.zcomponent.animation.layers.Game_States.clips.Step40.play();
				return
			}

		})

	}


	dispose() {
		// Clean up any resources
		// ...
		return super.dispose();
	}
}

// Uncomment below to run this behavior at design time
registerBehaviorRunAtDesignTime(GameStepsContext);