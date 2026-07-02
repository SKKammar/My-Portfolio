export function Rule({
                       className = '',
                     }: {
  className?: string;
}) {
  return (
      <div
          className={`
        relative
        h-px
        w-full
        overflow-hidden
        ${className}
      `}
      >
        <div className="absolute inset-0 bg-white/[0.08]" />

        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
  );
}