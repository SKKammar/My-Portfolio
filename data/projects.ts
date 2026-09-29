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
}

export const placeholderProjects: Project[] = [
  // ─────────────────────────────────────────────────────────────
  // NEW: Arbiter
  // ─────────────────────────────────────────────────────────────
  {
    id: 'arbiter',
    title: 'Arbiter',
    subtitle: 'AI-powered financial reconciliation with adversarial dual-agent verification',
    description:
      'A financial reconciliation engine that matches bank statements against internal ledgers using a 4-pass deterministic funnel and adversarial dual-agent AI verification. Resolves 91.7% of transactions deterministically in under a second, then routes only true exceptions to a charitable Primary Agent and a blind, skeptical Audit Agent. Every decision is hash-chained into a tamper-evident SHA-256 audit trail, and a Self-Doubt Margin exposes the gap between engine claims and audited consensus. Benchmarked at 18.77s / 11.43 MB peak on 10,000 transactions with 97.8% precision.',
    coverImage: '/images/projects/arbiter.png',
    technologies: [
      'Python',
      'FastAPI',
      'Next.js 16',
      'TypeScript',
      'Gemini 2.0 Flash',
      'RapidFuzz',
      'decimal.Decimal',
      'SSE',
      'Tailwind CSS',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/Arbiter',
    year: 2026,
    featured: true,
    category: 'AI / FinTech',
    topMetric: { value: '97.8%', label: 'Precision' },
  },

  // ─────────────────────────────────────────────────────────────
  // UPDATED: DogNose (was 'dognose-scanner' — now shipping detail from guide)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dognose',
    title: 'DogNose',
    subtitle: 'Canine biometric identification from a smartphone photo',
    description:
      'A non-invasive biometric platform that identifies individual dogs from nose prints — like a fingerprint scanner for pets. A two-stage CV pipeline uses YOLOv8 to detect and crop the rhinarium, then a MegaDescriptor backbone fine-tuned with ArcFace loss extracts a 1536-d L2-normalized embedding. Matching runs through pgvector (HNSW + cosine) with dual-gated rules: similarity ≥ 0.56 and a 0.08 margin over the runner-up. Reached 0.9784 confidence in real-world tests after fixing an ArcFace geometry bug (5% → 64.9% training accuracy).',
    coverImage: '/images/projects/dognose.png',
    technologies: [
      'Python',
      'FastAPI',
      'Next.js 15',
      'TypeScript',
      'Supabase',
      'pgvector',
      'YOLOv8',
      'PyTorch',
      'ArcFace',
      'OpenCV',
      'Tailwind CSS',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/DogNose',
    year: 2026,
    featured: true,
    category: 'Computer Vision / Biometrics',
    topMetric: { value: '0.9784', label: 'Match Confidence' },
  },

  // ─────────────────────────────────────────────────────────────
  // UPDATED: Inventory & Order Management Platform
  // ─────────────────────────────────────────────────────────────
  {
    id: 'inventory-system',
    title: 'Inventory & Order Platform',
    subtitle: 'High-concurrency, multi-warehouse reservations with zero overselling',
    description:
      'A production-grade inventory and order platform that prevents overselling during flash sales and blocks duplicate billing from network retries. Optimistic locking (@Version) with a PostgreSQL CHECK invariant guarantees stock never goes negative under 50 concurrent checkout threads. A database-backed idempotency engine hashes checkout payloads with SHA-256 inside a REQUIRES_NEW transaction, returning 409 on replay. Multi-warehouse allocation is priority-routed with 15-minute expiring reservations, and every physical stock change lands in an append-only double-entry ledger. Verified end-to-end with Testcontainers.',
    coverImage: '/images/projects/inventory.png',
    technologies: [
      'Java 17',
      'Spring Boot 3.2',
      'PostgreSQL 15',
      'Spring Security',
      'JWT',
      'React 18',
      'Vite',
      'TanStack Query',
      'Flyway',
      'Testcontainers',
      'Docker',
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/InventoryManagement',
    year: 2026,
    featured: true,
    category: 'Backend / Distributed Systems',
    topMetric: { value: '50 threads', label: '0 oversells' },
  },

  // ─────────────────────────────────────────────────────────────
  // EXISTING (unchanged)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'inspectai-anomaly-detection',
    title: 'InspectAI',
    subtitle: 'Unsupervised industrial defect detection',
    description:
      'A computer vision system that detects surface defects in industrial images without any anomaly labels, trained only on normal samples. Compares a convolutional autoencoder baseline against PatchCore, reaching 1.00 image AUROC and 0.99 pixel AUROC on MVTec AD. Includes a Flask app for real-time inference.',
    coverImage: '/images/projects/anomaly-detection.png',
    technologies: ['Python', 'PyTorch', 'PatchCore', 'Flask', 'Computer Vision'],
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
    description:
      'A production-ready MLOps pipeline that predicts e-commerce customer churn. Instead of just chasing accuracy, it optimizes for *net profit* by factoring in retention offer costs against Customer Lifetime Value (CLV). It achieves 91% recall, includes a FastAPI backend, a Streamlit dashboard for monitoring, and is fully containerized with Docker—demonstrating end-to-end machine learning deployment.',
    coverImage: null,
    technologies: ['Python', 'FastAPI', 'Streamlit', 'Docker', 'MLOps'],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/ChurnOps',
    year: 2026,
    featured: true,
    category: 'MLOps',
    topMetric: { value: '91%', label: 'Recall' },
  },
  {
    id: 'codementor',
    title: 'CodeMentor',
    subtitle: 'AI-powered coding assistant with Socratic hints',
    description:
      'An AI-powered coding assistant built with Next.js 15 and TypeScript that uses a Socratic hint engine to guide users toward solutions rather than giving direct answers. It features a knowledge graph to visualize learning progress, conducts structured code reviews with severity tags, and integrates Supabase for auth/database and the Gemini API for AI generation.',
    coverImage: null,
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'Gemini API'],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/CodeMentor',
    year: 2026,
    featured: true,
    category: 'Full Stack / AI',
    topMetric: { value: 'WIP', label: 'Status' },
  },
  {
    id: 'pr-pilot',
    title: 'pr-pilot',
    subtitle: 'AI-driven PR reviewer GitHub App',
    description:
      "A GitHub App that automatically reviews pull requests using the Gemini API, posting inline comments just like a human reviewer. It's engineered with a background task pattern to handle webhook timeouts, processes files concurrently to avoid API rate limits, and secures requests with HMAC-SHA256 verification—making it a robust, developer-friendly CI/CD addition.",
    coverImage: null,
    technologies: ['Node.js', 'GitHub Apps', 'Gemini API', 'CI/CD'],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/pr-pilot',
    year: 2026,
    featured: true,
    category: 'CI/CD / Tooling',
    topMetric: { value: 'WIP', label: 'Status' },
  },
  {
    id: 'secretshield',
    title: 'SecretShield',
    subtitle: 'GitHub Action for secret scanning',
    description:
      "A GitHub Action that scans repositories for accidentally committed secrets—such as API keys, tokens, and sensitive files—before they reach production. It's fully documented, easy for other developers to drop into their workflows, and shows strong attention to security automation and the developer experience in CI/CD pipelines.",
    coverImage: null,
    technologies: ['GitHub Actions', 'Security', 'CI/CD'],
    liveUrl: null,
    githubUrl: 'https://github.com/SKKammar/SecretShield',
    year: 2026,
    featured: true,
    category: 'Security',
  },
];