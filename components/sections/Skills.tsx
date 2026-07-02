import { FadeIn } from '@/components/ui/FadeIn';
import { Rule } from '@/components/ui/Rule';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Tag } from '@/components/ui/Tag';

const skillGroups = [
    {
        label: 'Languages',
        items: ['Java', 'Python', 'TypeScript', 'SQL'],
    },
    {
        label: 'Backend',
        items: ['Spring Boot', 'FastAPI', 'Node.js', 'Hibernate / JPA'],
    },
    {
        label: 'Frontend',
        items: ['Next.js', 'React', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
        label: 'Database',
        items: ['MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
        label: 'AI / ML',
        items: ['OpenCV', 'scikit-learn', 'Pandas', 'NumPy'],
    },
    {
        label: 'Tools',
        items: ['Git', 'Docker', 'Postman', 'IntelliJ IDEA'],
    },
];

export function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-6 py-28 md:px-12"
        >
            <FadeIn>
                <SectionHeading>Skills</SectionHeading>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group) => (
                    <FadeIn key={group.label}>
                        <Card className="h-full p-8">

                            <h3 className="font-display text-2xl text-paper">
                                {group.label}
                            </h3>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <Tag key={item}>{item}</Tag>
                                ))}
                            </div>

                        </Card>
                    </FadeIn>
                ))}
            </div>

            <Rule className="mt-24" />
        </section>
    );
}