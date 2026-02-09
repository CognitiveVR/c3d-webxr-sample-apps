import * as THREE from 'three';
import { c3d } from './cognitive3d.js';

let INTERSECTED;
const tempMatrix = new THREE.Matrix4();

function getIntersections(controller, interactableGroup) {
    tempMatrix.identity().extractRotation(controller.matrixWorld);
    const raycaster = new THREE.Raycaster();
    raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld);
    raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix);
    return raycaster.intersectObjects(interactableGroup.children, true);
}

function onSelectStart(event, interactableGroup) {
    const controller = event.target;
    const intersections = getIntersections(controller, interactableGroup);

    if (intersections.length > 0) {
        const intersection = intersections[0];
        const object = intersection.object;
        object.material.emissive.b = 1;
        controller.attach(object);
        controller.userData.selected = object;
        
        if (object.userData.isDynamic) 
            {
            c3d.customEvent.send("Interaction", object.position.toArray(), {
                action: "Object Grabbed",
                objectId: object.userData.c3dId,
                objectName: object.name
            });
        }
    }
}

function onSelectEnd(event, interactableGroup) {
    const controller = event.target;
    if (controller.userData.selected !== undefined) {
        const object = controller.userData.selected;
        object.material.emissive.b = 0;
        interactableGroup.attach(object);
        controller.userData.selected = undefined;
    }
}

export function setupControllers(scene, renderer, interactableGroup) {
    const controller1 = renderer.xr.getController(0);
    controller1.addEventListener('selectstart', (e) => onSelectStart(e, interactableGroup));
    controller1.addEventListener('selectend', (e) => onSelectEnd(e, interactableGroup));
    scene.add(controller1);

    const controller2 = renderer.xr.getController(1);
    controller2.addEventListener('selectstart', (e) => onSelectStart(e, interactableGroup));
    controller2.addEventListener('selectend', (e) => onSelectEnd(e, interactableGroup));
    scene.add(controller2);

    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]);
    const line = new THREE.Line(geometry);
    line.name = 'line';
    line.scale.z = 5;

    // Handle Connection Events for Controller 1
    controller1.addEventListener('connected', (event) => {
        console.log("Controller 1 Connected", event.data);
        // IMPORTANT: Store the gamepad object when it's ready
        controller1.userData.gamepad = event.data.gamepad;
        controller1.add(line.clone());
    });
    controller1.addEventListener('disconnected', () => {
        console.log("Controller 1 Disconnected");
        // Clean up the gamepad reference
        delete controller1.userData.gamepad;
        const lineToRemove = controller1.getObjectByName('line');
        if (lineToRemove) {
            controller1.remove(lineToRemove);
        }
    });

    // Handle Connection Events for Controller 2
    controller2.addEventListener('connected', (event) => {
        console.log("Controller 2 Connected", event.data);
        // IMPORTANT: Store the gamepad object when it's ready
        controller2.userData.gamepad = event.data.gamepad;
        controller2.add(line.clone());
    });
    controller2.addEventListener('disconnected', () => {
        console.log("Controller 2 Disconnected");
        // Clean up the gamepad reference
        delete controller2.userData.gamepad;
        const lineToRemove = controller2.getObjectByName('line');
        if (lineToRemove) {
            controller2.remove(lineToRemove);
        }
    });

    return [controller1, controller2];
}

export function handleControllerIntersections(controller, interactableGroup) {
    const line = controller.getObjectByName('line');
    if (!line) {
        return;
    }

    if (controller.userData.selected !== undefined) return;

    const intersections = getIntersections(controller, interactableGroup);

    if (intersections.length > 0) {
        if (INTERSECTED && INTERSECTED !== intersections[0].object) {
            INTERSECTED.material.emissive.r = 0;
        }
        const intersection = intersections[0];
        const object = intersection.object;
        object.material.emissive.r = 1;
        INTERSECTED = object;
        line.scale.z = intersection.distance;
    } else {
        if (INTERSECTED) {
            INTERSECTED.material.emissive.r = 0;
            INTERSECTED = null;
        }
        line.scale.z = 5;
    }
}

export function adjustObjectWithGamepad(controller) {
  const object = controller.userData.selected;
  if (!object) return;

  const gamepad = controller.userData.gamepad;
  if (!gamepad || !gamepad.axes) {
    return;
  }

  const xAxis = gamepad.axes[gamepad.axes.length - 2];
  const yAxis = gamepad.axes[gamepad.axes.length - 1];
  const deadzone = 0.1;

  if (Math.abs(xAxis) > deadzone && Math.abs(xAxis) > Math.abs(yAxis)) { // rotate if horizontal movement is greater
    const rotationAmount = -xAxis * 0.05;
    object.rotation.y += rotationAmount;
  } else if (Math.abs(yAxis) > deadzone) { // Otherwise, scale if there's vertical movement
    const scaleAmount = 1 - yAxis * 0.03;
    object.scale.multiplyScalar(scaleAmount);
    clampScale(object);
  }
}

function clampScale(object) {
  object.scale.x = Math.min(Math.max(0.1, object.scale.x), 5);
  object.scale.y = Math.min(Math.max(0.1, object.scale.y), 5);
  object.scale.z = Math.min(Math.max(0.1, object.scale.z), 5);
}