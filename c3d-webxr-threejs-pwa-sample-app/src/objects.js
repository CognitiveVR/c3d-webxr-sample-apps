import * as THREE from 'three';
import { createDynamicCube } from './dynamicObject';

export async function createInteractableObjects(c3d) { 
    const interactableGroup = new THREE.Group();
    interactableGroup.position.z = -5;

    // =================================================================
    // PERFORMANCE TEST SETTINGS 
    // =================================================================

    const NUM_DYNAMIC_OBJECTS = 50;     // Set the number of dynamic objects (cubes) to test ****** 
    const ARE_OBJECTS_MOVING = true;    // Set to true for moving objects, false for stationary ******

    const grid_size = Math.ceil(Math.sqrt(NUM_DYNAMIC_OBJECTS));
    const spacing = 1.1;                // Spacing between cubes ******
    const offset = (grid_size - 1) * spacing / 2;

    for (let i = 0; i < NUM_DYNAMIC_OBJECTS; i++) {
        const customId = String(i + 1); // Sequential ID for multiple cubes

        // Position cubes in a grid
        const x = (i % grid_size) * spacing - offset;
        const y = Math.floor(i / grid_size) * spacing - (offset / 2); 
        const z = 0; 
        const position = new THREE.Vector3(x, y, z);

        const dynamicObject = createDynamicCube(c3d, customId, position);
        
        if (ARE_OBJECTS_MOVING) {
            dynamicObject.userData.isMoving = true;
            dynamicObject.userData.movePhase = Math.random() * Math.PI * 2; // Random start phase for movement
        }

        interactableGroup.add(dynamicObject);
    }
    const geometries = [
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        new THREE.ConeGeometry(0.2, 0.2, 64),
        new THREE.CylinderGeometry(0.2, 0.2, 0.2, 64),
        new THREE.IcosahedronGeometry(0.2, 3),
        new THREE.TorusGeometry(0.2, 0.04, 64, 32)
    ];


    
    return interactableGroup;
}

// Modified to accept elapsedTime for movement
export function updateObjectMomentum(group, deltaTime, elapsedTime) {
    const bounds = 100;
    const objects = group.children;
    const restitution = 0.8;

    for (const object of objects) {
        if (object.userData.isMoving) {
            const amplitude = 1.0; // How high/low it moves
            const speed = 0.5;     // How fast it moves
            // object.position.y = object.userData.originalY + (Math.sin(object.userData.movePhase + elapsedTime * speed) * amplitude); // Sin wave for smooth up/down movement, each cube has a phase offset
            object.position.y = object.userData.originalY + (Math.sin(elapsedTime * speed) * amplitude); // Sin wave for smooth up/down movement, all cubes move in unison (in phase)
        }
    }
}