'use client'

import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export const dynamic = 'force-dynamic'

function Scene() {
  const buildings = Array.from({ length: 16 }, (_, i) => (x
    x: (i % 4) * 4 - 6,
    z: Math.floor(i / 4) * 4 - 6,
    h: (i % 4) + 2,
  }))

  return (
    <Canvas camera={{ position: [12, 12, 12], fov: 60 }}>
      <color attach="background" args={["#0b0f19"]} />
      <ambientLight intensity={1.2} />
      <directionalLight position={[10, 20, 10]} intensity={2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#16213d" />
      </mesh>

       {buildings.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, b.z]}>
          <boxGeometry args={[2, b.h, 2]} />
          <meshStandardMaterial color="slategray" />
        </mesh>
      ))}

      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      <OrbitControls />
    </Canvas>
  )
}

const Game = dynamic(() => Promise.resolve(Scene), { ssr: false })

export default function Page() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', zIndex: 10, color: 'white', padding: '1rem', fontFamily: 'Arial' }}>
        <h1>Low Poly Heist</h1>
        <p>3D coo-op heist prototype</p>
      </div>
      <Game />
    </div>
  )
}
