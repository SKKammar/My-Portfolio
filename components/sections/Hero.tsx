'use client';

import { ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatCard } from '@/components/ui/StatCard';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12">

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-1/2 top-32 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />

                <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[180px]" />

            </div>

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col pt-24">


                <motion.div 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="font-display tracking-tighter text-white leading-[0.9] font-light text-[16vw] md:text-[8rem] lg:text-[9rem]">
                        Santosh
                        <br />
                        <span className="italic">Kammar</span>
                    </h1>

                    <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                        Building scalable backend systems, modern web applications, and
                        AI-powered solutions using Spring Boot, Next.js, TypeScript and Java.
                        I enjoy transforming complex ideas into clean, production-ready
                        software.
                    </p>
                </motion.div>

                <div className="mt-12 flex flex-wrap gap-4">

                    <a
                        href="#projects"
                        className="group inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                    >
                        View Projects

                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        <Download className="mr-2 h-4 w-4" />
                        Resume
                    </a>

                </div>

                <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <StatCard 
                        value="1.00 AUROC" 
                        label="InspectAI" 
                        sublabel="defect detection" 
                    />
                    <StatCard 
                        value="126 req/s" 
                        label="0% errors" 
                        sublabel="Inventory API" 
                    />
                    <StatCard 
                        value="97/100" 
                        label="Titanic ML" 
                        sublabel="rubric" 
                    />
                    <StatCard 
                        value="9K+" 
                        label="Requests" 
                        sublabel="Load tested" 
                    />
                </div>

            </div>

        </section>
    );
}