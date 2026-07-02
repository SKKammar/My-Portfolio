import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 max-w-3xl">
      <FadeIn>
        <SectionHeading>About</SectionHeading>
        <p className="font-display text-lg md:text-2xl leading-relaxed text-paper">
          I'm a final-year Computer Science engineering student focused on building
          systems that actually work end to end — not just demos. My recent work spans
          Spring Boot backends, ML-driven risk models, and full-stack platforms with real
          authentication and deployment concerns baked in from day one.
        </p>
      </FadeIn>
      <Rule className="mt-16" />
    </section>
  );
}
