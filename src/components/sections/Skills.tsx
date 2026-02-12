import { useInView } from "../../hooks/useInView";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Go", "Rust", "Python", "C/C++", "TypeScript", "SQL", "Assembly"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "Apache Parquet", "Arrow", "FastAPI", "Axum", "gRPC", "REST"],
  },
  {
    title: "Infrastructure",
    skills: ["Kubernetes", "Docker", "AWS", "CI/CD", "GitHub Actions", "Terraform", "Linux"],
  },
  {
    title: "Security",
    skills: ["Reverse Engineering", "Binary Exploitation", "Cryptography", "Ghidra", "Penetration Testing"],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="skills" className="bg-background_colour py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-16 h-1 bg-accent_purple mb-10" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-accent_purple mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-slate_body text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent_purple/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
