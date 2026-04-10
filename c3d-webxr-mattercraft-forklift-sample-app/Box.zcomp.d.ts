import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event, ConstructorForComponent } from "@zcomponent/core";

import { Collider as Collider_0 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { GLTF as GLTF_1 } from "@zcomponent/three/lib/components/models/GLTF";
import { Cognitive3DDynamicObject as Cognitive3DDynamicObject_2 } from "@cognitive3d/three-mattercraft/lib/Cognitive3DDynamicObject";
import { RigidBody as RigidBody_3 } from "@zcomponent/physics/lib/behaviors/RigidBody";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
* @ztag zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Collider: Collider_0 & {
			behaviors: {

			}
		},
		WarehouseBox_centered_no_metallic_glb: GLTF_1 & {
			behaviors: {
				0: Cognitive3DDynamicObject_2,
				Cognitive3DDynamicObject0: Cognitive3DDynamicObject_2,
				1: RigidBody_3,
				RigidBody: RigidBody_3,
			}
		},
	};

	animation: Animation & { layers: {
		Layer_10: Layer & { clips: {
			InRange0: LayerClip;
			PickedUp0: LayerClip;
			Closest0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
