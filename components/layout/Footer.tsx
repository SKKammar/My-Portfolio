import { Mail } from 'lucide-react';
import Link from 'next/link';

import { Rule } from '@/components/ui/Rule';
import { AdminTrigger } from '@/components/AdminTrigger';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-6 py-10 md:px-12 relative">

            <Rule className="mb-10" />

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div className="space-y-2">

                    <AdminTrigger />

                    <p className="text-sm leading-7 text-neutral-400">
                        Designed & Developed by
                        <span className="ml-2 text-white font-medium">
                            Santosh K Kammar
                        </span>
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                        Next.js • TypeScript • Tailwind CSS • Supabase
                    </p>

                </div>

                <div className="flex items-center gap-5">

                    <a
                        href="https://github.com/SKKammar"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="rounded-full border border-white/10 p-3 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                    >
                        <GithubIcon size={18} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/santosh-k-kammar-skk162005?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="rounded-full border border-white/10 p-3 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                    >
                        <LinkedinIcon size={18} />
                    </a>

                    <a
                        href="mailto:santoshkkammar16@gmail.com"
                        aria-label="Email Me"
                        className="rounded-full border border-white/10 p-3 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:text-white"
                    >
                        <Mail size={18} />
                    </a>

                </div>

            </div>

            <Link 
                href="/admin" 
                className="absolute bottom-4 right-6 text-[10px] text-white/10 hover:text-white/30 transition-colors"
                aria-label="Admin Login"
            >
                Admin
            </Link>

        </footer>
    );
}