'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const dynamic = 'force-dynamic';

function Box(props) {
  return (
    <mesh position={props.position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="slategray" />
    </mesh>
  );
}

export default function Page() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#0b0f19" }}>
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Low Poly Heist</h1>
        <p>3D heist prototype</p>
      </div>

      <Canvas camera={{ position: [10, 10, 10], fov: 60 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} />

        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#16213d" />
        </mesh>

        <Box position={[0, 1, 0]} />
        <Box position={[4, 1, -4]} />
        <Box position={[-4, 1, 4]} />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
