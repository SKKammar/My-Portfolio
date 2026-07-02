import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';
import { ProjectCard } from './ProjectCard';
import { placeholderProjects, type Project } from '@/data/projects';
import { createServerSupabaseClient } from '@/lib/supabase/server';

async function getProjects(): Promise<Project[]> {
  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('year', { ascending: false });

    if (error || !data || data.length === 0) return placeholderProjects;
    return data as Project[];
  } catch {
    // Supabase env vars not set yet, or table doesn't exist — fall back
    // gracefully so the site still builds and renders.
    return placeholderProjects;
  }
}

export async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="px-6 md:px-12 py-24">
      <FadeIn>
        <SectionHeading>Projects</SectionHeading>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project) => (
          <FadeIn key={project.id}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
      <Rule className="mt-16" />
    </section>
  );
}
