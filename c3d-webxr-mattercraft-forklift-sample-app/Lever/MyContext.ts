import { Context, ContextManager } from "@zcomponent/core";
import { Object3D } from "@zcomponent/three";

interface ConstructionProps {

}

/** @zcontext */
export class LeverContext extends Context<ConstructionProps> {
	public target?: Object3D;
}
