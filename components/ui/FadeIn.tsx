'use client';

import { motion } from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
};

export function FadeIn({
    children,
    className = '',
    delay = 0,
    y = 24,
}: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1], // ease-out-expo
                delay: delay / 1000,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}