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
  topMetric?: { value: string; label: string };
  caseStudy?: {
    problem: string;
    approach: string;
    results: string[];
  };
}

export const placeholderProjects: Project[] = [
  {
    id: 'my-portfolio',
    title: 'Santosh K Kammar Portfolio',
    subtitle: 'Cinematic 3D portfolio with a hidden CMS',
    description:
        'A personal portfolio built with Next.js 15 and React 19, featuring a custom 3D pendulum clock hero scene rendered with react-three-fiber and a hidden, Supabase-backed admin panel for managing projects.',
    coverImage: '/images/projects/my-portfolio.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Three.js',
      'Supabase',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/My-Portfolio',
    year: 2026,
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 'inventory-system',
    title: 'Inventory System',
    subtitle: 'Production-ready Spring Boot backend',
    description:
        'A full-stack inventory and order platform built with Spring Boot 3 and Java 17, featuring JWT authentication, role-based access control, and real-time stock management with optimistic locking to prevent overselling. Load tested at ~9,000 requests, 126 req/s, 0% error rate.',
    coverImage: '/images/projects/inventory.png',
    technologies: [
      'Spring Boot',
      'Java',
      'MySQL',
      'JWT',
      'React',
      'Docker',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/InventoryManagement',
    year: 2026,
    featured: true,
    category: 'Backend',
    topMetric: { value: '126 req/s', label: '0% errors' },
    caseStudy: {
      problem: 'E-commerce platforms face significant challenges during high-traffic events, often leading to overselling due to race conditions in inventory updates.',
      approach: 'I designed a distributed inventory backend using Spring Boot 3 and Java 17. To prevent overselling, I implemented optimistic locking at the database level and a robust JWT-based RBAC system to secure endpoints.',
      results: ['Load tested at ~9,000 concurrent requests', 'Achieved 126 req/s throughput', 'Maintained 0% error rate under peak load']
    }
  },
  {
    id: 'inspectai-anomaly-detection',
    title: 'InspectAI',
    subtitle: 'Unsupervised industrial defect detection',
    description:
        'A computer vision system that detects surface defects in industrial images without any anomaly labels, trained only on normal samples. Compares a convolutional autoencoder baseline against PatchCore, reaching 1.00 image AUROC and 0.99 pixel AUROC on MVTec AD. Includes a Flask app for real-time inference.',
    coverImage: '/images/projects/anomaly-detection.png',
    technologies: [
      'Python',
      'PyTorch',
      'PatchCore',
      'Flask',
      'Computer Vision',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/Anomaly-detection',
    year: 2026,
    featured: true,
    category: 'Computer Vision',
    topMetric: { value: '1.00', label: 'AUROC' },
  },
  {
    id: 'zomato-eda',
    title: 'Zomato EDA',
    subtitle: 'Exploratory data analysis on ~9,500 restaurants',
    description:
        'An exploratory data analysis project on the Zomato restaurant dataset, investigating city-level dominance, pricing patterns, and what actually drives restaurant success on the platform.',
    coverImage: '/images/projects/zomato-eda.png',
    technologies: [
      'Python',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Jupyter Notebook',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/EDA-and-Insights',
    year: 2026,
    featured: false,
    category: 'Data Science',
  },
  {
    id: 'titanic-survival-prediction',
    title: 'Titanic Survival',
    subtitle: 'End-to-end ML pipeline, six models compared',
    description:
        'A complete machine learning pipeline benchmarking six classification algorithms on the Kaggle Titanic dataset, covering feature engineering, preprocessing, hyperparameter tuning with cross-validation, and final model selection.',
    coverImage: '/images/projects/titanic.png',
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Jupyter Notebook',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/Titanic-Survival-Prediction',
    year: 2026,
    featured: false,
    category: 'Data Science',
    topMetric: { value: '97/100', label: 'Rubric' },
  }
];