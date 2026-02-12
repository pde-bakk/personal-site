import { useState } from "react";
import TimelineItem from "../ui/TimelineItem";
import TabToggle from "../ui/TabToggle";
import { useInView } from "../../hooks/useInView";

const experiences = [
  {
    company: "Auguria.io",
    role: "Software Engineer & Data Engineer",
    dates: "2023 — Present",
    category: "work" as const,
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
    category: "education" as const,
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
    category: "work" as const,
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
    category: "education" as const,
    bullets: [
      "Peer-to-peer learning curriculum: built everything from scratch in C, then C++",
      "Wrote a custom nginx web server, reimplemented C++ STL containers, built a Kubernetes cluster",
      "Implemented cryptographic algorithms: MD5, SHA256, DES, RSA",
    ],
    tech: ["C", "C++", "Docker", "Kubernetes", "Networking"],
  },
];

const TABS = ["Work", "Education"];

const Experience = () => {
  const { ref, isVisible } = useInView();
  const [activeTab, setActiveTab] = useState("Work");

  const filtered = experiences.filter(
    (exp) => exp.category === activeTab.toLowerCase()
  );

  return (
    <section id="experience" className="bg-background_colour py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-accent_purple to-accent_cyan mb-10" />

        <TabToggle tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

        <div>
          {filtered.map((exp, i) => (
            <div key={exp.company} className={`fade-item stagger-${i + 1}`}>
              <TimelineItem {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
