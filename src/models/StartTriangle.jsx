import { Text } from "@react-three/drei"

function StartTriangle() {
  return (
    <mesh rotation={[0,0,0]} >
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={3}
          array={new Float32Array([
            -2.0, -1.0, 0,  // vertex 1 (bottom left)
             2.0, -1.0, 0,  // vertex 2 (bottom right)
             2.0,  1.0, 0   // vertex 3 (top right)
          ])}
          itemSize={3}
        />
      </bufferGeometry>
      <Text fontSize={0.5} color={'whitesmoke'} position={[3,0,0]} >
        a
      </Text>
      <Text fontSize={0.5} color={'whitesmoke'} position={[0,-2,0]} >
        b
      </Text>
      <Text fontSize={0.5} color={'whitesmoke'} position={[0,0.7,0]} >
        c
      </Text>
      <meshBasicMaterial color="blue" side={2} />
    </mesh>
  )
}

export default StartTriangle