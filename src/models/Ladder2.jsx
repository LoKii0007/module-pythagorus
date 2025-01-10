import React from 'react'
import { useGLTF } from '@react-three/drei'

export function LadderModel(props) {
  const { nodes, materials } = useGLTF('/ladder-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.002']} scale={24.752} />
      <mesh geometry={nodes.Ladders018.geometry} material={materials.lambert49SG} position={[-0.11, 16.621, -5.527]} rotation={[2.244, 0, -Math.PI / 2]} scale={0.051} />
      <group position={[16.616, 0.775, -4]} rotation={[-0.062, 0, -0.004]}>
        <mesh geometry={nodes.gs_forest_seedlings_01.geometry} material={materials['.gs_seedling_01_stem']} />
        <mesh geometry={nodes.gs_forest_seedlings_01_1.geometry} material={materials['.gs_seedling_01']} />
      </group>
      <group position={[11.848, 0.485, -7.18]} rotation={[-0.009, 0, 0.02]}>
        <mesh geometry={nodes.gs_dryland_meadow_flower_01.geometry} material={materials['.gs_grass__dryland']} />
        <mesh geometry={nodes.gs_dryland_meadow_flower_01_1.geometry} material={materials['.gs_grass_flower']} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/ladder-transformed.glb')
