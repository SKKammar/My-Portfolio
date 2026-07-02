import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';
import { Card } from '@/components/ui/Card';

export function GitHub() {
  return (
    <section id="github" className="px-6 md:px-12 py-24">
      <FadeIn>
        <SectionHeading>GitHub</SectionHeading>
        <Card className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl text-paper">@SKKammar</p>
            <p className="font-sans text-sm text-ash mt-1">
              Active contributor — full-stack platforms, ML experiments, and DSA practice.
            </p>
          </div>
          <a
            href="https://github.com/SKKammar"
            className="border border-ink-border py-2 px-4 font-sans text-xs text-paper hover:bg-ink transition"
          >
            View Profile
          </a>
        </Card>
      </FadeIn>
      <Rule className="mt-16" />
    </section>
  );
}
