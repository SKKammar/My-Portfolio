'use client';

import { ArrowRight, Download } from 'lucide-react';
import { PendulumSceneClient } from '@/components/PendulumSceneClient';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-1/2 top-32 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-paper/5 blur-[180px]" />

                <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[180px]" />

            </div>

            {/* 3D pendulum/clock scene — was built but never rendered before */}
            <PendulumSceneClient />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">

        <span className="mb-8 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-fog backdrop-blur-xl">
          Computer Science Student • Full Stack Developer
        </span>

                <h1 className="font-display text-paper leading-[0.9] font-light text-[16vw] md:text-[8rem] lg:text-[9rem]">
                    Santosh
                    <br />
                    <span className="italic">Kammar</span>
                </h1>

                <p className="mt-10 max-w-2xl text-base leading-8 text-ash md:text-lg">
                    Building scalable backend systems, modern web applications, and
                    AI-powered solutions using Spring Boot, Next.js, TypeScript and Java.
                    I enjoy transforming complex ideas into clean, production-ready
                    software.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">

                    <a
                        href="#projects"
                        className="group inline-flex items-center rounded-xl bg-paper px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        View Projects

                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-paper backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                    </a>

                </div>

                <div className="mt-20 flex items-center gap-12">

                    <div>
                        <p className="text-3xl font-display text-paper">10+</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-fog">
                            Projects
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-display text-paper">3+</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-fog">
                            Years Learning
                        </p>
                    </div>

                    <div>
                        <p className="text-3xl font-display text-paper">∞</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-fog">
                            Curiosity
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}