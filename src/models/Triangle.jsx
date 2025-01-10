import React from 'react';
import { Canvas } from '@react-three/fiber';

const Triangle = () => {
  const vertices = new Float32Array([
    0, 1, 0, // Top vertex
    -1, -1, 0, // Bottom-left vertex
    1, -1, 0, // Bottom-right vertex
  ]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']} // Alternative syntax
          array={vertices}
          count={3} // Total vertices (divide by 3 as it's x, y, z per vertex)
          itemSize={3} // Size of each vertex data (x, y, z)
        />
      </bufferGeometry>
      <meshBasicMaterial color="orange" side={2} />
    </mesh>
  );
};


export default Triangle;
