import React, { useMemo, useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { StarfieldCanvas } from "./StarfieldElements";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { map, random } from "lodash";
import sp1 from "../../assests/images/sp1.png";

const Stars = () => {
  const mesh = useRef();
  const [isActive, setIsActive] = useState(false);

  const isActiveRef = useRef(isActive);

  const position = useMemo(() => {
    return [
      random(-3.5, 3.5, true),
      random(-3.5, 3.5, true),
      random(-3.5, 3.5, true),
    ];
  }, []);

  const colors = ["#18A2D9", "#FFF"];

  const color = isActive
    ? "#f4442c"
    : colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  const texture = useLoader(THREE.TextureLoader, sp1);
  return (
    <mesh ref={mesh} position={position}>
      <planeBufferGeometry attach="geometry" args={[0.01, 0.01]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        color={color}
        transparent={true}
      />
    </mesh>
  );
};

const Cubes = () => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.0001;
  });

  const nodesCubes = map(new Array(5000), (el, i) => {
    return <Stars key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};

const Starfield = () => {
  return (
    <StarfieldCanvas>
      <Canvas camera={{ position: [0, 0, 0.5], near: 0.01, far: 10000 }}>
        <color attach="background" args={["black"]} />
        <Suspense fallback={null}>
          <Cubes />
        </Suspense>
      </Canvas>
    </StarfieldCanvas>
  );
};

export default Starfield;
