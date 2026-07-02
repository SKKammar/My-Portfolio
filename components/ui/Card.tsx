import { ReactNode } from 'react';

export function Card({
                         children,
                         className = '',
                     }: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-ink-border
        bg-ink-card/70
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/15
        hover:shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)]
        ${className}
      `}
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}