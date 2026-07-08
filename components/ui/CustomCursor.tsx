'use client';

import { useEffect, useRef, useState } from 'react';

type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
};

export function CustomCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particles: Particle[] = [];
        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resize);
        resize();

        const emitParticles = (x: number, y: number) => {
            // Emit very few particles for subtlety
            const count = Math.random() > 0.5 ? 1 : 2;
            for (let i = 0; i < count; i++) {
                particles.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1 + 0.2, // slight downward drift
                    life: 0,
                    maxLife: Math.random() * 40 + 20, // 20-60 frames
                    size: Math.random() * 1.5 + 0.5 // 0.5 - 2px
                });
            }
        };

        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            emitParticles(e.clientX, e.clientY);
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life++;

                if (p.life >= p.maxLife) {
                    particles.splice(i, 1);
                    continue;
                }

                const progress = p.life / p.maxLife;
                const alpha = (1 - progress) * 0.3; // Very subtle opacity

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', moveCursor);
        render();

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-50 hidden md:block"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}
        />
    );
}
