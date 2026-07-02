export interface Project {
  id: string;
  title: string;
  subtitle: string | null;
  description: string | null;

  coverImage: string | null;

  technologies: string[];

  liveUrl: string | null;
  githubUrl: string | null;

  year: number | null;

  featured: boolean;

  category: string | null;
}

export const placeholderProjects: Project[] = [
  {
    id: 'inventory-system',

    title: 'Inventory & Order Management System',

    subtitle: 'Production-grade Spring Boot backend',

    description:
        'JWT-authenticated inventory and order platform built with Spring Boot, MySQL, Hibernate and role-based authentication.',

    coverImage: '/images/projects/inventory.png',

    technologies: [
      'Spring Boot',
      'Java',
      'MySQL',
      'JWT',
    ],

    liveUrl: null,

    githubUrl: 'https://github.com/SKKammar',

    year: 2026,

    featured: true,

    category: 'Backend',
  },

  {
    id: 'safe-bump',

    title: 'Safe Bump',

    subtitle: 'AI Assisted Pregnancy Risk Prediction',

    description:
        'Hackathon MVP combining FastAPI, React and an AI assistant for pregnancy risk awareness.',

    coverImage: '/images/projects/safe-bump.png',

    technologies: [
      'React',
      'FastAPI',
      'SQLite',
      'Claude AI',
    ],

    liveUrl: null,

    githubUrl: 'https://github.com/SKKammar',

    year: 2026,

    featured: true,

    category: 'AI',
  },
];