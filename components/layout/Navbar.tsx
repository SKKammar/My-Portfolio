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
        const onScroll = () => setScrolled(window.scrollY > 30);

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((entry) => entry.isIntersecting);

                if (visible) {
                    setActive(visible.target.id);
                }
            },
            {
                threshold: 0.4,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'backdrop-blur-xl bg-ink/75 border-b border-white/10'
                    : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
                <a
                    href="#"
                    className="font-display text-lg italic text-paper transition-opacity hover:opacity-80"
                >
                    Santosh K Kammar
                </a>

                <div className="hidden items-center gap-10 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`relative text-xs uppercase tracking-[0.18em] transition-colors ${
                                active === link.id
                                    ? 'text-paper'
                                    : 'text-ash hover:text-paper'
                            }`}
                        >
                            {link.label}

                            <span
                                className={`absolute -bottom-2 left-0 h-px bg-paper transition-all duration-300 ${
                                    active === link.id ? 'w-full' : 'w-0'
                                }`}
                            />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}