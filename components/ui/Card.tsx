export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
      <div
          className={`bg-ink-card border border-ink-border transition-all duration-300 hover:border-ash hover:-translate-y-1 hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)] ${className}`}
      >
        {children}
      </div>
  );
}