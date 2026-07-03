import { ArrowUpRight } from 'lucide-react';

import type { Project } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { GithubIcon } from '@/components/icons/BrandIcons';

export function ProjectCard({
                                project,
                            }: {
    project: Project;
}) {
    return (
        <Card
            className="group flex flex-col p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
            <div className="flex flex-col h-full">
                    <div className="mb-6 flex items-center gap-3">
                        {project.year && (
                            <span className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                {project.year}
              </span>
                        )}

                        {project.category && (
                            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                {project.category}
              </span>
                        )}
                    </div>

                    <h3 className="font-display tracking-tight text-3xl text-white">
                        {project.title}
                    </h3>

                    {project.subtitle && (
                        <p className="mt-3 text-neutral-500">
                            {project.subtitle}
                        </p>
                    )}

                    {project.description && (
                        <p className="mt-6 leading-7 text-neutral-400">
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
                                className="inline-flex items-center gap-2 text-sm text-white transition hover:text-neutral-300"
                            >
                                <GithubIcon size={16} />
                                Github
                            </a>
                        )}

                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-white transition hover:text-neutral-300"
                            >
                                Live Demo
                                <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
            </div>
        </Card>
    );
}