import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Github } from '@/components/sections/GitHub';
import { Contact } from '@/components/sections/Contact';

export default function Page() {
  return (
      <>
        <Navbar />

        <main className="overflow-x-hidden">

          <Hero />

          <About />

          <Projects />

          <Skills />

          <Github />

          <Contact />

        </main>

        <Footer />
      </>
  );
}