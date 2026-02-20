import * as THREE from 'three';

/**
 * Creates a dynamic cube for the performance test.
 * @param {string} customId - The unique custom ID for this object.
 * @param {THREE.Vector3} position - The local position of the cube within its group.
 * @returns {THREE.Mesh} The created dynamic object.
 */
export function createDynamicCube(customId, position) { 

    const geometry = new THREE.BoxGeometry(1, 1, 1); 
    const material = new THREE.MeshStandardMaterial({ color: 0x9370DB });
    const dynamicObject = new THREE.Mesh(geometry, material);
    
    dynamicObject.name = `Cube_${customId}`;
    dynamicObject.userData.isDynamic = true;   
    // Store original Y position for movement logic
    dynamicObject.userData.originalY = position.y;

    dynamicObject.position.copy(position); 
    
    return dynamicObject;
}