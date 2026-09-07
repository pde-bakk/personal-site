export interface Experience {
  company: string;
  role: string;
  dates: string;
  category: "work" | "education";
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "y.Digital",
    role: "AI Engineer",
    dates: "2026 — Present",
    category: "work",
    bullets: [
      "Realizing and integrating AI initiatives and software engineering projects",
      "Building a Semantic Search solution for Dienst Stelsel Omgevingswet using agentic AI over knowledge graphs",
      "Developing the next increment of RoboRecruiter, an AI-driven recruitment platform running for 9+ years",
      "Shipping backlog components for Ally, the in-house AI platform",
    ],
    tech: [
      "Python",
      "GenAI",
      "Knowledge Graphs",
      "Semantic Search",
      "Azure",
    ],
  },
  {
    company: "Auguria.io",
    role: "Lead Software Engineer",
    dates: "2023 — 2026",
    category: "work",
    bullets: [
      "Built a data clustering pipeline in Go, Python, and Rust processing billions of records for anomaly detection",
      "Used Apache Parquet and Arrow for columnar storage with AWS Athena for analytical queries",
      "Migrated NATS messaging to gRPC; built APIs in Python FastAPI and Rust Axum/Utoipa",
      "Architected Kubernetes deployments for dozens of microservices with zero-downtime releases",
      "Administered PostgreSQL at scale with query profiling, backup automation, and performance monitoring",
      "Managed AWS infrastructure (EC2, S3, RDS, IAM, SQS) and DataFusion-based high-performance processing",
    ],
    tech: [
      "Go",
      "Rust",
      "Python",
      "PostgreSQL",
      "Kubernetes",
      "AWS",
      "gRPC",
      "Parquet",
    ],
  },
  {
    company: "42 Paris",
    role: "RNCP 7 — Système d'information et réseaux",
    dates: "2022 — 2024",
    category: "education",
    bullets: [
      "WO-level credential specializing in information systems and networks",
      "Focused on AI/ML and Cybersecurity tracks",
      "Reverse engineered C/C++ binaries and developed exploit chains",
      "Built Gomoku AI using minimax with alpha-beta pruning",
      "Finished 20th out of 4200 in Codingame Summer Challenge using C++ profiling and optimization",
    ],
    tech: ["C++", "Python", "Assembly", "Machine Learning"],
  },
  {
    company: "Panartis / Authentication in Art",
    role: "Backend Developer",
    dates: "2021 — 2022",
    category: "work",
    bullets: [
      "Built backend services in Laravel (PHP) and .NET (C#) for an international art authentication platform",
      "Designed Neo4j graph schemas for provenance chains and expert attribution networks",
      "Built serverless Azure Functions APIs for CAfA expert pool, publications, and conference workflows",
      "Owned the release pipeline for a 2–4 person engineering team with build and deployment automation",
    ],
    tech: ["PHP", "C#", "Neo4j", "Azure", "Docker"],
  },
  {
    company: "Codam Coding College (42 Network)",
    role: "Software Engineering — Core & Advanced",
    dates: "2019 — 2022",
    category: "education",
    bullets: [
      "Codam Core: peer-to-peer software engineering curriculum built from scratch in C, then C++",
      "Codam Advanced: Cybersecurity and AI & Algorithms specialization",
      "Wrote a custom nginx web server, reimplemented C++ STL containers, built a Kubernetes cluster",
      "Implemented cryptographic algorithms: MD5, SHA256, DES, RSA",
    ],
    tech: ["C", "C++", "Docker", "Kubernetes", "Networking"],
  },
  {
    company: "Amsterdam at Home Makelaars",
    role: "Data Scientist (Part-time)",
    dates: "2019 — 2025",
    category: "work",
    bullets: [
      "Analyzed Amsterdam housing-market trends to support pricing strategies for property listings",
      "Designed automated neighborhood-level market reports revealing trends competitors missed",
      "Built Python scrapers (BeautifulSoup, Scrapy, Selenium) for competitive intelligence",
      "Automated workflows with VBA macros, eliminating hours of repetitive data entry weekly",
    ],
    tech: ["Python", "Excel", "Access", "Scrapy", "Selenium"],
  },
];
