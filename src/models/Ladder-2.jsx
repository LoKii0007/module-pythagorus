import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Billboard, Text } from '@react-three/drei'
import { useGlobal } from '../components/hooks'

export function Ladder3Model(props) {
  const { nodes, materials } = useGLTF('/ladder-2-transformed.glb')

  const {sideB} = useGlobal()

  // const height = Math.sqrt(hypotenuse ** 2 - sideB ** 2);

  // // Calculate rotation angle (θ) using inverse tangent: θ = atan(h / sideB)
  // const angle = Math.atan(height / sideB);

  return (
    <group {...props} dispose={null} position={[0,0,0]} rotation={[ 0 ,180 * Math.PI/180,0]} scale={0.8}  >

      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.002']} scale={24.752} />

      <Billboard  position={[0, 0, 0]}>
        <Text fontSize={1} color={'whitesmoke'} position={[-8,8,0]} >
          5m
        </Text>
        {/* <Text rotation={[0,0 * Math.PI/180,0]} fontSize={1} color={'red'} position={[-2,8,-1]} >
        4m
      </Text> */}
      </Billboard>

      <Text rotation={[0, 180 * Math.PI/180,0]} fontSize={1} color={'whitesmoke'} position={[0,8,-0.8]} >
        4m
      </Text>

      {/* ladder */}
      <mesh geometry={nodes.Ladders018.geometry} material={materials.lambert49SG} position={[-0.11, 6.621 , -sideB ]} rotation={[1.4 + sideB*10 * Math.PI / 180, 0, -Math.PI / 2]} scale={0.051} />
      
      <group position={[16.616, 0.775, -4]} rotation={[-0.062, 0, -0.004]}>
        <mesh geometry={nodes.gs_forest_seedlings_01.geometry} material={materials['.gs_seedling_01_stem']} />
        <mesh geometry={nodes.gs_forest_seedlings_01_1.geometry} material={materials['.gs_seedling_01']} />
      </group>
      
      <group position={[11.848, 0.485, -7.18]} rotation={[-0.009, 0, 0.02]}>
        <mesh geometry={nodes.gs_dryland_meadow_flower_01.geometry} material={materials['.gs_grass__dryland']} />
        <mesh geometry={nodes.gs_dryland_meadow_flower_01_1.geometry} material={materials['.gs_grass_flower']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ladder-2-transformed.glb')
