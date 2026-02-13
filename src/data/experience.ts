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
    company: "Auguria.io",
    role: "Software Engineer & Data Engineer",
    dates: "2023 — Present",
    category: "work",
    bullets: [
      "Built a data clustering pipeline in Go, Python, and Rust processing billions of records for anomaly detection",
      "Designed columnar storage layer with Apache Parquet and Arrow for high-throughput analytics",
      "Built APIs in Python FastAPI and Rust Axum serving real-time query results",
      "Managed Kubernetes deployments for tens of microservices with zero-downtime releases",
      "Administered PostgreSQL databases with billions of records and optimized query performance",
      "Maintained CI/CD pipelines with GitHub Actions and managed AWS infrastructure",
    ],
    tech: ["Go", "Rust", "Python", "PostgreSQL", "Kubernetes", "AWS", "gRPC", "Parquet"],
  },
  {
    company: "42 Paris",
    role: "Master's — AI & Cybersecurity",
    dates: "2022 — 2023",
    category: "education",
    bullets: [
      "Specialized in AI/ML and Cybersecurity tracks",
      "Reverse engineered C/C++ binaries and developed exploit chains",
      "Built Gomoku AI using minimax with alpha-beta pruning",
      "Finished 20th out of 4200 in Codingame Summer Challenge using C++ profiling and optimization",
    ],
    tech: ["C++", "Python", "Assembly", "Machine Learning"],
  },
  {
    company: "Panartis",
    role: "Backend Developer",
    dates: "2021 — 2022",
    category: "work",
    bullets: [
      "Built backend systems for unified art collection database platform",
      "Maintained DevOps infrastructure before transitioning to Azure with third-party contractors",
      "Started as 6-month intern, extended to part-time alongside education",
    ],
    tech: ["Python", "Docker", "Azure", "REST APIs"],
  },
  {
    company: "Codam Amsterdam (42 Network)",
    role: "Bachelor's — Computer Science",
    dates: "2019 — 2022",
    category: "education",
    bullets: [
      "Peer-to-peer learning curriculum: built everything from scratch in C, then C++",
      "Wrote a custom nginx web server, reimplemented C++ STL containers, built a Kubernetes cluster",
      "Implemented cryptographic algorithms: MD5, SHA256, DES, RSA",
    ],
    tech: ["C", "C++", "Docker", "Kubernetes", "Networking"],
  },
];

export const EXPERIENCE_TABS = ["Work", "Education"];
