'use client';
import dynamic from 'next/dynamic';

const PendulumScene = dynamic(
    () => import('@/components/PendulumScene').then((mod) => mod.PendulumScene),
    { ssr: false }
);

export { PendulumScene as PendulumSceneClient };