'use client';

import { ReactNode, MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export function Card({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
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
                hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
                ${className}
            `}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.06),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}