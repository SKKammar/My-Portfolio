import { ReactNode } from 'react';

export function Tag({
                      children,
                    }: {
  children: ReactNode;
}) {
  return (
      <span
          className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/[0.04]
        px-3
        py-1.5
        text-[11px]
        font-medium
        tracking-wide
        text-fog
        backdrop-blur-sm
        transition-all
        duration-100 ease-out
        hover:border-white/20
        hover:bg-white/[0.08]
        hover:text-paper
      "
      >
      {children}
    </span>
  );
}