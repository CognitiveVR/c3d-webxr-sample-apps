import * as THREE from 'three';


export function createDynamicObject(c3d) {
  // Standard Three.js cube 
  const geometry = new THREE.BoxGeometry(1, 1, 1); // A simple cube
  const material = new THREE.MeshStandardMaterial({ color: 0x9370DB  });
  const dynamicObject = new THREE.Mesh(geometry, material);


  dynamicObject.name = "Cube";
  dynamicObject.userData.isDynamic = true;
  const meshName = "cube";
  const customId = "eedd0384-0989-4a95-955a-ca297fa37db4";


  const tempParent = new THREE.Object3D();
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
  tempParent.remove(dynamicObject);


  return dynamicObject;
}