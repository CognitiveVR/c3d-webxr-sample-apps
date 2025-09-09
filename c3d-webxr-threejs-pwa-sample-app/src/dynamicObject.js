import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { c3d } from './cognitive.js';
import SpriteText from 'three-spritetext';

export async function createDynamicObject() {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync('/models/cube/cube.gltf'); 
    const dynamicObject = gltf.scene;

    // dynamicObject.traverse((object) => {
    // if (object.isMesh) {
    //         object.material.transparent = true;
    //         object.material.opacity = 0.5;
            
    //     }
    // });

    dynamicObject.traverse((object) => {
        if (object.isMesh) {
            // Create a new MeshStandardMaterial for better control
            object.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(0x800080), // Purple color (hex code)
                transparent: true,
                opacity: 0.4,
                roughness: 0.7, // Adjust for desired shininess
                metalness: 0.1  // Adjust for desired metallic look
            });
        }
    });

    dynamicObject.name = "cube";
    dynamicObject.userData.isDynamic = true;

    const meshName = "cube";
    const customId = "eedd0384-0989-4a95-955a-ca297fa37db4";
    const myText = new SpriteText('Dynamic Object', 0.2, 'blue');
    // myText.position.y = 0;
    myText.material.depthTest = false;
    dynamicObject.add(myText);
    dynamicObject.scale.set(0.5, 0.5, 0.5);

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