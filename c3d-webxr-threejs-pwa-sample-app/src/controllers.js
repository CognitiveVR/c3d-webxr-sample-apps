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

    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1)]); // Lines for controllers 
    const line = new THREE.Line(geometry);
    line.name = 'line';
    line.scale.z = 5;

    controller1.add(line.clone());
    controller2.add(line.clone());

    return [controller1, controller2];
}

export function handleControllerIntersections(controller, interactableGroup) {
    if (controller.userData.selected !== undefined) return;

    const line = controller.getObjectByName('line');
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