import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./Cube";
import PCube from "./PCube";
import Spin from "./Spin";
import { Physics } from "@react-three/cannon";
import Plane from "./Plane";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 15]} />
        <Cube position={[2, 0, 0]} color="red" />
        <Spin>
          <Cube position={[0, 0, 0]} color="dodgerblue" />
        </Spin>
        <Cube position={[-2, 0, 0]} color="yellowgreen" />
        <Physics>
          <PCube position={[-1, 3, 0]} rotation={[2, 3, 0]}></PCube>
          <PCube position={[0, 5, 0]} rotation={[0, 4, 1]}></PCube>
          <PCube position={[1, 8, 0]} rotation={[1, 0, 3]}></PCube>
          <Plane position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}></Plane>
        </Physics>
        <OrbitControls />
      </Canvas>
    </Container>
  );
}

export default App;
