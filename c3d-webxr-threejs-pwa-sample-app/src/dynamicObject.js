import * as THREE from 'three';

export function createDynamicCube(c3d) { // Creates a dynamic cube 

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
        [0, 0, -5], 
        dynamicObject.quaternion.toArray()
    );
    
    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    dynamicObject.userData.c3dId = objectId;
    
    return dynamicObject;
}

export function createDynamicSphere(c3d) { // Creates a dynamic sphere, unused currently
    const geometry = new THREE.SphereGeometry(0.5, 32, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0xff4500 });
    const dynamicObject = new THREE.Mesh(geometry, material);
    
    dynamicObject.name = "Sphere";
    dynamicObject.userData.isDynamic = true;
    
    const meshName = "sphere";
    const customId = "a1b2c3d4-e5f6-7890-1234-567890abcdef";

    dynamicObject.position.set(-2, 1, -2); 

    const objectId = c3d.dynamicObject.registerObjectCustomId(
        dynamicObject.name,
        meshName,
        customId,
        [-2, 1, -7], // World position, accounting for group offset
        dynamicObject.quaternion.toArray()
    );
    
    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    dynamicObject.userData.c3dId = objectId;
    
    return dynamicObject;
}
