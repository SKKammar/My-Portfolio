import Image from 'next/image';
import { ArrowUpRight, Github } from 'lucide-react';

import type { Project } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

export function ProjectCard({
                                project,
                                featured = false,
                            }: {
    project: Project;
    featured?: boolean;
}) {
    return (
        <Card
            className={`group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
                featured ? 'p-0' : 'p-0'
            }`}
        >
            <div
                className={`grid ${
                    featured ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'grid-cols-1'
                }`}
            >
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-card">
                    {project.coverImage ? (
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            priority={featured}
                            className="object-cover transition duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full items-center justify-center text-sm text-fog">
                            Project Preview
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                </div>

                <div className="flex flex-col p-8">
                    <div className="mb-6 flex items-center gap-3">
                        {project.year && (
                            <span className="text-xs uppercase tracking-[0.18em] text-fog">
                {project.year}
              </span>
                        )}

                        {project.category && (
                            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-fog">
                {project.category}
              </span>
                        )}
                    </div>

                    <h3 className="font-display text-3xl text-paper">
                        {project.title}
                    </h3>

                    {project.subtitle && (
                        <p className="mt-3 text-fog">
                            {project.subtitle}
                        </p>
                    )}

                    {project.description && (
                        <p className="mt-6 leading-7 text-ash">
                            {project.description}
                        </p>
                    )}

                    {project.technologies?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Tag key={tech}>{tech}</Tag>
                            ))}
                        </div>
                    )}

                    <div className="mt-10 flex flex-wrap gap-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-paper transition hover:text-white"
                            >
                                <Github size={16} />
                                GitHub
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-paper transition hover:text-white"
                            >
                                Live Demo
                                <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}