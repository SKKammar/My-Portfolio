'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';

const skillGroups = [
    {
        label: 'Languages',
        color: 'rgba(96, 165, 250, 1)', // blue-400
        items: [
            { name: 'Java', context: 'Production backends (Spring Boot)' },
            { name: 'Python', context: 'ML & CV Scripts' },
            { name: 'TypeScript', context: 'Type-safe React/Next.js' },
            { name: 'SQL', context: 'Relational schema design' }
        ],
    },
    {
        label: 'Backend',
        color: 'rgba(52, 211, 153, 1)', // emerald-400
        items: [
            { name: 'Spring Boot', context: 'Used in Inventory System, JWT auth' },
            { name: 'FastAPI', context: 'High-perf ML serving' },
            { name: 'Node.js', context: 'Serverless Edge Functions' },
            { name: 'Hibernate', context: 'ORM for Java apps' }
        ],
    },
    {
        label: 'Frontend',
        color: 'rgba(167, 139, 250, 1)', // violet-400
        items: [
            { name: 'Next.js', context: 'App Router & SSR' },
            { name: 'React', context: 'Component architecture' },
            { name: 'Tailwind CSS', context: 'Utility-first styling' },
            { name: 'Framer', context: 'Complex motion & physics' }
        ],
    },
    {
        label: 'Database',
        color: 'rgba(251, 191, 36, 1)', // amber-400
        items: [
            { name: 'MySQL', context: 'ACID transactions' },
            { name: 'PostgreSQL', context: 'Advanced queries & RLS' },
            { name: 'Supabase', context: 'BaaS & Realtime' }
        ],
    },
    {
        label: 'AI / ML',
        color: 'rgba(244, 114, 182, 1)', // pink-400
        items: [
            { name: 'OpenCV', context: 'Computer vision pipelines' },
            { name: 'scikit-learn', context: 'Classical ML models' },
            { name: 'Pandas', context: 'Data wrangling' },
            { name: 'PyTorch', context: 'Deep learning research' }
        ],
    },
    {
        label: 'Tools',
        color: 'rgba(156, 163, 175, 1)', // gray-400
        items: [
            { name: 'Git', context: 'Version control' },
            { name: 'Docker', context: 'Containerization' },
            { name: 'Postman', context: 'API testing' },
            { name: 'IntelliJ', context: 'Java IDE' }
        ],
    },
];

export function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto max-w-7xl px-6 py-16 md:py-20 md:px-12"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8 }}
            >
                <SectionHeading>Technical Arsenal</SectionHeading>
                <p className="mt-4 text-neutral-400 leading-relaxed max-w-2xl">
                    A structured overview of the technologies and tools I use to build robust, scalable applications.
                </p>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-6 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        {/* Dynamic Background Glow */}
                        <div 
                            className="absolute inset-0 opacity-0 transition-opacity duration-100 ease-out group-hover:opacity-10 pointer-events-none"
                            style={{ background: `radial-gradient(circle at top right, ${group.color}, transparent 80%)` }}
                        />
                        
                        <div className="relative z-10">
                            <h3 className="mb-6 font-display text-xl font-medium tracking-tight" style={{ color: group.color }}>
                                {group.label}
                            </h3>
                            
                            <div className="flex flex-col gap-4">
                                {group.items.map(item => (
                                    <div key={item.name} className="flex flex-col">
                                        <span className="text-sm font-medium text-white">{item.name}</span>
                                        <span className="text-xs text-neutral-500">{item.context}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Rule className="mt-20" />
        </section>
    );
}