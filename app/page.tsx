'use client'

export const dynamic = 'force-dynamic'

import nextDynamic from 'next/dynamic'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Text } from '@react-three/drei'

function GameScene() {
  return (
    <Canvas shadows camera={{ position: [0, 8, 12], fov: 60 }}>
      <color attach="background" args={['#0a0a0a']} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 20, 10]} intensity={2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#223322" />
      </mesh>

      <Box args={[4, 4, 4]} position={[0, 2, -8]}>
        <meshStandardMaterial color="#4a5568" />
      </Box>

      <Box args={[1, 1, 1]} position={[0, 1, -4]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>

      <Text position={[0, 6, -8]} fontSize={1} color="white">
        LOW POLY HEIST
      </Text>

      <OrbitControls />
    </Canvas>
  )
}

const DynamicGameScene = nextDynamic(
  () => Promise.resolve(GameScene),
  { ssr: false }
)

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
        <p>Co-Op Multiplayer Prototype</p>
      </div>

      <DynamicGameScene />
    </div>
  )
}
