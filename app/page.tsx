'use client'

import { useEffect, useMemo, useState } from 'react'

export const dynamic = 'force-dynamic'

const MAP_SIZE = 20
const LOOT_TARGET = 5

export default function Home() {
  const startPos = useMemo(() => ({ x: 2, y: 2 }), [])
  const [player, setPlayer] = useState(startPos)
  const [loot, setLoot] = useState(0)
  const [message, setMessage] = useState('Steal the gold and escape the police')
  const [alert, setAlert] = useState(false)

  const bank = { x: 16, y: 4 }
  const van = { x: 18, y: 17 }

  const lootCrates = useMemo(
    () => [
      { x: 14, y: 5 },
      { x: 15, y: 6 },
      { x: 16, y: 7 },
      { x: 13, y: 7 },
      { x: 17, y: 5 },
    ],
    []
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      let dx = 0
      let dy = 0

      if (e.key === 'w' || e.key === 'ArrowUp') dy = -1
      if (e.key === 's' || e.key === 'ArrowDown') dy = 1
      if (e.key === 'a' || e.key === 'ArrowLeft') dx = -1
      if (e.key === 'd' || e.key === 'ArrowRight') dx = 1

      move(dx, dy)
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [player, loot, alert])

  const move = (dx: number, dy: number) => {
    setPlayer((p) => {
      const nx = Math.max(0, Math.min(MAP_SIZE - 1, p.x + dx))
      const ny = Math.max(0, Math.min(MAP_SIZE - 1, p.y + dy))

      if (Math.abs(nx - bank.x) < 2 && Math.abs(ny - bank.y) < 2) {
        setAlert(true)
        setMessage('Police alerted! Grab the loot!')
      }

      lootCrates.forEach((crate) => {
        if (crate.x === nx && crate.y === ny) {
          setLoot((l) => Math.min(LOOT_TARGET, l + 1))
        }
      })

      if (nx === van.x && ny === van.y && loot >= LOOT_TARGET) {
        setMessage('HEIST COMPLETE - YOU ESCAPED!')
      }

      return { x: nx, y: ny }
    })
  }

  const cells = []

  for (let y = 0; y < MAP_SIZE;y++) {
    for (let x = 0; x < MAP_SIZE; x++) {
      let bg = '#1a1a1a'

      if (x === bank.x && y === bank.y) bg = '#2563eb'
      if (x === van.x && y === van.y) bg = '#16a34a'

      lootCrates.forEach((crate) => {
        if (crate.x === x && crate.y === y) bg = '#f59e0b'
      })

      if (player.x === x && player.y === y) {
        bg = alert ? '#ef4444' : '#ffffff'
      }

      cells.push(
        <div
          key={`${x}-${y}`}
          style={{
            width: '100%',
            height: '100%',
            background: bg,
            border: '1px solid #2a2a2a',
            borderRadius: 6,
          }}
        />
      )
    }
  }

  const controls = [
    [
      { label: '▱', x: 0, y: -1 },
    ],
    [
      { label: '◀', x: -1, y: 0 },
      { label: '▾', x: 1, y: 0 },
    ],
    [
      { label: '➹', x: 0, y: 1 },
    ],
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0f172a',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '1rem',
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <h1 style={{ margin: 0, fontSize: '3rem' }}>Low Poly Heist</h1>
        <p>Move with WASD or the mobile controls.0Steal gold and escape to the van.</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(20, 1fr)',
              width: '600px',
              maxWidth: '90vw',
              aspectRatio: '1/1',
              gap: 4,
            }}
          >
            {cells}
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {controls.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                {row.map((b) => (
                  <buton
                    key={b.label}
                    onClick={() => move(b.x, b.y)}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 12,
                      border: 'none',
                      background: '#1e93b1',
                      color: 'white',
                      fontSize: '1rem',
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            ))
          </div>
        </div>

        <div
          style={{
            background: '#111827',
            padding: '1.5rem',
            borderRadius: 16,
            minWidth: 300,
          }}
        >
          <h2>Mission</h2>
          <p>{message}</p>

          <p ><strong>Loot:</strong> {loot} / {LOOT_TARGET}</p>
          <p><strong>Alert:</strong> {alert ? 'POLICE ACTIVE' : 'UNDETECTED'}</p>

          <ul style={{ lineHeight: 1.8 }}>
            <li>矗底店店店店</li>
            <li>💥 Blue = Bank</li>
            <li>📶 Gold = Loot</li>
            <li>🟕 Car = Exit Van</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
