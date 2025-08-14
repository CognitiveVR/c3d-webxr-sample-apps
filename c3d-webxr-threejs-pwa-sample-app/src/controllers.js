import * as THREE from 'three';

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

    // Controller Model 
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]);
    const line = new THREE.Line(geometry);
    line.name = 'line';
    line.scale.z = 5;

    // Handle Connection Events, Line as visual feedback 
    controller1.addEventListener('connected', (event) => {
        console.log("Controller 1 Connected", event.data);
        controller1.add(line.clone());
    });
    controller1.addEventListener('disconnected', () => {
        console.log("Controller 1 Disconnected");
        // Remove the line when the controller disconnects for visual feedback
        const lineToRemove = controller1.getObjectByName('line');
        if (lineToRemove) {
            controller1.remove(lineToRemove);
        }
    });
    // Handle Connection Events, Line as visual feedback 
    controller2.addEventListener('connected', (event) => {
        console.log("Controller 2 Connected", event.data);
        controller2.add(line.clone());
    });
    controller2.addEventListener('disconnected', () => {
        console.log("Controller 2 Disconnected");
        // Remove the line when the controller disconnects for visual feedback
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
