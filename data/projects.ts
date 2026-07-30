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
    id: 'dognose-scanner',
    title: 'DogNose ID System',
    subtitle: 'Biometric identification system for dogs (In Progress)',
    description: 'A unique biometric scanner backend that uses canine nose prints for reliable identification, similar to human fingerprints. Built with advanced computer vision techniques and a scalable backend architecture.',
    coverImage: '/images/projects/dognose.png',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Spring Boot'],
    liveUrl: null,
    githubUrl: null,
    year: 2026,
    featured: true,
    category: 'Backend / AI',
    topMetric: { value: 'WIP', label: 'Status' },
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
    id: 'churnops',
    title: 'ChurnOps',
    subtitle: 'Production-ready MLOps pipeline',
    description: 'A production-ready MLOps pipeline that predicts e-commerce customer churn. Instead of just chasing accuracy, it optimizes for *net profit* by factoring in retention offer costs against Customer Lifetime Value (CLV). It achieves 91% recall, includes a FastAPI backend, a Streamlit dashboard for monitoring, and is fully containerized with Docker—demonstrating end-to-end machine learning deployment.',
    coverImage: null,
    technologies: ['Python', 'FastAPI', 'Streamlit', 'Docker', 'MLOps'],
    liveUrl: null,
    githubUrl: null,
    year: 2026,
    featured: true,
    category: 'MLOps',
    topMetric: { value: '91%', label: 'Recall' }
  },
  {
    id: 'codementor',
    title: 'CodeMentor',
    subtitle: 'AI-powered coding assistant with Socratic hints',
    description: 'An AI-powered coding assistant built with Next.js 15 and TypeScript that uses a Socratic hint engine to guide users toward solutions rather than giving direct answers. It features a knowledge graph to visualize learning progress, conducts structured code reviews with severity tags, and integrates Supabase for auth/database and the Gemini API for AI generation.',
    coverImage: null,
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Gemini API'],
    liveUrl: null,
    githubUrl: null,
    year: 2026,
    featured: true,
    category: 'Full Stack / AI'
  },
  {
    id: 'pr-pilot',
    title: 'pr-pilot',
    subtitle: 'AI-driven PR reviewer GitHub App',
    description: 'A GitHub App that automatically reviews pull requests using the Gemini API, posting inline comments just like a human reviewer. It\'s engineered with a background task pattern to handle webhook timeouts, processes files concurrently to avoid API rate limits, and secures requests with HMAC-SHA256 verification—making it a robust, developer-friendly CI/CD addition.',
    coverImage: null,
    technologies: ['Node.js', 'GitHub Apps', 'Gemini API', 'CI/CD'],
    liveUrl: null,
    githubUrl: null,
    year: 2026,
    featured: true,
    category: 'CI/CD / Tooling'
  },
  {
    id: 'secretshield',
    title: 'SecretShield',
    subtitle: 'GitHub Action for secret scanning',
    description: 'A GitHub Action that scans repositories for accidentally committed secrets—such as API keys, tokens, and sensitive files—before they reach production. It\'s fully documented, easy for other developers to drop into their workflows, and shows strong attention to security automation and the developer experience in CI/CD pipelines.',
    coverImage: null,
    technologies: ['GitHub Actions', 'Security', 'CI/CD'],
    liveUrl: null,
    githubUrl: null,
    year: 2026,
    featured: true,
    category: 'Security'
  }
];