'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

import * as THREE from 'three';

function Starfield() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export function SpaceBackground() {


  return (
    <div className="fixed inset-0 z-0 bg-transparent pointer-events-none">
      <Suspense 
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-transparent text-sm uppercase tracking-widest text-neutral-500">
            Initializing Space...
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
        </Canvas>
      </Suspense>
    </div>
  );
}
