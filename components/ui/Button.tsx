import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
};

const variants = {
  primary:
      'bg-paper text-ink hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10',

  secondary:
      'border border-ink-border bg-white/5 text-paper backdrop-blur hover:border-white/20 hover:-translate-y-1',

  ghost:
      'text-paper hover:bg-white/5',
};

export function Button({
                         children,
                         href,
                         onClick,
                         type = 'button',
                         disabled = false,
                         variant = 'primary',
                         className = '',
                         target,
                         rel,
                       }: ButtonProps) {
  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-6
    py-3
    text-sm
    font-medium
    transition-all
    duration-300
    disabled:pointer-events-none
    disabled:opacity-50
    ${variants[variant]}
    ${className}
  `;

  if (href) {
    const external =
        href.startsWith('http') || href.startsWith('mailto');

    if (external) {
      return (
          <a
              href={href}
              target={target}
              rel={rel}
              className={classes}
          >
            {children}
          </a>
      );
    }

    return (
        <Link href={href} className={classes}>
          {children}
        </Link>
    );
  }

  return (
      <button
          type={type}
          disabled={disabled}
          onClick={onClick}
          className={classes}
      >
        {children}
      </button>
  );
}