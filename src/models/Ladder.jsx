import React from 'react'
import { Billboard, Text, useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ladder-transformed.glb')
  return (
    <group {...props} dispose={null} rotation={[  0 ,-45 * Math.PI/180,0]} position={[0,-1,3]} scale={[0.5,0.5,0.5]}>
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.001']} position={[0, 0, 4.514]} rotation={[Math.PI / 2, 0, 0]} scale={[0.243, 0.843, 1]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.002']} position={[0, 0, 4.849]} scale={[6.768, 24.752, 20.854]} />
      <Billboard follow={true} position={[0, 0, 0]}>
        <Text fontSize={1} color={'red'} position={[2,8,0]} >
          5m
        </Text>
      </Billboard>
      <Text rotation={[0,90 * Math.PI/180,0]} fontSize={1} color={'red'} position={[2,8,0]} >
          4m
        </Text>
      <mesh geometry={nodes.Ladders018.geometry} material={materials.lambert49SG} position={[-0.11, 6.621, -1.013]} rotation={[2.244, 0, -Math.PI / 2]} scale={0.051} />
    </group>
  )
}

useGLTF.preload('/ladder-transformed.glb')
