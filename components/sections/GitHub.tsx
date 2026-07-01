import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function GitHub() {
    return (
        <FadeIn>
            <section
                id="github"
                className="mx-auto max-w-6xl px-6 py-32"
            >
                <SectionHeading>GitHub</SectionHeading>

                <div className="border border-ink-border bg-ink-card p-8">
                    <h3 className="mb-3 text-2xl font-display">
                        GitHub Profile
                    </h3>

                    <p className="mb-6 text-fog">
                        Explore my open-source projects and development work.
                    </p>

                    <a
                        href="https://github.com/SKKammar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-paper hover:text-fog transition"
                    >
                        github.com/SKKammar →
                    </a>
                </div>
            </section>
        </FadeIn>
    );
}