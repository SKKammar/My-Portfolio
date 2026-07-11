import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectGallery } from './ProjectGallery';
import { placeholderProjects, type Project } from '@/data/projects';
async function getProjects(): Promise<Project[]> {
    return placeholderProjects;
}

export async function Projects() {
    const projects = await getProjects();

    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-4 py-12 md:py-20 md:px-12"
        >
            <FadeIn>
                <SectionHeading>Featured Projects</SectionHeading>
            </FadeIn>

            <ProjectGallery projects={projects} />

            <Rule className="mt-16" />
        </section>
    );
}