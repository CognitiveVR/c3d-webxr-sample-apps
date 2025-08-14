import * as THREE from 'three';
import { c3d } from './cognitive.js';

export function createDynamicObject() {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({
        color: 0xff0000, // Red color
        roughness: 0.1,
        metalness: 0.9
    });
    const dynamicObject = new THREE.Mesh(geometry, material);

    dynamicObject.position.set(0, 1, -2); // Centered position
    dynamicObject.name = "DynamicObject";
    dynamicObject.userData.isDynamic = true;

    const meshName = "MyRedDynamicCube";

    // Register dynamic obj with Cognitive3D
    const objectId = c3d.dynamicObject.registerObject(
        dynamicObject.name,
        meshName, // Use the new, unique mesh name
        dynamicObject.position.toArray(),
        dynamicObject.quaternion.toArray()
    );

    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);

    dynamicObject.userData.c3dId = objectId;

    return dynamicObject;
}