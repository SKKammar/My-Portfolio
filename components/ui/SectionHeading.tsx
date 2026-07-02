export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs text-fog uppercase tracking-[0.2em] mb-4">
      {children}
    </p>
  );
}
