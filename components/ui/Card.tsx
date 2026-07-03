'use client';

import { ReactNode, MouseEvent, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function Card({
    children,
    className = '',
    onClick,
}: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // For 3D Tilt
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    
    const rotateX = useTransform(ySpring, [0, 1], [5, -5]);
    const rotateY = useTransform(xSpring, [0, 1], [-5, 5]);

    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const localX = clientX - left;
        const localY = clientY - top;
        
        mouseX.set(localX);
        mouseY.set(localY);
        
        x.set(localX / width);
        y.set(localY / height);
    }

    function handleMouseLeave() {
        setIsHovered(false);
        x.set(0.5);
        y.set(0.5);
    }

    return (
        <motion.div
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformPerspective: 1000,
            }}
            className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-black/40
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-white/20
                hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
                ${onClick ? 'cursor-pointer' : ''}
                ${className}
            `}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            800px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.08),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
}