import { Mail } from 'lucide-react';

import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';

export function Contact() {
  return (
      <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
      >
        <FadeIn>
          <SectionHeading>Contact</SectionHeading>

          <div className="mt-10 max-w-3xl">

            <h2 className="font-display tracking-tight text-4xl leading-tight text-white md:text-6xl">
              Let&apos;s build something meaningful together.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400">
              I&apos;m currently looking for software engineering opportunities,
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
                <GithubIcon size={16} className="mr-2" />
                Github
              </Button>

              <Button
                  href="https://www.linkedin.com/in/santosh-k-kammar-skk162005?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
              >
                <LinkedinIcon size={16} className="mr-2" />
                LinkedIn
              </Button>

            </div>

          </div>
        </FadeIn>
      </section>
  );
}