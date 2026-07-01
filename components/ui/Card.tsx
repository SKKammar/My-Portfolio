export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-ink-card border border-ink-border ${className}`}>
            {children}
        </div>
    );
}