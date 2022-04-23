import React, { useState } from "react";
import { useSpring, a } from "@react-spring/three";

function Cube(props) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  function onClick() {
    setActive(!active);
  }
  const { scale, color } = useSpring({
    scale: !active ? [1, 1, 1] : [2, 2, 2],
    color: hover ? "teal" : props.color,
  });

  return (
    <a.mesh
      {...props}
      onClick={onClick}
      scale={scale}
      onPointerOver={() => setHover(!hover)}
      onPointerOut={() => setHover(!hover)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial attach="material" color={color} />
    </a.mesh>
  );
}

export default Cube;
