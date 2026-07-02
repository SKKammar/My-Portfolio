import { ReactNode } from 'react';

export function SectionHeading({
                                 children,
                               }: {
  children: ReactNode;
}) {
  return (
      <div className="mb-10">

      <span className="inline-flex items-center gap-3">

        <span className="h-px w-10 bg-white/15" />

        <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-fog">
          {children}
        </p>

      </span>

      </div>
  );
}