import type { Project } from '@/data/projects';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

export function ProjectCard({ project }: { project: Project }) {
    return (
        <Card className="p-6 flex flex-col gap-4">
            <div>
                <p className="font-sans text-xs text-fog mb-1">{project.year}</p>
                <h3 className="font-display text-2xl text-paper">{project.title}</h3>
                <p className="font-sans text-sm text-ash mt-1">{project.subtitle}</p>
            </div>
            <p className="font-sans text-sm text-ash leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                ))}
            </div>
            <div className="flex gap-4 mt-2">
                {project.liveUrl && (
                    <a href={project.liveUrl} className="font-sans text-xs text-paper underline underline-offset-4 decoration-ink-border hover:decoration-paper transition">
                        Live
                    </a>
                )}
                {project.githubUrl && (
                    <a href={project.githubUrl} className="font-sans text-xs text-paper underline underline-offset-4 decoration-ink-border hover:decoration-paper transition">
                        Code
                    </a>
                )}
            </div>
        </Card>
    );
}