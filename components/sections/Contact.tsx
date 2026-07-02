import { Github, Linkedin, Mail } from 'lucide-react';

import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function Contact() {
  return (
      <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-28 md:px-12"
      >
        <FadeIn>
          <SectionHeading>Contact</SectionHeading>

          <div className="mt-10 max-w-3xl">

            <h2 className="font-display text-4xl leading-tight text-paper md:text-6xl">
              Let's build something meaningful together.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-ash">
              I'm currently looking for software engineering opportunities,
              internships, and exciting projects where I can contribute while
              continuing to grow as an engineer.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <Button
                  href="mailto:santoshkkammar16@gmail.com"
                  variant="primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>

              <Button
                  href="https://github.com/SKKammar"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              <Button
                  href="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>

            </div>

          </div>
        </FadeIn>
      </section>
  );
}