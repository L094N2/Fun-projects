'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

export default function Home() {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#2f855a" />
      </mesh>

      <Box args={[2, 2, 2]} position={[0, 1, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>

      <OrbitControls />
    </Canvas>
  )
}
