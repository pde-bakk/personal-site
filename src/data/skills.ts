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
      { name: "Python", level: 95 },
      { name: "Go", level: 90 },
      { name: "Rust", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "C/C++", level: 80 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    titleKey: "ai",
    icon: "🤖",
    skills: [
      { name: "GenAI / LLM", level: 90 },
      { name: "Semantic Search", level: 90 },
      { name: "Knowledge Graphs", level: 85 },
      { name: "Linked Data", level: 80 },
      { name: "ML / DL", level: 75 },
    ],
  },
  {
    titleKey: "data",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Apache Parquet", level: 85 },
      { name: "Arrow / DataFusion", level: 80 },
      { name: "Neo4j", level: 75 },
      { name: "FastAPI", level: 85 },
      { name: "gRPC", level: 80 },
    ],
  },
  {
    titleKey: "infrastructure",
    icon: "☁️",
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Azure / AKS", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 95 },
      { name: "CI/CD", level: 90 },
      { name: "Linux", level: 90 },
    ],
  },
];
