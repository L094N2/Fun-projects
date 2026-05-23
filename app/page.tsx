'use client';

import dynamic from 'next/dynamic';
import type { CSSProperties } from 'react';

export const dynamic = 'force-dynamic';

export const revalidate = 0;

const GameCanvas = dynamic(
  () => import('./SceneComponent'),
  {
    ssr: false,
    loading: () => <div style={loadingStyle}>Loading 3D Heist...</div>,
  }
);

const loadingStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: '#0b0f19',
  color: 'white',
  fontFamily: 'Arial, sans-serif',
  fontSize: '1rem',
};

export default function Page() {
  return <GameCanvas />;
}
