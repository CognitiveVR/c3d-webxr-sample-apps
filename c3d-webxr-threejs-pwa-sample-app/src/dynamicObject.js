import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { c3d } from './cognitive.js';

export async function createDynamicObject() {
    const loader = new GLTFLoader();
    
    // Load the GLTF model
    // const gltf = await loader.loadAsync('/models/meta_quest_3/MyCustomGLTF.gltf'); 
    const gltf = await loader.loadAsync('/models/cube/cube.gltf'); 
    const dynamicObject = gltf.scene;

    dynamicObject.position.set(0, 1, -2);
    dynamicObject.scale.set(2, 2, 2); // scale of obj
    
    dynamicObject.name = "AwesomeCube";
    dynamicObject.userData.isDynamic = true;

    const meshName = "AwesomeCube";
    const customId = "c27a0a07-8725-47c6-8793-63ee29bd26ad";
    // Register with Cognitive3D
    const objectId = c3d.dynamicObject.registerObjectCustomId(
        dynamicObject.name,
        meshName,
        customId, 
        dynamicObject.position.toArray(),
        dynamicObject.quaternion.toArray()
    );

    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and ID: ${objectId}`);
    
    dynamicObject.userData.c3dId = objectId;

    return dynamicObject;
}