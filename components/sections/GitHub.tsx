import { ArrowUpRight, Star, GitFork, Github } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';

async function getRepos() {
  try {
    const res = await fetch(
        'https://api.github.com/users/SKKammar/repos?sort=updated&per_page=4',
        {
          next: {
            revalidate: 3600,
          },
        }
    );

    if (!res.ok) return [];

    const repos = await res.json();

    return repos
        .filter((repo: any) => !repo.fork)
        .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        .slice(0, 4);
  } catch {
    return [];
  }
}

export async function GitHub() {
  const repos = await getRepos();

  return (
      <section
          id="github"
          className="mx-auto max-w-7xl px-6 py-28 md:px-12"
      >
        <FadeIn>
          <SectionHeading>Open Source</SectionHeading>
        </FadeIn>

        <div className="mt-12 flex items-center justify-between">

          <div>
            <h2 className="font-display text-4xl text-paper">
              GitHub Activity
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-ash">
              A selection of my recent repositories and open-source work.
            </p>
          </div>

          <a
              href="https://github.com/SKKammar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-xl border border-ink-border px-5 py-3 text-sm text-paper transition hover:border-white/20 md:flex"
          >
            <Github size={18} />
            View Profile
          </a>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {repos.map((repo: any) => (
              <FadeIn key={repo.id}>
                <Card className="group p-8">

                  <div className="flex items-start justify-between">

                    <h3 className="font-display text-2xl text-paper">
                      {repo.name}
                    </h3>

                    <ArrowUpRight
                        size={18}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                  <p className="mt-5 min-h-[72px] leading-7 text-ash">
                    {repo.description || 'No description provided.'}
                  </p>

                  <div className="mt-8 flex items-center gap-6 text-sm text-fog">

                <span className="flex items-center gap-2">
                  <Star size={15} />
                  {repo.stargazers_count}
                </span>

                    <span className="flex items-center gap-2">
                  <GitFork size={15} />
                      {repo.forks_count}
                </span>

                    {repo.language && (
                        <span>{repo.language}</span>
                    )}

                  </div>

                  <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0"
                      aria-label={repo.name}
                  />

                </Card>
              </FadeIn>
          ))}

        </div>

        <Rule className="mt-24" />
      </section>
  );
}