'use client';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 transition-colors duration-500 ${
        scrolled ? 'bg-ink/90 border-b border-ink-border backdrop-blur' : 'bg-transparent'
      }`}
    >
      <a href="#" className="font-display italic text-lg text-paper">
        Santosh K Kammar
      </a>
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans text-xs uppercase tracking-[0.15em] text-ash hover:text-paper transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
