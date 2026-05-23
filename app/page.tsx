'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export const dynamic = 'force-dynamic';

function Building(props: { position: [number, number, number]; height: number }) {
  return (
    <mesh position={props.position}>
      <boxGeometry args={[2, props.height, 2]} />
      <meshStandardMaterial color="slategray" />
    </mesh>
  );
}

export default function Page() {
  const buildings = Array.from({ length: 12 }, (_, i) => ({
    position: [
      (i % 4) * 4 - 6,
      ((i % 3) + 2) / 2,
      Math.floor(i / 4) * 4 - 6,
    ] as [number, number, number],
    height: (i % 3) + 2,
  }));

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0b0f19' }}>
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 10,
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1>Low Poly Heist</h1>
        <p>3D coo-op heist prototype</p>
      </div>

      <Canvas camera={{ position: [12, 12, 12], fov: 60 }}>
        <color attach="background" args={["#0b0f19"]} />
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 20, 10]} intensity={2} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial color="#16213d" />
        </mesh>

        {buildings.map((b, i)) => (
          <Building key={i} position={b.position} height={b.height} />
        ))}

        <OrbitControls />
      </Canvas>
    </div>
  );
}
