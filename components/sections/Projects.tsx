import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectGallery } from './ProjectGallery';
import { placeholderProjects, type Project } from '@/data/projects';
import { createPublicSupabaseClient } from '@/lib/supabase/server';

async function getProjects(): Promise<Project[]> {
    try {
        const supabase = await createPublicSupabaseClient();

        const { data, error } = await supabase
            .from('projects')
            .select('*')
            .order('featured', { ascending: false })
            .order('year', { ascending: false });

        if (error || !data || data.length === 0) {
            return placeholderProjects;
        }

        return data.map((project) => ({
            id: project.id,
            title: project.title,
            subtitle: project.subtitle,
            description: project.description,
            coverImage: project.cover_image,
            technologies: project.technologies ?? [],
            liveUrl: project.live_url,
            githubUrl: project.github_url,
            year: project.year,
            featured: project.featured ?? false,
            category: project.category,
        })) as Project[];
    } catch {
        return placeholderProjects;
    }
}

export async function Projects() {
    const projects = await getProjects();

    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
        >
            <FadeIn>
                <SectionHeading>Featured Projects</SectionHeading>
            </FadeIn>

            <ProjectGallery projects={projects} />

            <Rule className="mt-16" />
        </section>
    );
}