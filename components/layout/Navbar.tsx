'use client';

import { useEffect, useState } from 'react';

const links = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );

        sections.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
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
                    <a>

                    key={link.href}
                    href={link.href}
                    className={`relative font-sans text-xs uppercase tracking-[0.15em] transition pb-1 ${
                    active === link.id ? 'text-paper' : 'text-ash hover:text-paper'
                }`}
                    >
                {link.label}
                    <span
                    className="absolute left-0 -bottom-0.5 h-px bg-paper transition-all duration-300"
                    style={{ width: active === link.id ? '100%' : '0%' }}
                    />
                </a>
                ))}
            </div>
        </nav>
);
}