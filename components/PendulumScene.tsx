'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function Pendulum() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    // Simple harmonic swing — amplitude in radians, period in seconds
    const t = clock.getElapsedTime();
    group.current.rotation.z = Math.sin(t * 1.2) * 0.35;
  });

  return (
    <group ref={group} position={[0, 1.5, 0]}>
      <Line points={[[0, 0, 0], [0, -2, 0]]} color="#3a3a3a" lineWidth={1} />
      <mesh position={[0, -2, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#f0ede6" roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
}

export function PendulumScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={0.8} />
        <Pendulum />
      </Canvas>
    </div>
  );
}
