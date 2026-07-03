'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section
            id="about"
            className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
        >
            <FadeIn>
                <SectionHeading>About Me</SectionHeading>
            </FadeIn>

            <div className="mt-12 grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">

                <FadeIn>
                    <p className="font-display tracking-tight text-2xl leading-relaxed text-white md:text-4xl">
                        I&apos;m a software engineer focused on building production-ready
                        applications that combine thoughtful engineering, clean architecture,
                        and modern user experiences.
                    </p>

                    <div className="mt-8 space-y-6 text-base leading-relaxed text-neutral-400">
                        <p className="max-w-2xl">
                            My journey began when [insert personal story, e.g. I first discovered coding through modding video games]. Since then, I&apos;ve developed a deep passion for writing clean, maintainable code and solving complex technical challenges. I thrive in environments where I can build scalable backend architectures and intuitive frontend interfaces.
                        </p>
                        
                        {isExpanded && (
                            <>
                                <p className="max-w-2xl">
                                    Over the last few years, I&apos;ve worked across the full stack—from [insert backend tech, e.g. designing distributed Spring Boot services] to [insert frontend tech, e.g. crafting pixel-perfect Next.js interfaces]. I believe that the best software isn&apos;t just about making things work; it&apos;s about making things work elegantly, efficiently, and reliably for the end user.
                                </p>
                                <p className="max-w-2xl">
                                    When I&apos;m not coding, you can usually find me [insert hobbies, e.g. exploring new hiking trails, reading sci-fi novels, or tinkering with open-source AI models]. I&apos;m always eager to learn new technologies and take on projects that push me out of my comfort zone.
                                </p>
                            </>
                        )}
                    </div>

                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        aria-expanded={isExpanded}
                        className="mt-6 flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-neutral-300"
                    >
                        {isExpanded ? (
                            <>
                                Read Less
                                <ChevronUp size={16} />
                            </>
                        ) : (
                            <>
                                Read More
                                <ChevronDown size={16} />
                            </>
                        )}
                    </button>
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