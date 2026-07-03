'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            { name: 'Docker', 'context': 'Containerization' },
            { name: 'Postman', 'context': 'API testing' },
            { name: 'IntelliJ', 'context': 'Java IDE' }
        ],
    },
];

function OrbitNode({ group }: { group: typeof skillGroups[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    // Calculate positions for items in a circle
    const radius = 120;
    const items = group.items;
    const angleStep = (2 * Math.PI) / items.length;

    return (
        <div 
            className="relative flex items-center justify-center w-full h-48 md:h-64"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
            onTouchStart={() => setIsHovered(true)}
        >
            <div 
                className={`relative z-10 flex flex-col items-center justify-center w-32 h-32 rounded-full border bg-white/5 backdrop-blur-md transition-all duration-500 cursor-pointer overflow-hidden group ${
                    isHovered ? 'scale-105 border-white/30' : 'border-white/10 scale-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                }`}
                style={{
                    boxShadow: isHovered ? `0 0 30px ${group.color.replace('1)', '0.2)')}, inset 0 1px 0 rgba(255,255,255,0.1)` : 'inset 0 1px 0 rgba(255,255,255,0.1)'
                }}
            >
                <div 
                    className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-0'}`}
                    style={{ background: `radial-gradient(circle at center, ${group.color}, transparent 70%)` }}
                />
                
                <span className="font-display tracking-tight text-white">{group.label}</span>
            </div>

            {/* Orbiting items for Desktop */}
            <AnimatePresence>
                {isHovered && items.map((item, i) => {
                    const angle = i * angleStep - Math.PI / 2; // start from top
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            animate={{ opacity: 1, x, y, scale: 1 }}
                            exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05 }}
                            className="absolute hidden md:flex flex-col items-center justify-center px-4 py-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] whitespace-nowrap z-20 group-hover:z-30"
                            style={{ 
                                boxShadow: `0 0 15px ${group.color.replace('1)', '0.15)')}`
                            }}
                        >
                            <span className="text-xs font-medium text-white tracking-tight">{item.name}</span>
                            <span className="text-[10px] text-neutral-400 mt-1">{item.context}</span>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            
            {/* Mobile Fallback: List appears below when hovered/tapped */}
             <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-48 flex flex-col gap-2 md:hidden z-20 pointer-events-none">
                <AnimatePresence>
                    {isHovered && items.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex flex-col items-center justify-center px-4 py-3 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-xl pointer-events-auto"
                        >
                             <span className="text-xs font-medium text-white tracking-tight">{item.name}</span>
                             <span className="text-[10px] text-neutral-400 mt-1 text-center">{item.context}</span>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

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
                <SectionHeading>Skill Constellation</SectionHeading>
                <p className="mt-4 text-neutral-400 leading-relaxed max-w-2xl">
                    Hover or tap a core node to reveal the orbiting technology stack.
                </p>
            </motion.div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 place-items-center">
                {skillGroups.map((group, i) => (
                    <motion.div
                        key={group.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="w-full"
                    >
                        <OrbitNode group={group} />
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 pt-12 border-t border-white/10 md:hidden">
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-8 text-center">Complete Skill Matrix</h3>
                <div className="space-y-8">
                    {skillGroups.map(group => (
                        <div key={`fallback-${group.label}`}>
                            <h4 className="text-white font-medium mb-3" style={{ color: group.color }}>{group.label}</h4>
                            <div className="flex flex-col gap-3">
                                {group.items.map(item => (
                                    <div key={`fallback-item-${item.name}`} className="flex justify-between items-baseline border-b border-white/5 pb-2">
                                        <span className="text-sm text-neutral-200">{item.name}</span>
                                        <span className="text-[10px] text-neutral-500 text-right max-w-[60%]">{item.context}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Rule className="mt-20" />
        </section>
    );
}