import React from "react";
import { useBox } from "@react-three/cannon";

function PCube(props) {
  const [ref] = useBox(() => ({
    mass: 1,
    ...props,
  }));

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="tomato" />
    </mesh>
  );
}

export default PCube;
