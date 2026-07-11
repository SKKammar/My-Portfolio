'use client';

import { ArrowRight, Download } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants: Variants = {
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
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 md:px-12">

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
                    <motion.div variants={itemVariants} className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-sm border border-white/20 bg-black/50 backdrop-blur-md w-fit mb-2 font-mono">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-xs font-bold tracking-widest text-white uppercase">Site is active</span>
                        </div>
                        <h1 id="hero-name" className="font-display tracking-tighter text-white leading-[1.1] font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-2">
                            Hi, this is <br className="hidden md:block" />
                            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500">Santosh</span> Here.
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="mt-10 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                            Building scalable backend systems, modern web applications, and
                            Artificial Intelligence-powered solutions using Spring Boot, Next.js, TypeScript and Java.
                            I enjoy transforming complex ideas into clean, production-ready
                            software.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/SKKammar/My-Portfolio/raw/master/public/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all duration-100 ease-out hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Resume
                            </a>

                            <a
                                href="#projects"
                                className="group inline-flex items-center rounded-xl border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-100 ease-out hover:-translate-y-1 hover:bg-white/5 hover:shadow-lg"
                            >
                                View Projects
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-100 ease-out group-hover:translate-x-1" />
                            </a>
                        </div>
                    </motion.div>


                </motion.div>
            </motion.div>

        </section>
    );
}