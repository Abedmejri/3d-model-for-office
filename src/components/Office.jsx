/*
Mejri Abed
*/

import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";

import * as THREE from "three";

export function Office(props) {
  const { nodes, materials } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  texture.flipY = false;
  texture.encoding = THREE.sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });

  return (
    <group {...props} dispose={null}>
      <group
        name="Desk"
        position={[-0.07, 0, -1.52]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="Plane001_Plane002_BlackWood001"
          geometry={nodes.Plane001_Plane002_BlackWood001.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_1"
          geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_2"
          geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_3"
          geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_4"
          geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.87, 1.69, -2.04]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry}
          material={textureMaterial}
        />
      </group>
      <group name="LavaLamp" position={[-1.3, 2.07, -1.99]}>
        <mesh
          name="Node-Mesh001"
          geometry={nodes["Node-Mesh001"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_1"
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_2"
          geometry={nodes["Node-Mesh001_2"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="WawaRug"
        geometry={nodes.WawaRug.geometry}
        material={textureMaterial}
        position={[-0.28, 0.01, 0.76]}
      />
      <group
        name="salameche"
        position={[-0.61, 2.04, -1.96]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      >
        <mesh
          name="mesh434900071"
          geometry={nodes.mesh434900071.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_1"
          geometry={nodes.mesh434900071_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_2"
          geometry={nodes.mesh434900071_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_3"
          geometry={nodes.mesh434900071_3.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_4"
          geometry={nodes.mesh434900071_4.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_5"
          geometry={nodes.mesh434900071_5.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="keyboard"
        position={[-0.04, 0.98, -1.35]}
        rotation={[0, -0.17, 0]}
      >
        <mesh
          name="mesh425587018"
          geometry={nodes.mesh425587018.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={nodes.mesh425587018_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={nodes.mesh425587018_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={nodes.mesh425587018_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="iMac"
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <mesh
          name="iMac_1"
          geometry={nodes.iMac_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_1"
          geometry={nodes.iMac_1_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={nodes.iMac_1_2.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Comp_Mouse"
        geometry={nodes.Comp_Mouse.geometry}
        material={textureMaterial}
      />
      <group name="plant" position={[-0.78, 1.07, -1.61]}>
        <mesh
          name="mesh24448074"
          geometry={nodes.mesh24448074.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={nodes.mesh24448074_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={nodes.mesh24448074_2.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Houseplant_7"
        position={[-2.02, -0.04, -1.53]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7_1"
          geometry={nodes.Houseplant_7_1.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={nodes.Houseplant_7_2.geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_3"
          geometry={nodes.Houseplant_7_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="palm_tree_01"
        position={[2.13, -0.08, -1.06]}
        rotation={[-Math.PI, 0.67, -Math.PI]}
      >
        <mesh
          name="palm_tree_01-Mesh"
          geometry={nodes["palm_tree_01-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_1"
          geometry={nodes["palm_tree_01-Mesh_1"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_2"
          geometry={nodes["palm_tree_01-Mesh_2"].geometry}
          material={textureMaterial}
        />
      </group>
      <group name="Chair" position={[-0.28, 0, -0.71]} rotation={[0, -0.38, 0]}>
        <mesh
          name="Node-Mesh"
          geometry={nodes["Node-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={nodes["Node-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Plane001"
        geometry={nodes.Plane001.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_1"
        geometry={nodes.Plane001_1.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_2"
        geometry={nodes.Plane001_2.geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_3"
        geometry={nodes.Plane001_3.geometry}
        material={textureGlassMaterial}
      />
    </group>
  );
}

useGLTF.preload("models/scene.gltf");
