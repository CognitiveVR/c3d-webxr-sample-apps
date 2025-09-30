// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { c3d } from './cognitive.js';

// export async function createDynamicObject() {
//     const loader = new GLTFLoader();
    
//     // Load the GLTF model
//     const gltf = await loader.loadAsync('/models/cube/cube.gltf'); 
//     const dynamicObject = gltf.scene;

//     dynamicObject.position.set(0, 1, -2);
//     dynamicObject.scale.set(2, 2, 2); // scale of obj
    
//     dynamicObject.name = "AwesomeCube";
//     dynamicObject.userData.isDynamic = true;

//     const meshName = "AwesomeCube";
//     const customId = "c27a0a07-8725-47c6-8793-63ee29bd26ad";
//     // Register with Cognitive3D
//     const objectId = c3d.dynamicObject.registerObjectCustomId(
//         dynamicObject.name,
//         meshName,
//         customId, 
//         dynamicObject.position.toArray(),
//         dynamicObject.quaternion.toArray()
//     );

//     console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    
//     dynamicObject.userData.c3dId = objectId;

//     return dynamicObject;
// }



// * ******************

// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// // The 'c3d' instance is now passed in as an argument
// export async function createDynamicObject(c3d) {
//     const loader = new GLTFLoader();
    
//     const gltf = await loader.loadAsync('/models/cube/cube.gltf'); 
//     const dynamicObject = gltf.scene;

//     dynamicObject.position.set(0, 1, -2);
//     dynamicObject.scale.set(2, 2, 2);
    
//     dynamicObject.name = "Cube";
//     dynamicObject.userData.isDynamic = true;

//     const meshName = "cube";
//     const customId = "eedd0384-0989-4a95-955a-ca297fa37db4";
    
//     // Register with Cognitive3D using the passed-in instance
//     const objectId = c3d.dynamicObject.registerObjectCustomId(
//         dynamicObject.name,
//         meshName,
//         customId, 
//         dynamicObject.position.toArray(),
//         dynamicObject.quaternion.toArray()
//     );

//     console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    
//     dynamicObject.userData.c3dId = objectId;

//     return dynamicObject;
// }

import * as THREE from 'three';

export function createDynamicObject(c3d) {
    // Standard Three.js cube 
    const geometry = new THREE.BoxGeometry(1, 1, 1); // A simple cube
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Green color
    const dynamicObject = new THREE.Mesh(geometry, material);

    dynamicObject.position.set(0, 1, -2);     // Local position (relative to the parent group)
    
    dynamicObject.name = "Cube";
    dynamicObject.userData.isDynamic = true;
    const meshName = "cube";
    const customId = "eedd0384-0989-4a95-955a-ca297fa37db4";

    // Get the object's WORLD position for the initial snapshot
    // Add it to a parent before we can get its world position.
    const tempParent = new THREE.Object3D();
    tempParent.position.set(0, 0, -5);
    tempParent.add(dynamicObject);
    
    const worldPosition = new THREE.Vector3();
    dynamicObject.getWorldPosition(worldPosition);

    // Register with Cognitive3D 
    const objectId = c3d.dynamicObject.registerObjectCustomId(
        dynamicObject.name,
        meshName,
        customId, 
        worldPosition.toArray(), // Use world position
        dynamicObject.quaternion.toArray()
    );

    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    
    dynamicObject.userData.c3dId = objectId;

    // Remove from temporary parent before returning
    tempParent.remove(dynamicObject);

    return dynamicObject;
}