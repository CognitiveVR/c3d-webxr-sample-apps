import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event, ConstructorForComponent } from "@zcomponent/core";

import { Box as Box_0 } from "@zcomponent/three/lib/components/meshes/Box";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { Lever as Lever_2 } from "./Lever/Lever";
import { Cognitive3DDynamicObject as Cognitive3DDynamicObject_3 } from "@cognitive3d/three-mattercraft/lib/Cognitive3DDynamicObject";
import { MeshStandardMaterial as MeshStandardMaterial_4 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Sphere as Sphere_5 } from "@zcomponent/three/lib/components/meshes/Sphere";

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
		Base: Box_0 & {
			behaviors: {

			}
		},
		Group: Group_1 & {
			behaviors: {
				0: Lever_2,
				Lever: Lever_2,
			}
		},
		Lever: Box_0 & {
			behaviors: {
				0: Cognitive3DDynamicObject_3,
				Cognitive3DDynamicObject0: Cognitive3DDynamicObject_3,
			}
		},
		MeshStandardMaterial: MeshStandardMaterial_4 & {
			behaviors: {

			}
		},
		MeshStandardMaterial0: MeshStandardMaterial_4 & {
			behaviors: {

			}
		},
		MeshStandardMaterial1: MeshStandardMaterial_4 & {
			behaviors: {

			}
		},
		Sphere: Sphere_5 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {

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
	 * @zprop
	 * @zdefault 0
	 */
	public rotX: Observable<number>;

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
	 * @zprop
	 * @zvalues nodeids 
	 */
	public target: Observable<string>;

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
