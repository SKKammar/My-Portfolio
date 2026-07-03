import { ExternalLink } from 'lucide-react';

import type { Project } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';
import { GithubIcon } from '@/components/icons/BrandIcons';

export function ProjectCard({
                                project,
                                onClick,
                            }: {
    project: Project;
    onClick?: () => void;
}) {
    return (
        <Card
            onClick={onClick}
            className={`group flex flex-col p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] h-full ${onClick ? 'cursor-pointer' : ''}`}
        >
            <div className="flex flex-col h-full">
                <div className="flex-grow flex flex-col">
                    <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
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

                        {project.topMetric && (
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md shrink-0">
                                <span className="font-display font-medium text-white">{project.topMetric.value}</span>
                                <span className="text-[10px] uppercase tracking-widest text-neutral-400">{project.topMetric.label}</span>
                            </div>
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

                    {project.caseStudy && (
                        <div className="mt-6 rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-neutral-400 border border-white/5">
                            <p><strong className="text-neutral-300 font-medium">Problem:</strong> {project.caseStudy.problem}</p>
                            <p className="mt-2"><strong className="text-neutral-300 font-medium">Solution:</strong> {project.caseStudy.approach}</p>
                            <p className="mt-2"><strong className="text-neutral-300 font-medium">Result:</strong> {project.caseStudy.results[0]}</p>
                        </div>
                    )}

                    {project.technologies?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <Tag key={tech}>{tech}</Tag>
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-10 flex flex-wrap gap-4 shrink-0">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="inline-flex items-center gap-2 text-sm text-white transition hover:text-neutral-300"
                            onClick={(e) => e.stopPropagation()}
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
                            aria-label={`View ${project.title} Live Demo`}
                            className="inline-flex items-center gap-2 text-sm text-white transition hover:text-neutral-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Live Demo
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
        </Card>
    );
}