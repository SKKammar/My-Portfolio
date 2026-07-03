'use client';

import { ArrowRight, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StatCard } from '@/components/ui/StatCard';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
};

export function Hero() {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 800], [0, 200]);
    const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-12">

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-32 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />
                <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[180px]" />
            </div>

            <motion.div 
                style={{ y: yText, opacity: opacityText }}
                className="relative z-10 mx-auto flex w-full max-w-7xl flex-col pt-24"
            >
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={itemVariants}>
                        <h1 id="hero-name" className="font-display tracking-tighter text-white leading-[0.9] font-light text-6xl sm:text-7xl md:text-[8rem] lg:text-[9rem]">
                            Santosh
                            <br />
                            <span className="italic">Kammar</span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                            Building scalable backend systems, modern web applications, and
                            AI-powered solutions using Spring Boot, Next.js, TypeScript and Java.
                            I enjoy transforming complex ideas into clean, production-ready
                            software.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="flex flex-wrap gap-4">
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

                        <div className="mt-6 sm:mt-0 flex w-fit items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                            </span>
                            Open to Work
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <StatCard 
                        countEnd={100}
                        countDecimals={2}
                        countSuffix=" AUROC"
                        label="InspectAI" 
                        sublabel="defect detection" 
                    />
                    <StatCard 
                        countEnd={126}
                        countSuffix=" req/s"
                        label="0% errors" 
                        sublabel="Inventory API" 
                    />
                    <StatCard 
                        countEnd={97}
                        countSuffix="/100"
                        label="Titanic ML" 
                        sublabel="rubric" 
                    />
                    <StatCard 
                        countEnd={9}
                        countSuffix="K+"
                        label="Requests" 
                        sublabel="Load tested" 
                    />
                    </motion.div>
                </motion.div>
            </motion.div>

        </section>
    );
}