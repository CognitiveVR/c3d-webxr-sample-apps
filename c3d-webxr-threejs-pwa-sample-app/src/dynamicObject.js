import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { c3d } from './cognitive.js';

export async function createDynamicObject() {
    const loader = new GLTFLoader();
    
    const gltf = await loader.loadAsync('/models/cube/cube.gltf'); 
    const dynamicObject = gltf.scene;

    dynamicObject.position.set(0, 1, -2);
    dynamicObject.scale.set(2, 2, 2);
    
    dynamicObject.name = "cube";
    dynamicObject.userData.isDynamic = true;

    const meshName = "cube";
    const customId = "eedd0384-0989-4a95-955a-ca297fa37db4";
    

    // Register with Cognitive3D
    c3d.dynamicObject.registerObjectCustomId(
        dynamicObject.name,
        meshName,
        customId, 
        dynamicObject.position.toArray(),
        dynamicObject.quaternion.toArray(),
    );

    dynamicObject.userData.c3dId = customId;
    console.log(`Registered dynamic object "${dynamicObject.name}" with Mesh Name "${meshName}" and CUSTOM ID: ${customId}`);    
    return dynamicObject;
}