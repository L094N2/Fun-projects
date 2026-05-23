'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Text } from '@react-three/drei'

function Building({ position, width, height, depth, color }: any) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function LootBag({ position }: any) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color="#f59e0b" />
    </mesh>
  )
}

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      <div
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 10,
          color: 'white',
          fontFamily: 'Arial',
        }}
      >
        <h1>Low Poly Heist</h1>
        <p>Multiplayer V1 Prototype</p>
        <p>Mobile + Desktop Ready</p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          zIndex: 10,
          display: 'flex',
          gap: 12,
        }}
      >
        <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
        <div style={{ width: 70, height: 70, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
      </div>

      <Canvas shadows camera={{ position: [0, 8, 12], fov: 60 }}>
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 10, 50]} />

        <ambientLight intensity={1.2} />
        <directionalLight
          position={[10, 20, 10]}
          intensity={2.5}
          castShadow
        />

        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#223322" />
        </mesh>

        <Building position={[0, 3, -10]} width={8} height={6} depth={8} color="#4a5568" />
        <Building position={[8, 2, -5]} width={4} height={4} depth={4} color="#374151" />
        <Building position={[-8, 4, -5]} width={6} height={8} depth={6} color="#556977" />

        <LootBag position={[0, 1, -9]} />
        <LootBag position={[2, 1, -11]} />

        <Text
          position={[0, 8, -10]}
          fontSize={1.2}
          color="#ffffff"
        >
          HEIST ZONE
        </Text>

        <OrbitControls />
      </Canvas>
    </div>
  )
}
