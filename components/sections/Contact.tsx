import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { ContactForm } from './ContactForm';

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

            <div className="mt-8 flex flex-col md:flex-row gap-6 items-start md:items-center text-base leading-relaxed text-neutral-400">
                <p className="max-w-xl">
                  I&apos;m currently looking for software engineering opportunities,
                  internships, and exciting projects where I can contribute while
                  continuing to grow as an engineer.
                </p>
            </div>

            <ContactForm />

            <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap gap-4 items-center">
              <span className="text-sm text-neutral-500 mr-4">Or connect directly:</span>
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