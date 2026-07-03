'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <motion.div style={{ y, scale: 1.2 }} className="fixed inset-0 z-0 bg-black">
      <Suspense 
        fallback={
          <div className="flex h-full w-full items-center justify-center bg-black text-sm uppercase tracking-widest text-neutral-500">
            Initializing Space...
          </div>
        }
      >
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}
