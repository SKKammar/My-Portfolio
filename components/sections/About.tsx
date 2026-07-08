import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-4 py-12 md:py-20 md:px-12"
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

                    <ul className="mt-8 space-y-4 max-w-2xl text-base leading-relaxed text-neutral-400">
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Current Status:</strong> Final Year CS Student</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Tech Stack:</strong> Java, Python, Next.js, Spring Boot</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-blue-500 font-bold">•</span>
                            <span><strong>Seeking:</strong> Backend and Full-Stack Engineering roles</span>
                        </li>
                    </ul>
                </FadeIn>

                <FadeIn>
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">

                        <div className="space-y-8">

                            <div>
                                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                                    Education
                                </p>

                                <h3 className="mt-2 text-xl tracking-tight text-white">
                                    Bachelor of Engineering in Computer Science
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
                                    Backend Engineering, Full Stack Development, Artificial Intelligence Applications
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