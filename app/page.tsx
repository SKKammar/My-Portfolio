import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { GithubSection } from '@/components/sections/GitHub';
import { Contact } from '@/components/sections/Contact';
import { SpaceBackground } from '@/components/SpaceBackground';

export default function Page() {
  return (
      <>
        <SpaceBackground />
        
        <div className="relative z-10">
          <Navbar />

          <main className="overflow-x-hidden">

            <Hero />

            <About />

            <Projects />

            <Skills />

            <GithubSection />

            <Contact />

          </main>

          <Footer />
        </div>
      </>
  );
}