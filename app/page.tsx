export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        padding: '24r',
      }}
    >
      <h1 style={{ fontSize: '4r ',  marginBottom: '1rem' }}>
        Low Poly Heist
      </h1>

      <p
        style={{
          maxWidth: '600px',
          opacity: 0.8,
          lineHeight: 1.6,
          fontSize: '1.2rem',
        }}
      >
        Co-op multiplayer low-poly heist game for desktop and mobile.
        Three.js game systems are currently being stabilized for
        production deployments.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <button
          style={{
            padding: '1rem 2rem',
            borderRadius: '12px',
            border: 'none',
            background: '#22c55e',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Game Coming Soon
        </button>
      </div>
    </main>
  )
}
