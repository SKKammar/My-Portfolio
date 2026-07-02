import { FadeIn } from '@/components/ui/FadeIn';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';
import { Tag } from '@/components/ui/Tag';

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'TypeScript', 'SQL'] },
  { label: 'Backend', items: ['Spring Boot', 'FastAPI', 'Node.js', 'Hibernate/JPA'] },
  { label: 'Data & ML', items: ['Pandas', 'scikit-learn', 'EDA', 'Model evaluation'] },
  { label: 'Tools', items: ['Docker', 'Git', 'Supabase', 'Postman'] },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-24">
      <FadeIn>
        <SectionHeading>Skills</SectionHeading>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {skillGroups.map((group) => (
          <FadeIn key={group.label}>
            <p className="font-display italic text-lg text-paper mb-3">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
      <Rule className="mt-16" />
    </section>
  );
}
