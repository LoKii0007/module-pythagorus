import React from 'react';
import * as THREE from 'three';
import Triangle from './Triangle';

const Question = () => {
    const vertices = [
        new THREE.Vector3(0, 2, 0),
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(2, 0, 0)
      ];

      console.log(vertices);

  return (
    <>
      <group position={[0, 0, 0]}>
        {/* <Triangle /> */}
      </group>
    </>
  );
};

export default Question;
