export interface SkillGroup {
  titleKey: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    titleKey: "languages",
    skills: ["Go", "Rust", "Python", "C/C++", "TypeScript", "SQL", "Assembly"],
  },
  {
    titleKey: "data",
    skills: ["PostgreSQL", "Apache Parquet", "Arrow", "FastAPI", "Axum", "gRPC", "REST"],
  },
  {
    titleKey: "infrastructure",
    skills: ["Kubernetes", "Docker", "AWS", "CI/CD", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    titleKey: "security",
    skills: ["Reverse Engineering", "Binary Exploitation", "Cryptography", "Ghidra", "Penetration Testing"],
  },
];
