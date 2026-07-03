'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';

const skillGroups = [
    {
        label: 'Languages',
        color: 'rgba(96, 165, 250, 1)', // blue-400
        items: ['Java', 'Python', 'TypeScript', 'SQL'],
    },
    {
        label: 'Backend',
        color: 'rgba(52, 211, 153, 1)', // emerald-400
        items: ['Spring Boot', 'FastAPI', 'Node.js', 'Hibernate'],
    },
    {
        label: 'Frontend',
        color: 'rgba(167, 139, 250, 1)', // violet-400
        items: ['Next.js', 'React', 'Tailwind CSS', 'Framer'],
    },
    {
        label: 'Database',
        color: 'rgba(251, 191, 36, 1)', // amber-400
        items: ['MySQL', 'PostgreSQL', 'Supabase'],
    },
    {
        label: 'AI / ML',
        color: 'rgba(244, 114, 182, 1)', // pink-400
        items: ['OpenCV', 'scikit-learn', 'Pandas', 'PyTorch'],
    },
    {
        label: 'Tools',
        color: 'rgba(156, 163, 175, 1)', // gray-400
        items: ['Git', 'Docker', 'Postman', 'IntelliJ'],
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
            {/* Core Node */}
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
                            key={item}
                            initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            animate={{ opacity: 1, x, y, scale: 1 }}
                            exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05 }}
                            className="absolute hidden md:flex items-center justify-center px-4 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] whitespace-nowrap z-20"
                            style={{ 
                                boxShadow: `0 0 15px ${group.color.replace('1)', '0.15)')}`
                            }}
                        >
                            <span className="text-xs font-medium text-white tracking-tight">{item}</span>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            
            {/* Mobile Fallback: List appears below when hovered/tapped */}
             <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-48 flex flex-col gap-2 md:hidden z-20 pointer-events-none">
                <AnimatePresence>
                    {isHovered && items.map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center justify-center px-4 py-2 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl pointer-events-auto"
                        >
                             <span className="text-xs font-medium text-white tracking-tight">{item}</span>
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

            <Rule className="mt-20" />
        </section>
    );
}