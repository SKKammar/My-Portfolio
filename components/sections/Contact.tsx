import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24">
      <FadeIn>
        <SectionHeading>Contact</SectionHeading>
        <p className="font-display font-light text-3xl md:text-5xl text-paper max-w-xl leading-tight">
          Open to software engineering roles —{' '}
          <a href="mailto:hello@example.com" className="italic underline underline-offset-4">
            let's talk
          </a>
          .
        </p>
      </FadeIn>
    </section>
  );
}
