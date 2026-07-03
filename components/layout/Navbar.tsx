'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#contact', label: 'Contact', id: 'contact' },
];

export function Navbar() {
    const [active, setActive] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [nameVisible, setNameVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const heroName = document.getElementById('hero-name');
        if (!heroName) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setNameVisible(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(heroName);
        return () => observer.disconnect();
    }, []);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

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
                    ? 'backdrop-blur-xl bg-black/80 border-b border-white/10'
                    : 'bg-transparent'
            }`}
        >
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
                <a
                    href="#"
                    className={`font-display text-lg italic text-paper transition-all duration-500 hover:opacity-80 ${nameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
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

                <button
                    type="button"
                    onClick={() => setMobileOpen((open) => !open)}
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                    className="p-2 text-paper md:hidden"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {mobileOpen && (
                <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-1 px-6 py-6">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`py-3 text-sm uppercase tracking-[0.18em] transition-colors ${
                                    active === link.id
                                        ? 'text-paper'
                                        : 'text-ash hover:text-paper'
                                }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}