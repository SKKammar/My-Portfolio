import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function About() {
    return (
        <FadeIn>
            <section id="about" className="mx-auto max-w-6xl px-8 py-32">
                <SectionHeading>About Me</SectionHeading>

                <p className="max-w-3xl font-sans leading-8 text-white/70">
                    This section will later contain your biography, experience, education,
                    and skills.
                </p>
            </section>
        </FadeIn>
    );
}