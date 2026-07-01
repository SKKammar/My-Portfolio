import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Skills() {
    return (
        <FadeIn>
            <section
                id="skills"
                className="mx-auto max-w-6xl px-6 py-32"
            >
                <SectionHeading>Skills</SectionHeading>

                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <h3 className="mb-2 text-sm uppercase tracking-[0.3em] text-fog">
                            Languages
                        </h3>

                        <p>C, C++, Java, JavaScript, TypeScript, Python</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm uppercase tracking-[0.3em] text-fog">
                            Frameworks
                        </h3>

                        <p>React, Next.js, Spring Boot</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm uppercase tracking-[0.3em] text-fog">
                            Databases
                        </h3>

                        <p>MySQL, PostgreSQL, MongoDB</p>
                    </div>

                    <div>
                        <h3 className="mb-2 text-sm uppercase tracking-[0.3em] text-fog">
                            Tools
                        </h3>

                        <p>Git, GitHub, IntelliJ IDEA, VS Code, Docker</p>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}