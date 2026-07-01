import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <FadeIn>
            <section
                id="projects"
                className="mx-auto max-w-6xl px-6 py-32"
            >
                <SectionHeading>Projects</SectionHeading>

                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="border border-ink-border bg-ink-card p-6 transition hover:-translate-y-1"
                        >
                            <p className="mb-2 text-sm text-fog">
                                {project.category} • {project.year}
                            </p>

                            <h3 className="mb-2 font-display text-2xl">
                                {project.title}
                            </h3>

                            <p className="mb-4 text-fog">
                                {project.subtitle}
                            </p>

                            <p className="mb-6">
                                {project.description}
                            </p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <Tag key={tech}>{tech}</Tag>
                                ))}
                            </div>

                            <div className="flex gap-6">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-fog transition"
                                    >
                                        GitHub →
                                    </a>
                                )}

                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-fog transition"
                                    >
                                        Live →
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </FadeIn>
    );
}