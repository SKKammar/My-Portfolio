'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

function Pendulum({ swingAngle }: { swingAngle: number }) {
    const pivotRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (pivotRef.current) {
            pivotRef.current.rotation.z = THREE.MathUtils.lerp(
                pivotRef.current.rotation.z,
                swingAngle,
                0.05
            );
        }
    });

    return (
        <group ref={pivotRef} position={[0, 2, 0]}>
            {/* Rod */}
            <mesh position={[0, -1.5, 0]}>
                <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
                <meshStandardMaterial
                    color="#C9A86A"
                    metalness={0.9}
                    roughness={0.1}
                />
            </mesh>

            {/* Bob */}
            <mesh position={[0, -3.2, 0]}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial
                    color="#C9A86A"
                    metalness={0.95}
                    roughness={0.05}
                />
            </mesh>
        </group>
    );
}

export default function PendulumScene({
                                          scrollProgress,
                                      }: {
    scrollProgress: number;
}) {
    const targetAngle = (scrollProgress - 0.5) * 1.2;

    return (
        <div className="fixed inset-0 -z-10 h-screen w-screen">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.2} />
                <pointLight
                    position={[5, 5, 5]}
                    intensity={1.5}
                    color="#fff8e7"
                />

                <Environment preset="night" />

                <Pendulum swingAngle={targetAngle} />
            </Canvas>
        </div>
    );
}