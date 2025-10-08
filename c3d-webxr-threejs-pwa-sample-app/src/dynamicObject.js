import * as THREE from 'three';

export function createDynamicObject(c3d) {
    // Standard Three.js cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x9370DB });
    const dynamicObject = new THREE.Mesh(geometry, material);
    
    dynamicObject.name = "Cube";
    dynamicObject.userData.isDynamic = true;
    
    const meshName = "cube";
    const customId = "eedd0384-0989-4a95-955a-ca297fa37db4";

    dynamicObject.position.set(0, 0, 0); 
    

    const objectId = c3d.dynamicObject.registerObjectCustomId(
        dynamicObject.name,
        meshName,
        customId,
        [0, 0, -5], // World position accounting for interactableGroup offset
        dynamicObject.quaternion.toArray()
    );
    
    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    dynamicObject.userData.c3dId = objectId;
    
    return dynamicObject;
}
