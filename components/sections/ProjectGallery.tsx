'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import type { Project } from '@/data/projects';

type ProjectGalleryProps = {
    projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="mt-12">
            <div className="mb-12 flex flex-wrap items-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat as string)}
                        className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-100 ease-out ${
                            activeFilter === cat 
                                ? 'bg-white text-black font-semibold' 
                                : 'border border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div layout className="space-y-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />
                        <motion.div 
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-black/90 p-5 sm:p-8 shadow-2xl backdrop-blur-xl"
                        >
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-4 sm:right-6 sm:top-6 text-neutral-400 hover:text-white"
                            >
                                Close
                            </button>
                            
                            <h2 className="font-display text-3xl text-white">{selectedProject.title}</h2>
                            {selectedProject.subtitle && <p className="mt-2 text-neutral-400">{selectedProject.subtitle}</p>}
                            
                            <p className="mt-10 leading-7 text-neutral-300">{selectedProject.description}</p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
