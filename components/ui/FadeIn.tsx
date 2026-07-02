'use client';

import { useEffect, useRef, useState } from 'react';

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
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(node);
                }
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -10% 0px',
            }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible
                    ? 'translate3d(0,0,0)'
                    : `translate3d(0,${y}px,0)`,
                transition: `
          opacity 0.8s cubic-bezier(.16,1,.3,1) ${delay}ms,
          transform 0.8s cubic-bezier(.16,1,.3,1) ${delay}ms
        `,
                willChange: 'opacity, transform',
            }}
        >
            {children}
        </div>
    );
}