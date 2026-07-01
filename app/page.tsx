'use client';

import { useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

import Skills from "@/components/sections/Skills";
import GitHub from "@/components/sections/GitHub";
import Contact from "@/components/sections/Contact";

import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Footer from '../components/layout/Footer';

import PendulumScene from '@/components/PendulumScene';

export default function HomePage() {
    const { scrollYProgress } = useScroll();
    const [progress, setProgress] = useState(0);

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setProgress(v);
    });

    return (
        <>
            <main className="relative z-10 min-h-screen text-white">                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <GitHub />
                <Contact />
                <Footer />
            </main>
        </>
    );
}