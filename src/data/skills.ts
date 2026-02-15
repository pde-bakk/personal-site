export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillGroup {
  titleKey: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: "languages",
    icon: "💻",
    skills: [
      { name: "Go", level: 95 },
      { name: "Rust", level: 85 },
      { name: "Python", level: 90 },
      { name: "C/C++", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Assembly", level: 55 },
    ],
  },
  {
    titleKey: "data",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Apache Parquet", level: 85 },
      { name: "Arrow", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Axum", level: 75 },
      { name: "gRPC", level: 80 },
      { name: "REST", level: 95 },
    ],
  },
  {
    titleKey: "infrastructure",
    icon: "☁️",
    skills: [
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 95 },
      { name: "AWS", level: 80 },
      { name: "CI/CD", level: 90 },
      { name: "GitHub Actions", level: 90 },
      { name: "Terraform", level: 75 },
      { name: "Linux", level: 90 },
    ],
  },
  {
    titleKey: "security",
    icon: "🔒",
    skills: [
      { name: "Reverse Engineering", level: 75 },
      { name: "Binary Exploitation", level: 70 },
      { name: "Cryptography", level: 70 },
      { name: "Ghidra", level: 65 },
      { name: "Penetration Testing", level: 70 },
    ],
  },
];
