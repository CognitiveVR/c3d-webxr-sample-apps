import * as THREE from 'three';

export function createInteractableObjects() {
    const interactableGroup = new THREE.Group();
    interactableGroup.position.z = -5;

    const geometries = [
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        new THREE.ConeGeometry(0.2, 0.2, 64),
        new THREE.CylinderGeometry(0.2, 0.2, 0.2, 64),
        new THREE.IcosahedronGeometry(0.2, 3),
        new THREE.TorusGeometry(0.2, 0.04, 64, 32)
    ];

    let numOfObjects = 30;
    for (let i = 0; i < numOfObjects; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.9, 0.5);

        const material = new THREE.MeshStandardMaterial({
            color: color, 
            roughness: 0,
            metalness: 0
        });
        const object = new THREE.Mesh(geometry, material);

        object.position.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
        );

        object.rotation.set(
            Math.random() * 2 * Math.PI,
            Math.random() * 2 * Math.PI,
            Math.random() * 2 * Math.PI
        );

        const scale = Math.random() * 0.7 + 0.7;
        object.scale.setScalar(scale);

        object.geometry.computeBoundingSphere();
        object.userData.collider = object.geometry.boundingSphere.clone();
        object.userData.collider.radius *= scale; // Apply scale to the collider radius

        object.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5
        );
        object.userData.angularVelocity = new THREE.Vector3(
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 1,
            (Math.random() - 0.5) * 1
        );

        interactableGroup.add(object);
    }
    
    return interactableGroup;
}
export function updateObjectMomentum(group, deltaTime) {
    const bounds = 5;
    const objects = group.children;
    const restitution = 0.8;

    // Update object positions first
    for (const object of objects) {
        object.position.add(object.userData.velocity.clone().multiplyScalar(deltaTime));
        object.rotation.x += object.userData.angularVelocity.x * deltaTime;
        object.rotation.y += object.userData.angularVelocity.y * deltaTime;
        object.rotation.z += object.userData.angularVelocity.z * deltaTime;

        object.userData.collider.center.copy(object.position);
    }

    // Collision detection and response
    for (let i = 0; i < objects.length; i++) {
        const obj1 = objects[i];

        for (let j = i + 1; j < objects.length; j++) {
            const obj2 = objects[j];

            if (obj1.userData.collider.intersectsSphere(obj2.userData.collider)) {
                
                const normal = new THREE.Vector3().subVectors(obj2.position, obj1.position).normalize();
                const relativeVelocity = new THREE.Vector3().subVectors(obj2.userData.velocity, obj1.userData.velocity);
                
                const impulse = ((0.2 + restitution) * relativeVelocity.dot(normal));

                obj1.userData.velocity.add(normal.clone().multiplyScalar(impulse));
                obj2.userData.velocity.sub(normal.clone().multiplyScalar(impulse));
            }
        }
    }

    // Wrap objects around the bounds after handling collisions
    for (const object of objects) {
        if (object.position.x > bounds) object.position.x = -bounds;
        if (object.position.x < -bounds) object.position.x = bounds;
        if (object.position.y > bounds) object.position.y = -bounds;
        if (object.position.y < -bounds) object.position.y = bounds;
        if (object.position.z > bounds) object.position.z = -bounds;
        if (object.position.z < -bounds) object.position.z = bounds;
    }
}