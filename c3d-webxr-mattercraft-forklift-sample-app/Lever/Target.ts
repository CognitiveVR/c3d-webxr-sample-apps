import { ContextManager, Observable, registerLoadable } from "@zcomponent/core";
import { Group } from "@zcomponent/three/lib/components/Group";
import * as THREE from "three";
import { LeverContext } from "./MyContext";

interface ConstructorProps {

}

/**
 * @zcomponent
 * @zicon favorite
 */
export class Target extends Group {
    constructor(contextManager: ContextManager, public constructorProps: ConstructorProps) {
        super(contextManager, constructorProps);
        const ctx = this.contextManager.get(LeverContext);
        ctx.target = this;


        // const obj = new THREE.Mesh(new THREE.SphereGeometry(0.1), new THREE.MeshBasicMaterial({color: 'red'}));
        // this.element.add(obj);
    }
}