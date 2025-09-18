"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/src/scripts.ts
var scripts_exports = {};
__export(scripts_exports, {
  loadScene: () => loadScene,
  scriptsMap: () => scriptsMap
});
module.exports = __toCommonJS(scripts_exports);

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/loader.js
var import_babylonjs22 = require("babylonjs");
var import_babylonjs23 = require("babylonjs");
var import_babylonjs24 = require("babylonjs");
var import_babylonjs25 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/tools/guards.js
function isAbstractMesh(object) {
  switch (object.getClassName?.()) {
    case "Mesh":
    case "LineMesh":
    case "GroundMesh":
    case "InstancedMesh":
      return true;
  }
  return false;
}
__name(isAbstractMesh, "isAbstractMesh");
function isMesh(object) {
  switch (object.getClassName?.()) {
    case "Mesh":
    case "GroundMesh":
      return true;
  }
  return false;
}
__name(isMesh, "isMesh");
function isInstancedMesh(object) {
  return object.getClassName?.() === "InstancedMesh";
}
__name(isInstancedMesh, "isInstancedMesh");
function isTransformNode(object) {
  return object.getClassName?.() === "TransformNode";
}
__name(isTransformNode, "isTransformNode");
function isTexture(object) {
  return object?.getClassName?.() === "Texture";
}
__name(isTexture, "isTexture");
function isCamera(object) {
  switch (object.getClassName?.()) {
    case "Camera":
    case "FreeCamera":
    case "TargetCamera":
    case "EditorCamera":
    case "ArcRotateCamera":
    case "UniversalCamera":
      return true;
  }
  return false;
}
__name(isCamera, "isCamera");
function isLight(object) {
  switch (object.getClassName?.()) {
    case "Light":
    case "PointLight":
    case "SpotLight":
    case "DirectionalLight":
    case "HemisphericLight":
      return true;
  }
  return false;
}
__name(isLight, "isLight");
function isNode(object) {
  return isAbstractMesh(object) || isTransformNode(object) || isLight(object) || isCamera(object);
}
__name(isNode, "isNode");
function isScene(object) {
  return object.getClassName?.() === "Scene";
}
__name(isScene, "isScene");
function isAnyParticleSystem(object) {
  switch (object.getClassName?.()) {
    case "ParticleSystem":
    case "GPUParticleSystem":
      return true;
  }
  return false;
}
__name(isAnyParticleSystem, "isAnyParticleSystem");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/decorators/apply.js
var import_babylonjs = require("babylonjs");
var import_babylonjs2 = require("babylonjs");
var import_babylonjs3 = require("babylonjs");
var import_babylonjs_gui = require("babylonjs-gui");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/tools/sound.js
function getSoundById(id, scene) {
  const soundTracks = scene.soundTracks ?? [];
  if (!soundTracks.length) {
    soundTracks.push(scene.mainSoundTrack);
  }
  for (let i = 0, len = soundTracks.length; i < len; i++) {
    const sound = soundTracks[i].soundCollection.find((s) => s.id === id);
    if (sound) {
      return sound;
    }
  }
  return null;
}
__name(getSoundById, "getSoundById");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/decorators/apply.js
function applyDecorators(scene, object, script, instance, rootUrl) {
  const ctor = instance.constructor;
  if (!ctor) {
    return;
  }
  ctor._NodesFromScene?.forEach((params) => {
    instance[params.propertyKey.toString()] = scene.getNodeByName(params.nodeName);
  });
  ctor._NodesFromDescendants?.forEach((params) => {
    const descendant = object.getDescendants?.(params.directDescendantsOnly, (node) => node.name === params.nodeName)[0];
    instance[params.propertyKey.toString()] = descendant ?? null;
  });
  ctor._AnimationGroups?.forEach((params) => {
    instance[params.propertyKey.toString()] = scene.getAnimationGroupByName(params.animationGroupName);
  });
  ctor._SoundsFromScene?.forEach((params) => {
    const sound = scene.getSoundByName?.(params.soundName);
    instance[params.propertyKey.toString()] = sound ?? null;
  });
  ctor._GuiFromAsset?.forEach(async (params) => {
    const guiUrl = `${rootUrl}assets/${params.pathInAssets}`;
    try {
      const response = await fetch(guiUrl);
      const data = await response.json();
      const gui = import_babylonjs_gui.AdvancedDynamicTexture.CreateFullscreenUI(data.name, true, scene);
      gui.parseSerializedObject(data.content, false);
      instance[params.propertyKey.toString()] = gui;
      params.onGuiCreated?.(instance, gui);
    } catch (e) {
      console.error(`Failed to load GUI from asset: ${guiUrl}`);
      throw e;
    }
  });
  ctor._ParticleSystemsFromScene?.forEach((params) => {
    const particleSystem = scene.particleSystems?.find((particleSystem2) => {
      if (particleSystem2.name !== params.particleSystemName) {
        return false;
      }
      return params.directDescendantsOnly ? particleSystem2.emitter === object : particleSystem2;
    });
    instance[params.propertyKey.toString()] = particleSystem;
  });
  ctor._VisibleInInspector?.forEach((params) => {
    const propertyKey = params.propertyKey.toString();
    const attachedScripts = script.values;
    if (attachedScripts.hasOwnProperty(propertyKey) && attachedScripts[propertyKey].hasOwnProperty("value")) {
      const value = attachedScripts[propertyKey].value;
      switch (params.configuration.type) {
        case "number":
        case "boolean":
        case "keymap":
        case "string":
          instance[propertyKey] = value;
          break;
        case "vector2":
          instance[propertyKey] = import_babylonjs3.Vector2.FromArray(value);
          break;
        case "vector3":
          instance[propertyKey] = import_babylonjs3.Vector3.FromArray(value);
          break;
        case "color3":
          instance[propertyKey] = import_babylonjs.Color3.FromArray(value);
          break;
        case "color4":
          instance[propertyKey] = import_babylonjs.Color4.FromArray(value);
          break;
        case "entity":
          const entityType = params.configuration.entityType;
          switch (entityType) {
            case "node":
              instance[propertyKey] = scene.getNodeById(value) ?? null;
              break;
            case "animationGroup":
              instance[propertyKey] = scene.getAnimationGroupByName(value) ?? null;
              break;
            case "sound":
              instance[propertyKey] = getSoundById(value, scene);
              break;
            case "particleSystem":
              instance[propertyKey] = scene.particleSystems?.find((ps) => ps.id === value) ?? null;
              break;
          }
          break;
        case "texture":
          if (value) {
            instance[propertyKey] = import_babylonjs2.Texture.Parse(value, scene, rootUrl);
          }
          break;
      }
    }
  });
  if (ctor._PointerEvents?.length) {
    const wrongMeshListener = ctor._PointerEvents.find((params) => params.options.mode === "attachedMeshOnly");
    if (wrongMeshListener && !isAbstractMesh(object)) {
      throw new Error(`@onPointerEvent with mode "attachedMeshOnly" can only be used on scripts attached to meshes (extends AbstractMesh).`);
    }
    const wrongSceneListener = ctor._PointerEvents.find((params) => params.options.mode !== "global");
    if (wrongSceneListener && !isNode(object)) {
      throw new Error(`@onPointerEvent with mode different from "global" can be used only on scripts attached to Node: Mesh, Light, Camera, TransformNode.`);
    }
    scene.onPointerObservable.add((pointerInfo) => {
      let pickInfo = null;
      ctor._PointerEvents.forEach((params) => {
        if (!params.eventTypes.includes(pointerInfo.type)) {
          return;
        }
        const propertyKey = params.propertyKey.toString();
        if (params.options.mode === "global") {
          return instance[propertyKey]?.(pointerInfo);
        }
        pickInfo = pointerInfo.pickInfo;
        if (!pickInfo) {
          pickInfo = scene.pick(scene.pointerX, scene.pointerY, (m) => {
            return m.isVisible && m.isPickable && m.isEnabled(true) && !m._masterMesh;
          }, false);
        }
        const pickedMesh = pickInfo.pickedMesh;
        if (pickedMesh) {
          if (params.options.mode === "attachedMeshOnly" && pickedMesh === object) {
            return instance[propertyKey]?.(pointerInfo);
          }
          if (params.options.mode === "includeDescendants" && isNode(object)) {
            const descendants = [object, ...object.getDescendants(false)];
            const pickedDescendant = descendants.find((d) => d === pickedMesh);
            if (pickedDescendant) {
              return instance[propertyKey]?.(pointerInfo);
            }
          }
        }
      });
    });
  }
  if (ctor._KeyboardEvents?.length) {
    scene.onKeyboardObservable.add((keyboardInfo) => {
      ctor._KeyboardEvents.forEach((params) => {
        if (!params.eventTypes.includes(keyboardInfo.type)) {
          return;
        }
        instance[params.propertyKey.toString()]?.(keyboardInfo);
      });
    });
  }
}
__name(applyDecorators, "applyDecorators");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/script.js
function _applyScriptsForObject(scene, object, scriptsMap2, rootUrl) {
  if (!object.metadata) {
    return;
  }
  object.metadata.scripts?.forEach((script) => {
    if (!script.enabled) {
      return;
    }
    const exports2 = scriptsMap2[script.key];
    if (!exports2) {
      return;
    }
    if (exports2.default) {
      const instance = new exports2.default(object);
      registerScriptInstance(object, instance, script.key);
      applyDecorators(scene, object, script, instance, rootUrl);
      if (instance.onStart) {
        scene.onBeforeRenderObservable.addOnce(() => instance.onStart());
      }
      if (instance.onUpdate) {
        scene.onBeforeRenderObservable.add(() => instance.onUpdate());
      }
    } else {
      if (exports2.onStart) {
        scene.onBeforeRenderObservable.addOnce(() => exports2.onStart(object));
      }
      if (exports2.onUpdate) {
        scene.onBeforeRenderObservable.add(() => exports2.onUpdate(object));
      }
    }
  });
  object.metadata.scripts = void 0;
}
__name(_applyScriptsForObject, "_applyScriptsForObject");
var scriptsDictionary = /* @__PURE__ */ new Map();
function registerScriptInstance(object, scriptInstance, key) {
  const registeredScript = {
    key,
    instance: scriptInstance
  };
  if (!scriptsDictionary.has(object)) {
    scriptsDictionary.set(object, [registeredScript]);
  } else {
    scriptsDictionary.get(object).push(registeredScript);
  }
  if (isNode(object) || isAnyParticleSystem(object) || isScene(object)) {
    object.onDisposeObservable.addOnce(() => {
      scriptsDictionary.delete(object);
    });
  }
}
__name(registerScriptInstance, "registerScriptInstance");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/physics.js
var import_babylonjs4 = require("babylonjs");
var import_babylonjs5 = require("babylonjs");
function configurePhysicsAggregate(transformNode) {
  const data = transformNode.metadata?.physicsAggregate;
  if (!data) {
    return;
  }
  let mesh = void 0;
  if (isMesh(transformNode)) {
    mesh = transformNode;
  } else if (isInstancedMesh(transformNode)) {
    mesh = transformNode.sourceMesh;
  }
  const aggregate = new import_babylonjs5.PhysicsAggregate(transformNode, data.shape.type, {
    mesh,
    mass: data.massProperties.mass
  });
  aggregate.body.setMassProperties({
    mass: data.massProperties.mass,
    inertia: data.massProperties.inertia ? import_babylonjs4.Vector3.FromArray(data.massProperties.inertia) : void 0,
    centerOfMass: data.massProperties.centerOfMass ? import_babylonjs4.Vector3.FromArray(data.massProperties.centerOfMass) : void 0,
    inertiaOrientation: data.massProperties.inertiaOrientation ? import_babylonjs4.Quaternion.FromArray(data.massProperties.inertiaOrientation) : void 0
  });
  aggregate.shape.density = data.shape.density;
  aggregate.body.setMotionType(data.body.motionType);
  aggregate.shape.material = data.material;
  transformNode.physicsAggregate = aggregate;
  transformNode.metadata.physicsAggregate = void 0;
}
__name(configurePhysicsAggregate, "configurePhysicsAggregate");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/rendering/vls.js
var import_babylonjs6 = require("babylonjs");
var import_babylonjs7 = require("babylonjs");
var import_babylonjs8 = require("babylonjs");
var vlsPostProcess = null;
var vlsPostProcessCameraConfigurations = /* @__PURE__ */ new Map();
function disposeVLSPostProcess(scene) {
  if (vlsPostProcess && scene.activeCamera) {
    vlsPostProcess.dispose(scene.activeCamera);
    vlsPostProcess = null;
  }
}
__name(disposeVLSPostProcess, "disposeVLSPostProcess");
function createVLSPostProcess(scene, mesh) {
  mesh ??= scene.meshes.find((mesh2) => isMesh(mesh2));
  vlsPostProcess = new import_babylonjs8.VolumetricLightScatteringPostProcess("VolumetricLightScatteringPostProcess", 1, scene.activeCamera, mesh, 100, import_babylonjs7.Texture.BILINEAR_SAMPLINGMODE, scene.getEngine(), false);
  return vlsPostProcess;
}
__name(createVLSPostProcess, "createVLSPostProcess");
function parseVLSPostProcess(scene, data) {
  let mesh = null;
  if (data.meshId) {
    const result = scene.getMeshById(data.meshId);
    if (result && isMesh(result)) {
      mesh = result;
    }
  }
  const vlsPostProcess2 = createVLSPostProcess(scene, mesh);
  vlsPostProcess2.exposure = data.exposure;
  vlsPostProcess2.decay = data.decay;
  vlsPostProcess2.weight = data.weight;
  vlsPostProcess2.density = data.density;
  vlsPostProcess2.invert = data.invert;
  vlsPostProcess2.useCustomMeshPosition = data.useCustomMeshPosition;
  vlsPostProcess2.customMeshPosition.copyFrom(import_babylonjs6.Vector3.FromArray(data.customMeshPosition));
  return vlsPostProcess2;
}
__name(parseVLSPostProcess, "parseVLSPostProcess");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/rendering/ssr.js
var import_babylonjs9 = require("babylonjs");
var ssrRenderingPipeline = null;
var ssrRenderingPipelineCameraConfigurations = /* @__PURE__ */ new Map();
function disposeSSRRenderingPipeline() {
  if (ssrRenderingPipeline) {
    ssrRenderingPipeline.dispose();
    ssrRenderingPipeline = null;
  }
}
__name(disposeSSRRenderingPipeline, "disposeSSRRenderingPipeline");
function createSSRRenderingPipeline(scene, camera) {
  ssrRenderingPipeline = new import_babylonjs9.SSRRenderingPipeline("SSRRenderingPipeline", scene, [camera]);
  ssrRenderingPipeline.samples = 4;
  return ssrRenderingPipeline;
}
__name(createSSRRenderingPipeline, "createSSRRenderingPipeline");
function parseSSRRenderingPipeline(scene, camera, data) {
  if (ssrRenderingPipeline) {
    return ssrRenderingPipeline;
  }
  const pipeline = createSSRRenderingPipeline(scene, camera);
  pipeline.samples = data.samples;
  pipeline.step = data.step;
  pipeline.thickness = data.thickness;
  pipeline.strength = data.strength;
  pipeline.reflectionSpecularFalloffExponent = data.reflectionSpecularFalloffExponent;
  pipeline.maxSteps = data.maxSteps;
  pipeline.maxDistance = data.maxDistance;
  pipeline.roughnessFactor = data.roughnessFactor;
  pipeline.reflectivityThreshold = data.reflectivityThreshold;
  pipeline.blurDispersionStrength = data.blurDispersionStrehgth;
  pipeline.clipToFrustum = data.clipToFrustum;
  pipeline.enableSmoothReflections = data.enableSmoothReflections;
  pipeline.enableAutomaticThicknessComputation = data.enableAutomaticThicknessComputation;
  pipeline.attenuateFacingCamera = data.attenuateFacingCamera;
  pipeline.attenuateScreenBorders = data.attenuateScreenBorders;
  pipeline.attenuateIntersectionDistance = data.attenuateIntersectionDistance;
  pipeline.attenuateBackfaceReflection = data.attenuateBackfaceReflection;
  pipeline.blurDownsample = data.blurDownsample;
  pipeline.selfCollisionNumSkip = data.selfCollisionNumSkip;
  pipeline.ssrDownsample = data.ssrDownsample;
  pipeline.backfaceDepthTextureDownsample = data.backfaceDepthTextureDownsample;
  return pipeline;
}
__name(parseSSRRenderingPipeline, "parseSSRRenderingPipeline");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/rendering/ssao.js
var import_babylonjs10 = require("babylonjs");
var ssaoRenderingPipeline = null;
var ssaoRenderingPipelineCameraConfigurations = /* @__PURE__ */ new Map();
function disposeSSAO2RenderingPipeline() {
  if (ssaoRenderingPipeline) {
    ssaoRenderingPipeline.dispose();
    ssaoRenderingPipeline = null;
  }
}
__name(disposeSSAO2RenderingPipeline, "disposeSSAO2RenderingPipeline");
function createSSAO2RenderingPipeline(scene, camera) {
  ssaoRenderingPipeline = new import_babylonjs10.SSAO2RenderingPipeline("SSAO2RenderingPipeline", scene, 1, [camera]);
  ssaoRenderingPipeline.samples = 4;
  return ssaoRenderingPipeline;
}
__name(createSSAO2RenderingPipeline, "createSSAO2RenderingPipeline");
function parseSSAO2RenderingPipeline(scene, camera, data) {
  if (ssaoRenderingPipeline) {
    return ssaoRenderingPipeline;
  }
  const pipeline = createSSAO2RenderingPipeline(scene, camera);
  pipeline.radius = data.radius;
  pipeline.totalStrength = data.totalStrength;
  pipeline.samples = data.samples;
  pipeline.maxZ = data.maxZ;
  pipeline.minZAspect = data.minZAspect;
  pipeline.epsilon = data.epsilon;
  pipeline.textureSamples = data.textureSamples;
  pipeline.bypassBlur = data.bypassBlur;
  pipeline.bilateralSamples = data.bilateralSamples;
  pipeline.bilateralSoften = data.bilateralSoften;
  pipeline.bilateralTolerance = data.bilateralTolerance;
  pipeline.expensiveBlur = data.expensiveBlur;
  return pipeline;
}
__name(parseSSAO2RenderingPipeline, "parseSSAO2RenderingPipeline");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/rendering/motion-blur.js
var import_babylonjs11 = require("babylonjs");
var motionBlurPostProcess = null;
var motionBlurPostProcessCameraConfigurations = /* @__PURE__ */ new Map();
function disposeMotionBlurPostProcess() {
  if (motionBlurPostProcess) {
    motionBlurPostProcess.dispose();
    motionBlurPostProcess = null;
  }
}
__name(disposeMotionBlurPostProcess, "disposeMotionBlurPostProcess");
function createMotionBlurPostProcess(scene, camera) {
  motionBlurPostProcess = new import_babylonjs11.MotionBlurPostProcess("MotionBlurPostProcess", scene, 1, camera);
  motionBlurPostProcess.motionStrength = 1;
  motionBlurPostProcess.isObjectBased = true;
  return motionBlurPostProcess;
}
__name(createMotionBlurPostProcess, "createMotionBlurPostProcess");
function parseMotionBlurPostProcess(scene, camera, data) {
  if (motionBlurPostProcess) {
    return motionBlurPostProcess;
  }
  const postProcess = createMotionBlurPostProcess(scene, camera);
  postProcess.isObjectBased = data.isObjectBased;
  postProcess.motionStrength = data.motionStrength;
  postProcess.motionBlurSamples = data.motionBlurSamples;
  return postProcess;
}
__name(parseMotionBlurPostProcess, "parseMotionBlurPostProcess");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/rendering/default-pipeline.js
var import_babylonjs12 = require("babylonjs");
var import_babylonjs13 = require("babylonjs");
var import_babylonjs14 = require("babylonjs");
var import_babylonjs15 = require("babylonjs");
var import_babylonjs16 = require("babylonjs");
var defaultRenderingPipeline = null;
var defaultPipelineCameraConfigurations = /* @__PURE__ */ new Map();
function disposeDefaultRenderingPipeline() {
  if (defaultRenderingPipeline) {
    defaultRenderingPipeline.dispose();
    defaultRenderingPipeline = null;
  }
}
__name(disposeDefaultRenderingPipeline, "disposeDefaultRenderingPipeline");
function createDefaultRenderingPipeline(scene, camera) {
  defaultRenderingPipeline = new import_babylonjs16.DefaultRenderingPipeline("DefaultRenderingPipeline", true, scene, [camera]);
  defaultRenderingPipeline.samples = 4;
  defaultRenderingPipeline.depthOfField.lensSize = 512;
  defaultRenderingPipeline.depthOfField.fStop = 0.25;
  defaultRenderingPipeline.depthOfField.focusDistance = 55e3;
  return defaultRenderingPipeline;
}
__name(createDefaultRenderingPipeline, "createDefaultRenderingPipeline");
function parseDefaultRenderingPipeline(scene, camera, data, rootUrl) {
  if (defaultRenderingPipeline) {
    return defaultRenderingPipeline;
  }
  const pipeline = createDefaultRenderingPipeline(scene, camera);
  pipeline.samples = data.samples;
  pipeline.fxaaEnabled = data.fxaaEnabled;
  pipeline.imageProcessingEnabled = data.imageProcessingEnabled;
  if (pipeline.imageProcessing) {
    pipeline.imageProcessing.exposure = data.exposure;
    pipeline.imageProcessing.contrast = data.contrast;
    pipeline.imageProcessing.fromLinearSpace = data.fromLinearSpace;
    pipeline.imageProcessing.toneMappingEnabled = data.toneMappingEnabled;
    pipeline.imageProcessing.toneMappingType = data.toneMappingType;
    pipeline.imageProcessing.ditheringEnabled = data.ditheringEnabled;
    pipeline.imageProcessing.ditheringIntensity = data.ditheringIntensity;
    pipeline.imageProcessing.vignetteEnabled = data.vignetteEnabled ?? false;
    pipeline.imageProcessing.vignetteColor = import_babylonjs12.Color4.FromArray(data.vignetteColor ?? [0, 0, 0]);
    pipeline.imageProcessing.vignetteWeight = data.vignetteWeight ?? 0.3;
    pipeline.imageProcessing.colorGradingEnabled = data.colorGradingEnabled ?? false;
    pipeline.imageProcessing.imageProcessingConfiguration.colorGradingWithGreenDepth = data.colorGradingWithGreenDepth ?? true;
    if (data.colorGradingTexture) {
      let texture = null;
      if (data.colorGradingTexture.customType === "BABYLON.ColorGradingTexture") {
        const absoluteUrl = rootUrl + data.colorGradingTexture.name;
        texture = new import_babylonjs15.ColorGradingTexture(absoluteUrl, scene);
        texture.level = data.colorGradingTexture.level;
      } else {
        const parsedTexture = import_babylonjs14.Texture.Parse(data.colorGradingTexture, scene, rootUrl);
        if (isTexture(parsedTexture)) {
          texture = parsedTexture;
        }
      }
      pipeline.imageProcessing.colorGradingTexture = texture;
    }
    pipeline.imageProcessing.colorCurvesEnabled = data.colorCurvesEnabled ?? false;
    if (pipeline.imageProcessing.colorCurves) {
      pipeline.imageProcessing.colorCurves.globalHue = data.globalHue ?? 30;
      pipeline.imageProcessing.colorCurves.globalDensity = data.globalDensity ?? 0;
      pipeline.imageProcessing.colorCurves.globalExposure = data.globalExposure ?? 0;
      pipeline.imageProcessing.colorCurves.globalSaturation = data.globalSaturation ?? 0;
      pipeline.imageProcessing.colorCurves.highlightsHue = data.highlightsHue ?? 30;
      pipeline.imageProcessing.colorCurves.highlightsDensity = data.highlightsDensity ?? 0;
      pipeline.imageProcessing.colorCurves.highlightsExposure = data.highlightsExposure ?? 0;
      pipeline.imageProcessing.colorCurves.highlightsSaturation = data.highlightsSaturation ?? 0;
      pipeline.imageProcessing.colorCurves.midtonesHue = data.midtonesHue ?? 30;
      pipeline.imageProcessing.colorCurves.midtonesDensity = data.midtonesDensity ?? 0;
      pipeline.imageProcessing.colorCurves.midtonesExposure = data.midtonesExposure ?? 0;
      pipeline.imageProcessing.colorCurves.midtonesSaturation = data.midtonesSaturation ?? 0;
      pipeline.imageProcessing.colorCurves.shadowsHue = data.shadowsHue ?? 30;
      pipeline.imageProcessing.colorCurves.shadowsDensity = data.shadowsDensity ?? 0;
      pipeline.imageProcessing.colorCurves.shadowsExposure = data.shadowsExposure ?? 0;
      pipeline.imageProcessing.colorCurves.shadowsSaturation = data.shadowsSaturation ?? 0;
    }
  }
  pipeline.bloomEnabled = data.bloomEnabled;
  pipeline.bloomThreshold = data.bloomThreshold;
  pipeline.bloomWeight = data.bloomWeight;
  pipeline.bloomScale = data.bloomScale;
  pipeline.bloomKernel = data.bloomKernel;
  pipeline.sharpenEnabled = data.sharpenEnabled;
  pipeline.sharpen.edgeAmount = data.sharpenEdgeAmount;
  pipeline.sharpen.colorAmount = data.sharpenColorAmount;
  pipeline.grainEnabled = data.grainEnabled;
  pipeline.grain.intensity = data.grainIntensity;
  pipeline.grain.animated = data.grainAnimated;
  pipeline.depthOfFieldEnabled = data.depthOfFieldEnabled;
  pipeline.depthOfFieldBlurLevel = data.depthOfFieldBlurLevel;
  pipeline.depthOfField.lensSize = data.lensSize;
  pipeline.depthOfField.fStop = data.fStop;
  pipeline.depthOfField.focusDistance = data.focusDistance;
  pipeline.depthOfField.focalLength = data.focalLength;
  pipeline.chromaticAberrationEnabled = data.chromaticAberrationEnabled ?? false;
  pipeline.chromaticAberration.aberrationAmount = data.aberrationAmount ?? 10;
  pipeline.chromaticAberration.radialIntensity = data.radialIntensity ?? 1;
  pipeline.chromaticAberration.direction = import_babylonjs13.Vector2.FromArray(data.direction ?? [0, 0]);
  pipeline.chromaticAberration.centerPosition = import_babylonjs13.Vector2.FromArray(data.centerPosition ?? [0, 0]);
  pipeline.glowLayerEnabled = data.glowLayerEnabled ?? false;
  if (pipeline.glowLayer) {
    pipeline.glowLayer.intensity = data.glowLayerIntensity ?? 1;
    pipeline.glowLayer.blurKernelSize = data.glowLayerBlurKernelSize ?? 32;
  }
  return pipeline;
}
__name(parseDefaultRenderingPipeline, "parseDefaultRenderingPipeline");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/rendering.js
function applyRenderingConfigurations(scene, rendering) {
  const postProcessConfigurations = Array.isArray(rendering) ? rendering : [];
  postProcessConfigurations.forEach((configuration) => {
    const camera = scene.getCameraById(configuration.cameraId);
    if (!camera) {
      return;
    }
    if (configuration.ssao2RenderingPipeline) {
      ssaoRenderingPipelineCameraConfigurations.set(camera, configuration.ssao2RenderingPipeline);
    }
    if (configuration.vlsPostProcess) {
      vlsPostProcessCameraConfigurations.set(camera, configuration.vlsPostProcess);
    }
    if (configuration.ssrRenderingPipeline) {
      ssrRenderingPipelineCameraConfigurations.set(camera, configuration.ssrRenderingPipeline);
    }
    if (configuration.motionBlurPostProcess) {
      motionBlurPostProcessCameraConfigurations.set(camera, configuration.motionBlurPostProcess);
    }
    if (configuration.defaultRenderingPipeline) {
      defaultPipelineCameraConfigurations.set(camera, configuration.defaultRenderingPipeline);
    }
  });
}
__name(applyRenderingConfigurations, "applyRenderingConfigurations");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/rendering/tools.js
function applyRenderingConfigurationForCamera(camera, rootUrl) {
  disposeSSAO2RenderingPipeline();
  disposeVLSPostProcess(camera.getScene());
  disposeSSRRenderingPipeline();
  disposeMotionBlurPostProcess();
  disposeDefaultRenderingPipeline();
  const ssao2RenderingPipeline = ssaoRenderingPipelineCameraConfigurations.get(camera);
  if (ssao2RenderingPipeline) {
    parseSSAO2RenderingPipeline(camera.getScene(), camera, ssao2RenderingPipeline);
  }
  const vlsPostProcess2 = vlsPostProcessCameraConfigurations.get(camera);
  if (vlsPostProcess2) {
    parseVLSPostProcess(camera.getScene(), vlsPostProcess2);
  }
  const ssrRenderingPipeline2 = ssrRenderingPipelineCameraConfigurations.get(camera);
  if (ssrRenderingPipeline2) {
    parseSSRRenderingPipeline(camera.getScene(), camera, ssrRenderingPipeline2);
  }
  const motionBlurPostProcess2 = motionBlurPostProcessCameraConfigurations.get(camera);
  if (motionBlurPostProcess2) {
    parseMotionBlurPostProcess(camera.getScene(), camera, motionBlurPostProcess2);
  }
  const defaultRenderingPipeline2 = defaultPipelineCameraConfigurations.get(camera);
  if (defaultRenderingPipeline2) {
    parseDefaultRenderingPipeline(camera.getScene(), camera, defaultRenderingPipeline2, rootUrl);
  }
}
__name(applyRenderingConfigurationForCamera, "applyRenderingConfigurationForCamera");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/tools/light.js
var import_babylonjs17 = require("babylonjs");
var import_babylonjs18 = require("babylonjs");
function configureShadowMapRenderListPredicate(scene) {
  scene.lights.forEach((light) => {
    const shadowMap = light.getShadowGenerator()?.getShadowMap();
    if (!shadowMap) {
      return;
    }
    shadowMap.renderListPredicate = (mesh) => {
      const distance = import_babylonjs17.Vector3.Distance(mesh.getAbsolutePosition(), light.getAbsolutePosition());
      return distance <= light.range;
    };
  });
}
__name(configureShadowMapRenderListPredicate, "configureShadowMapRenderListPredicate");
async function configureShadowMapRefreshRate(scene) {
  scene.executeWhenReady(() => {
    scene.lights.forEach((light) => {
      const shadowMap = light.getShadowGenerator()?.getShadowMap();
      if (shadowMap) {
        shadowMap.refreshRate = light.metadata?.refreshRate ?? import_babylonjs18.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME;
      }
    });
  });
}
__name(configureShadowMapRefreshRate, "configureShadowMapRefreshRate");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/sound.js
var import_babylonjs19 = require("babylonjs");
var import_babylonjs20 = require("babylonjs");
var audioParser = (0, import_babylonjs20.GetParser)(import_babylonjs19.SceneComponentConstants.NAME_AUDIO);
(0, import_babylonjs20.AddParser)(import_babylonjs19.SceneComponentConstants.NAME_AUDIO, (parsedData, scene, container, rootUrl) => {
  audioParser?.(parsedData, scene, container, rootUrl);
  parsedData.sounds?.forEach((sound) => {
    const instance = container.sounds?.find((s) => s.name === sound.name);
    if (instance) {
      instance.id = sound.id;
      instance.uniqueId = sound.uniqueId;
    }
  });
});

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/texture.js
var import_babylonjs21 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/tools/scalar.js
function getPowerOfTwoUntil(limit) {
  let size = 1;
  while (size <= limit) {
    size <<= 1;
  }
  return size >> 1;
}
__name(getPowerOfTwoUntil, "getPowerOfTwoUntil");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/texture.js
var textureParser = import_babylonjs21.SerializationHelper._TextureParser;
import_babylonjs21.SerializationHelper._TextureParser = (sourceProperty, scene, rootUrl) => {
  if (scene.loadingQuality === "high" || !sourceProperty.metadata?.baseSize) {
    return textureParser(sourceProperty, scene, rootUrl);
  }
  const width = sourceProperty.metadata.baseSize.width;
  const height = sourceProperty.metadata.baseSize.height;
  const isPowerOfTwo = width === getPowerOfTwoUntil(width) || height === getPowerOfTwoUntil(height);
  let suffix = "";
  switch (scene.loadingQuality) {
    case "medium":
      let midWidth = width * 0.66 >> 0;
      let midHeight = height * 0.66 >> 0;
      if (isPowerOfTwo) {
        midWidth = getPowerOfTwoUntil(midWidth);
        midHeight = getPowerOfTwoUntil(midHeight);
      }
      suffix = `_${midWidth}_${midHeight}`;
      break;
    case "low":
      let lowWidth = width * 0.33 >> 0;
      let lowHeight = height * 0.33 >> 0;
      if (isPowerOfTwo) {
        lowWidth = getPowerOfTwoUntil(lowWidth);
        lowHeight = getPowerOfTwoUntil(lowHeight);
      }
      suffix = `_${lowWidth}_${lowHeight}`;
      break;
  }
  const name = sourceProperty.name;
  if (!name || !suffix) {
    return textureParser(sourceProperty, scene, rootUrl);
  }
  const finalUrl = name.split("/");
  const filename = finalUrl.pop();
  if (!filename) {
    return textureParser(sourceProperty, scene, rootUrl);
  }
  const extension = filename.split(".").pop();
  const baseFilename = filename.replace(`.${extension}`, "");
  const newFilename = `${baseFilename}${suffix}.${extension}`;
  finalUrl.push(newFilename);
  sourceProperty.name = finalUrl.join("/");
  return textureParser(sourceProperty, scene, rootUrl);
};

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/loader.js
async function loadScene(rootUrl, sceneFilename, scene, scriptsMap2, options) {
  scene.loadingQuality = options?.quality ?? "high";
  await (0, import_babylonjs24.AppendSceneAsync)(`${rootUrl}${sceneFilename}`, scene, {
    pluginExtension: ".babylon",
    onProgress: /* @__PURE__ */ __name((event) => {
      const progress = Math.min(event.loaded / event.total * 0.5);
      options?.onProgress?.(progress);
    }, "onProgress")
  });
  if (import_babylonjs25.SceneLoaderFlags.ForceFullSceneLoadingForIncremental) {
    scene.meshes.forEach((m) => isMesh(m) && m._checkDelayState());
  }
  const waitingItemsCount = scene.getWaitingItemsCount();
  while (!scene.isDisposed && (!scene.isReady() || scene.getWaitingItemsCount() > 0)) {
    await new Promise((resolve) => setTimeout(resolve, 150));
    const loadedItemsCount = waitingItemsCount - scene.getWaitingItemsCount();
    if (loadedItemsCount === waitingItemsCount) {
      scene.textures.forEach((texture) => {
        if (texture.delayLoadState === import_babylonjs23.Constants.DELAYLOADSTATE_NONE) {
          texture.delayLoadState = import_babylonjs23.Constants.DELAYLOADSTATE_LOADED;
        }
      });
    }
    options?.onProgress?.(0.5 + loadedItemsCount / waitingItemsCount * 0.5);
  }
  options?.onProgress?.(1);
  configureShadowMapRenderListPredicate(scene);
  configureShadowMapRefreshRate(scene);
  if (scene.metadata?.rendering) {
    applyRenderingConfigurations(scene, scene.metadata.rendering);
    if (scene.activeCamera) {
      applyRenderingConfigurationForCamera(scene.activeCamera, rootUrl);
    }
  }
  if (scene.metadata?.physicsGravity) {
    scene.getPhysicsEngine()?.setGravity(import_babylonjs22.Vector3.FromArray(scene.metadata?.physicsGravity));
  }
  _applyScriptsForObject(scene, scene, scriptsMap2, rootUrl);
  scene.transformNodes.forEach((transformNode) => {
    _applyScriptsForObject(scene, transformNode, scriptsMap2, rootUrl);
  });
  scene.meshes.forEach((mesh) => {
    configurePhysicsAggregate(mesh);
    _applyScriptsForObject(scene, mesh, scriptsMap2, rootUrl);
  });
  scene.lights.forEach((light) => {
    _applyScriptsForObject(scene, light, scriptsMap2, rootUrl);
  });
  scene.cameras.forEach((camera) => {
    _applyScriptsForObject(scene, camera, scriptsMap2, rootUrl);
  });
}
__name(loadScene, "loadScene");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/loading/material.js
var import_babylonjs26 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/tools/animation.js
var import_babylonjs27 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/decorators/inspector.js
function visibleAsNumber(label, configuration) {
  return function(target, propertyKey) {
    const ctor = target.constructor;
    ctor._VisibleInInspector ??= [];
    ctor._VisibleInInspector.push({
      label,
      propertyKey,
      configuration: {
        ...configuration,
        type: "number"
      }
    });
  };
}
__name(visibleAsNumber, "visibleAsNumber");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/cinematic/parse.js
var import_babylonjs29 = require("babylonjs");
var import_babylonjs30 = require("babylonjs");
var import_babylonjs31 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/cinematic/tools.js
var import_babylonjs28 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/cinematic/generate.js
var import_babylonjs33 = require("babylonjs");
var import_babylonjs34 = require("babylonjs");
var import_babylonjs35 = require("babylonjs");
var import_babylonjs36 = require("babylonjs");

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/node_modules/babylonjs-editor-tools/build/src/cinematic/events/apply-impulse.js
var import_babylonjs32 = require("babylonjs");
var zeroVector = import_babylonjs32.Vector3.Zero();

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/src/scripts/box.ts
var box_exports = {};
__export(box_exports, {
  default: () => SceneComponent
});
var import_babylonjs37 = require("babylonjs");
var SceneComponent = class {
  constructor(mesh) {
    this.mesh = mesh;
    this._speed = 0.04;
  }
  static {
    __name(this, "SceneComponent");
  }
  onStart() {
  }
  onUpdate() {
    this.mesh.rotate(import_babylonjs37.Vector3.UpReadOnly, this._speed * this.mesh.getScene().getAnimationRatio());
  }
};
__decorateClass([
  visibleAsNumber("Speed", {
    min: 0,
    max: 0.1
  })
], SceneComponent.prototype, "_speed", 2);

// ../../../../OneDrive/Desktop/Cognitive3D/c3d-webxr-sample-apps/c3d-webxr-babylon-sample-app/src/scripts.ts
var scriptsMap = {
  "scripts/box.ts": box_exports
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loadScene,
  scriptsMap
});
//# sourceMappingURL=script.cjs.map
