import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event, ConstructorForComponent } from "@zcomponent/core";

import { default as Box_zcomp_0 } from "./Box.zcomp";
import { Group as Group_1 } from "@zcomponent/three/lib/components/Group";
import { Box as Box_2 } from "@zcomponent/three/lib/components/meshes/Box";
import { Text as Text_3 } from "@zcomponent/three/lib/components/text/Text";
import { Collider as Collider_4 } from "@zcomponent/physics/lib/components/Colliders/Collider";
import { DefaultCookieConsent as DefaultCookieConsent_5 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultEnvironment as DefaultEnvironment_6 } from "@zcomponent/three/lib/components/environments/DefaultEnvironment";
import { DefaultLoader as DefaultLoader_7 } from "@zcomponent/core/lib/components/DefaultLoader";
import { DirectionalLight as DirectionalLight_8 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { RigidBody as RigidBody_9 } from "@zcomponent/physics/lib/behaviors/RigidBody";
import { XRController as XRController_10 } from "@zcomponent/three-webxr/lib/components/XRController";
import { SetGrabState as SetGrabState_11 } from "@zcomponent/physics/lib/behaviors/SetGrabState";
import { ToggleGrabState as ToggleGrabState_12 } from "@zcomponent/physics/lib/behaviors/ToggleGrabState";
import { default as Lever_zcomp_13 } from "./Lever.zcomp";
import { LeverBehavior as LeverBehavior_14 } from "./LeverBehavior";
import { MeshBasicMaterial as MeshBasicMaterial_15 } from "@zcomponent/three/lib/components/materials/MeshBasicMaterial";
import { MeshStandardMaterial as MeshStandardMaterial_16 } from "@zcomponent/three/lib/components/materials/MeshStandardMaterial";
import { Plane as Plane_17 } from "@zcomponent/three/lib/components/meshes/Plane";
import { ActivateState as ActivateState_18 } from "@zcomponent/core/lib/behaviors/ActivateState";
import { RigidbodyGrabber as RigidbodyGrabber_19 } from "@zcomponent/physics/lib/components/RigidbodyGrabber";
import { RigidbodyTargetTransform as RigidbodyTargetTransform_20 } from "@zcomponent/physics/lib/components/RigidbodyTransform";
import { ShadowPlane as ShadowPlane_21 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { SkyEnvironment as SkyEnvironment_22 } from "@zcomponent/three/lib/components/environments/SkyEnvironment";
import { SphereTrigger as SphereTrigger_23 } from "@zcomponent/three/lib/components/physics/triggers/SphereTrigger";
import { PlayStream as PlayStream_24 } from "@zcomponent/core/lib/behaviors/stream/PlayStream";
import { Target as Target_25 } from "./Lever/Target";
import { TeleportManager as TeleportManager_26 } from "@zcomponent/three-webxr/lib/components/TeleportManager";
import { TurnManager as TurnManager_27 } from "@zcomponent/three-webxr/lib/components/TurnManager";
import { XRRigVR as XRRigVR_28 } from "@zcomponent/three-webxr/lib/components/XRRigVR";
import { Cognitive3D as Cognitive3D_29 } from "./Cognitive3D";
import { XRCamera as XRCamera_30 } from "@zcomponent/three-webxr/lib/components/XRCamera";
import { XRDefaultLoader as XRDefaultLoader_31 } from "@zcomponent/three-webxr/lib/components/XRDefaultLoader";
import { XRManager as XRManager_32 } from "@zcomponent/three-webxr/lib/components/XRManager";
import { Audio as Audio_33 } from "@zcomponent/core/lib/components/Audio";
import { GLTF as GLTF_34 } from "@zcomponent/three/lib/components/models/GLTF";
import { Animation as Animation_35 } from "@zcomponent/three/lib/behaviors/Animation";
import { Cognitive3DDynamicObject as Cognitive3DDynamicObject_36 } from "./Cognitive3D";
import { AttachmentPoint as AttachmentPoint_37 } from "@zcomponent/three/lib/components/AttachmentPoint";

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
		Box: Box_zcomp_0 & {
			behaviors: {

			}
		},
		Boxes: Group_1 & {
			behaviors: {

			}
		},
		Button: Box_2 & {
			behaviors: {

			}
		},
		ButtonText: Text_3 & {
			behaviors: {

			}
		},
		ButtonText0: Text_3 & {
			behaviors: {

			}
		},
		Collider: Collider_4 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_5 & {
			behaviors: {

			}
		},
		DefaultEnvironment: DefaultEnvironment_6 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_7 & {
			behaviors: {

			}
		},
		Defaults: Group_1 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_8 & {
			behaviors: {

			}
		},
		Floor: Box_2 & {
			behaviors: {
				0: RigidBody_9,
				RigidBody: RigidBody_9,
			}
		},
		Left_Controller: XRController_10 & {
			behaviors: {
				0: SetGrabState_11,
				SetGrabState: SetGrabState_11,
				1: ToggleGrabState_12,
				ToggleGrabState: ToggleGrabState_12,
			}
		},
		Lever: Lever_zcomp_13 & {
			behaviors: {
				0: LeverBehavior_14,
				LeverBehavior: LeverBehavior_14,
			}
		},
		MeshBasicMaterial: MeshBasicMaterial_15 & {
			behaviors: {

			}
		},
		MeshBasicMaterial0: MeshBasicMaterial_15 & {
			behaviors: {

			}
		},
		MeshBasicMaterial_2: MeshBasicMaterial_15 & {
			behaviors: {

			}
		},
		MeshBasicMaterial_20: MeshBasicMaterial_15 & {
			behaviors: {

			}
		},
		MeshStandardMaterial: MeshStandardMaterial_16 & {
			behaviors: {

			}
		},
		Plane: Plane_17 & {
			behaviors: {

			}
		},
		Plane0: Plane_17 & {
			behaviors: {

			}
		},
		ProceedButton: Box_2 & {
			behaviors: {
				0: ActivateState_18,
				ActivateState: ActivateState_18,
			}
		},
		ProgressBar: Box_2 & {
			behaviors: {

			}
		},
		ProgressBarBackground: MeshBasicMaterial_15 & {
			behaviors: {

			}
		},
		ProgressBarFill: Box_2 & {
			behaviors: {

			}
		},
		ProgressBarFillMaterial: MeshBasicMaterial_15 & {
			behaviors: {

			}
		},
		Right_Controller: XRController_10 & {
			behaviors: {
				0: SetGrabState_11,
				SetGrabState: SetGrabState_11,
				1: ToggleGrabState_12,
				ToggleGrabState: ToggleGrabState_12,
			}
		},
		RigidbodyGrabber_Left: RigidbodyGrabber_19 & {
			behaviors: {

			}
		},
		RigidbodyGrabber_Right: RigidbodyGrabber_19 & {
			behaviors: {

			}
		},
		RigidbodyTargetTransform: RigidbodyTargetTransform_20 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_21 & {
			behaviors: {

			}
		},
		Sky_Environment: SkyEnvironment_22 & {
			behaviors: {

			}
		},
		SphereTrigger: SphereTrigger_23 & {
			behaviors: {

			}
		},
		SphereTrigger0: SphereTrigger_23 & {
			behaviors: {

			}
		},
		SphereTrigger_Horn: SphereTrigger_23 & {
			behaviors: {
				0: PlayStream_24,
				PlayStream: PlayStream_24,
			}
		},
		Steps: Text_3 & {
			behaviors: {

			}
		},
		Target: Target_25 & {
			behaviors: {

			}
		},
		Target0: Target_25 & {
			behaviors: {

			}
		},
		TaskDesc: Text_3 & {
			behaviors: {

			}
		},
		TaskName: Text_3 & {
			behaviors: {

			}
		},
		Teleport_Manager: TeleportManager_26 & {
			behaviors: {

			}
		},
		Title: Text_3 & {
			behaviors: {

			}
		},
		TrainingProgressUI: Group_1 & {
			behaviors: {

			}
		},
		Turn_Manager: TurnManager_27 & {
			behaviors: {

			}
		},
		UI: Group_1 & {
			behaviors: {

			}
		},
		WelcomeDesc: Text_3 & {
			behaviors: {

			}
		},
		WelcomeText: Text_3 & {
			behaviors: {

			}
		},
		XRRigVR: XRRigVR_28 & {
			behaviors: {
				0: Cognitive3D_29,
				Cognitive3D: Cognitive3D_29,
			}
		},
		XR_Camera_: XRCamera_30 & {
			behaviors: {

			}
		},
		XR_DefaultLoader: XRDefaultLoader_31 & {
			behaviors: {

			}
		},
		XR_Manager: XRManager_32 & {
			behaviors: {

			}
		},
		completeAudio: Audio_33 & {
			behaviors: {

			}
		},
		forklift_animated_glb: GLTF_34 & {
			behaviors: {
				0: Animation_35,
				1: Animation_35,
				2: Cognitive3DDynamicObject_36,
				Cognitive3DDynamicObject: Cognitive3DDynamicObject_36,
			}
		},
		horn: Audio_33 & {
			behaviors: {

			}
		},
		hydraulics_front_13: AttachmentPoint_37 & {
			behaviors: {
				0: Cognitive3DDynamicObject_36,
				Cognitive3DDynamicObject: Cognitive3DDynamicObject_36,
			}
		},
		steering_wheel_25: AttachmentPoint_37 & {
			behaviors: {
				0: Cognitive3DDynamicObject_36,
				Cognitive3DDynamicObject: Cognitive3DDynamicObject_36,
			}
		},
		step1Audio: Audio_33 & {
			behaviors: {

			}
		},
		step2Audio: Audio_33 & {
			behaviors: {

			}
		},
		step3Audio: Audio_33 & {
			behaviors: {

			}
		},
		warehouseAmbience: Audio_33 & {
			behaviors: {

			}
		},
		warehouseScene_glb: GLTF_34 & {
			behaviors: {

			}
		},
		welcomeAudio: Audio_33 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Game_States: Layer & { clips: {
			Step_10: LayerClip;
			Step_20: LayerClip;
			Step_30: LayerClip;
			Step40: LayerClip;
		}};
		Forklift: Layer & { clips: {
			ForkliftUpandDown0: LayerClip;
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
