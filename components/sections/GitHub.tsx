import { ArrowUpRight, Star, GitFork } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { GithubIcon } from '@/components/icons/BrandIcons';

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  topics: string[];
  pushed_at: string;
  archived: boolean;
  private: boolean;
};

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
};

function formatRelativeTime(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths}mo ago`;
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}y ago`;
}

async function getRepos(): Promise<GithubRepo[]> {
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
        'https://api.github.com/users/SKKammar/repos?sort=pushed&direction=desc&per_page=100',
        {
          headers,
          next: {
            revalidate: 3600,
          },
        }
    );

    if (!res.ok) return [];

    const repos: GithubRepo[] = await res.json();

    return repos
        .filter((repo) => !repo.fork && !repo.archived && !repo.private)
        .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
        .slice(0, 6);
  } catch {
    return [];
  }
}

export async function GithubSection() {
  const repos = await getRepos();

  return (
      <section
          id="github"
          className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
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
            <GithubIcon size={18} />
            View Profile
          </a>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          {repos.map((repo) => (
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

                  {repo.description && (
                    <p className="mt-5 min-h-[72px] leading-7 text-neutral-400">
                      {repo.description}
                    </p>
                  )}

                  {repo.topics && repo.topics.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {repo.topics.slice(0, 3).map((topic) => (
                            <Tag key={topic}>{topic}</Tag>
                        ))}
                      </div>
                  )}

                  <div className="mt-8 flex items-center gap-6 text-sm text-neutral-500">

                    {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-2">
                          <Star size={15} />
                          {repo.stargazers_count}
                        </span>
                    )}

                    {repo.forks_count > 0 && (
                        <span className="flex items-center gap-2">
                          <GitFork size={15} />
                          {repo.forks_count}
                        </span>
                    )}

                    {repo.language && (
                        <span className="flex items-center gap-2">
                          <span
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || '#8b8b8b' }}
                          />
                          {repo.language}
                        </span>
                    )}

                    {repo.pushed_at && (
                        <span>Updated {formatRelativeTime(repo.pushed_at)}</span>
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

        <Rule className="mt-16" />
      </section>
  );
}