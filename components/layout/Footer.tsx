import { Github, Linkedin, Mail } from 'lucide-react';

import { Rule } from '@/components/ui/Rule';
import { AdminTrigger } from '@/components/AdminTrigger';

export function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-6 py-10 md:px-12">

            <Rule className="mb-10" />

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div className="space-y-2">

                    <AdminTrigger />

                    <p className="text-sm leading-7 text-ash">
                        Designed & Developed by
                        <span className="ml-2 text-paper">
              Santosh K Kammar
            </span>
                    </p>

                    <p className="text-xs uppercase tracking-[0.2em] text-fog">
                        Next.js • TypeScript • Tailwind CSS • Supabase
                    </p>

                </div>

                <div className="flex items-center gap-5">

                    <a
                        href="https://github.com/SKKammar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-ink-border p-3 text-ash transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-paper"
                    >
                        <Github size={18} />
                    </a>

                    <a
                        href="LINKEDIN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-ink-border p-3 text-ash transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-paper"
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="mailto:santoshkkammar16@gmail.com"
                        className="rounded-full border border-ink-border p-3 text-ash transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-paper"
                    >
                        <Mail size={18} />
                    </a>

                </div>

            </div>

        </footer>
    );
}