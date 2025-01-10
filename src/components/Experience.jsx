import { useRef } from "react";
import * as THREE from "three";
import BillboardName from "./BillboardName";
import toast from "react-hot-toast";
import { Billboard, Text } from "@react-three/drei";
import { useGlobal } from "./hooks";

function Experience({ sideA, sideB }) {
  const groupRef = useRef(null);

  const hypotenuse = Math.sqrt(sideA ** 2 + sideB ** 2);

  const angle = Math.atan2(sideA, sideB);

  const sideLength = hypotenuse;

  const positionTopRightA = new THREE.Vector3(0, sideA, 0);

  const {activeAudio, setActiveAudio,playAudio, setPlayAudio } = useGlobal()

  const createCubeMaterial = (baseColor, highlightedFaceIndex) => {
    const colors = Array(6).fill(new THREE.Color(baseColor));
    colors[highlightedFaceIndex] = new THREE.Color(0xffffff);
    return colors.map(
      (color) =>
        new THREE.MeshStandardMaterial({
          color,
          metalness: 0.2,
          roughness: 0.5,
        })
    );
  };

  const cubeAMaterials = createCubeMaterial("#3b82f6", 0);
  const cubeBMaterials = createCubeMaterial("#10b981", 2);
  const cubeCMaterials = createCubeMaterial("#ff7114", 3);

  function handleHover(e, side) {
    e.stopPropagation();
    // toast.success(`Hovered on ${side}`);
    if(side === 'a') setActiveAudio('altitude.mp3')
    if(side === 'b') setActiveAudio('base.mp3')
    if(side === 'c') setActiveAudio('hypotenuse.mp3')
    setPlayAudio(true)
  }

  return (
    <group ref={groupRef} position={[0, 0, 0]}>

      <gridHelper args={[20, 20, "#444", "#666"]} />

      {/* Cube A */}
      <group position={[-sideA / 2, sideA / 2, 0]}>
        <BillboardName name={"a"} />
        <mesh
          onPointerEnter={(e) => handleHover(e, "a")}
          geometry={new THREE.BoxGeometry(sideA, sideA, 1.5)}
          material={cubeAMaterials}
        />
      </group>

      {/* Cube B */}
      <group  position={[sideB / 2, -sideB / 2, 0]}>
        <Billboard follow={true} position={[0,-sideB , 0]}>
          <Text fontSize={1}>
            {"b"}
            <meshStandardMaterial color="red" />
          </Text>
        </Billboard>
        <mesh
          onPointerEnter={(e) => handleHover(e, "b")}
          geometry={new THREE.BoxGeometry(sideB, sideB, 1.5)}
          material={cubeBMaterials}
        />
      </group>

      {/* Cube C */}
      <group
        onPointerEnter={(e) => handleHover(e, "c")}
        position={[
          positionTopRightA.x,
          positionTopRightA.y,
          positionTopRightA.z,
        ]}
        rotation={[0, 0, -angle]}
      >
        <Billboard follow={true} position={[sideA , sideB+2, 0]}>
          <Text fontSize={1}>
            {"c"}
            <meshStandardMaterial color="red" />
          </Text>
        </Billboard>
        <mesh
          position={[sideLength / 2, sideLength / 2, 0]}
          geometry={new THREE.BoxGeometry(sideLength, sideLength, 1.5)}
          material={cubeCMaterials}
        />
      </group>
    </group>
  );
}

export default Experience;
