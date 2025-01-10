import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import { activeContentTypes, useGlobal } from "./hooks";
import Question from "./Question";
import { Ladder3Model } from "../models/Ladder-2";
import StartTriangle from "../models/StartTriangle";
import IntroTriangle from "../models/IntroTriangle";

const Module = () => {
  const { sideA, sideB, activeContent, setActiveContent } = useGlobal();
  return (
    <>
      <div className="canvas">
        <Canvas
          camera={{ position: [10, 10, 10], fov: 50 }}
          className="h-full w-full"
        >
            {activeContent === activeContentTypes.activity && <Experience sideA={sideA} sideB={sideB} />}
            {activeContent === activeContentTypes.start && <StartTriangle />}
            {activeContent === activeContentTypes.introduction && <IntroTriangle />}
            {activeContent === activeContentTypes.question && <Question />}
            {activeContent === activeContentTypes.example && <Ladder3Model />}
          <ambientLight intensity={0.6} />
          <OrbitControls enableDamping dampingFactor={0.05} />
        </Canvas>
      </div>
    </>
  );
};

export default Module;
