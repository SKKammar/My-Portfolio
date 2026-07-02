import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { GitHub } from '@/components/sections/GitHub';
import { Contact } from '@/components/sections/Contact';
import { PendulumSceneClient } from '@/components/PendulumSceneClient';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="relative">
                <PendulumSceneClient />
                <Hero />
                <About />
                <Projects />
                <Skills />
                <GitHub />
                <Contact />
            </main>
            <Footer />
        </>
    );
}