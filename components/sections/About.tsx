import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
        >
            <FadeIn>
                <SectionHeading>About</SectionHeading>
            </FadeIn>

            <div className="mt-12 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">

                <FadeIn>
                    <p className="font-display tracking-tight text-2xl leading-relaxed text-white md:text-4xl">
                        I&apos;m a Computer Science student focused on building production-ready
                        software that combines thoughtful engineering, clean architecture,
                        and modern user experiences.
                    </p>

                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400">
                        Over the last few years I&apos;ve worked on full-stack applications,
                        Spring Boot backend systems, AI-assisted solutions, and computer
                        vision projects. I enjoy designing software that is maintainable,
                        scalable, and solves real problems instead of being limited to
                        classroom demonstrations.
                    </p>

                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400">
                        I&apos;m currently strengthening my backend engineering skills while
                        exploring modern frontend technologies to become a well-rounded
                        software engineer.
                    </p>
                </FadeIn>

                <FadeIn>
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">

                        <div className="space-y-8">

                            <div>
                                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                                    Education
                                </p>

                                <h3 className="mt-2 text-xl tracking-tight text-white">
                                    B.E. Computer Science
                                </h3>

                                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                                    Final Year Student
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                                    Focus
                                </p>

                                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                                    Backend Engineering, Full Stack Development, AI Applications
                                </p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                                    Current Goal
                                </p>

                                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                                    Building industry-level projects and preparing for software
                                    engineering roles.
                                </p>
                            </div>

                        </div>
                    </div>
                </FadeIn>

            </div>

            <Rule className="mt-16" />
        </section>
    );
}