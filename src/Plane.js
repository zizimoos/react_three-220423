import React from "react";
import { usePlane } from "@react-three/cannon";

function Plane(props) {
  const [ref] = usePlane(() => ({
    mass: 0,
    ...props,
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color="brown" />
    </mesh>
  );
}

export default Plane;
