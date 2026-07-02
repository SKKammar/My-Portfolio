export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-xs text-ash border border-ink-border px-2 py-1 inline-block">
      {children}
    </span>
  );
}
