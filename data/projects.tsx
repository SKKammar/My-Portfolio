export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    coverImage: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    year: number;
    featured: boolean;
    category: '3D' | 'Web' | 'Mobile' | 'Branding' | 'Other';
}

export const projects: Project[] = [
    {
        id: 'inventory-system',
        title: 'Inventory & Order Management System',
        subtitle: 'Production-grade Spring Boot backend',
        description:
            'JWT-authenticated inventory and order platform built with Spring Boot 3.2, MySQL, and Hibernate, with role-based access and Swagger docs.',
        coverImage: '/images/projects/inventory.png',
        technologies: ['Spring Boot', 'MySQL', 'Hibernate', 'JWT'],
        githubUrl: 'https://github.com/SKKammar/inventory',
        year: 2026,
        featured: true,
        category: 'Web',
    },
    {
        id: 'safe-bump',
        title: 'Safe Bump',
        subtitle: 'Pregnancy risk alert web app',
        description:
            'A weighted rule-based risk engine paired with a Claude-powered chatbot, built in a 6-hour hackathon.',
        coverImage: '/images/projects/safe-bump.png',
        technologies: ['FastAPI', 'React', 'SQLite'],
        year: 2026,
        featured: true,
        category: 'Web',
    },
];