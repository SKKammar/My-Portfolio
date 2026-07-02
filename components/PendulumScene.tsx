'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

function Pendulum() {
    const group = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!group.current) return;

        const t = clock.getElapsedTime();

        group.current.rotation.z = Math.sin(t * 0.9) * 0.32;
    });

    return (
        <group ref={group} position={[0, 1.8, 0]}>

            <Line
                points={[
                    [0, 0, 0],
                    [0, -2.5, 0],
                ]}
                color="#8A8A8A"
                lineWidth={1}
            />

            <mesh position={[0, -2.5, 0]}>
                <sphereGeometry args={[0.22, 64, 64]} />

                <meshPhysicalMaterial
                    color="#EAEAEA"
                    roughness={0.15}
                    metalness={0.65}
                    clearcoat={1}
                />
            </mesh>

        </group>
    );
}

export function PendulumScene() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">

            <Canvas
                camera={{
                    position: [0, 0, 6],
                    fov: 40,
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>

                    <ambientLight intensity={0.7} />

                    <directionalLight
                        position={[3, 5, 2]}
                        intensity={1.2}
                    />

                    <Float
                        speed={1}
                        rotationIntensity={0}
                        floatIntensity={0.15}
                    >
                        <Pendulum />
                    </Float>

                    <Environment preset="studio" />

                </Suspense>
            </Canvas>

        </div>
    );
}