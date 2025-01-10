import { Billboard, Text } from "@react-three/drei";
import React from "react";
import { useGlobal } from "./hooks";

const BillboardName = ({ name }) => {

  const {sideA, sideB} = useGlobal()

  return (
    <Billboard follow={true} position={[-sideA, 0, 0]}>
      <Text fontSize={1}>
        {name}
        <meshStandardMaterial color="red" />
      </Text>
    </Billboard>
  );
};

export default BillboardName;
