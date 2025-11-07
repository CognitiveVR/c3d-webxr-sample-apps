import * as THREE from 'three';

/**
 * Creates a dynamic cube for the performance test.
 * @param {object} c3d - The Cognitive3D SDK instance.
 * @param {string} customId - The unique custom ID for this object.
 * @param {THREE.Vector3} position - The local position of the cube within its group.
 * @returns {THREE.Mesh} The created dynamic object.
 */
export function createDynamicCube(c3d, customId, position) { 

    const geometry = new THREE.BoxGeometry(1, 1, 1); 
    const material = new THREE.MeshStandardMaterial({ color: 0x9370DB });
    const dynamicObject = new THREE.Mesh(geometry, material);
    
    dynamicObject.name = `Cube_${customId}`;
    dynamicObject.userData.isDynamic = true;   
    // Store original Y position for movement logic
    dynamicObject.userData.originalY = position.y;
     
    const meshName = "cube"; // all cubes share the same mesh, but they must have unique IDs
    // const customId = "eedd0384-0989-4a95-955a-ca297fa37db4"; // id of cube uploaded to c3d 

    dynamicObject.position.copy(position); 
    
    // Calculate world position for registration (group is at z = -5)
    const worldPosition = [position.x, position.y, position.z - 5];

    const objectId = c3d.dynamicObject.registerObjectCustomId(
        dynamicObject.name,
        meshName,
        customId, // Use the provided customId
        worldPosition, 
        dynamicObject.quaternion.toArray()
    );
    
    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    dynamicObject.userData.c3dId = objectId;
    
    return dynamicObject;
}
