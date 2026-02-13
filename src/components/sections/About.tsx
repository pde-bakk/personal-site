import { useTranslation } from "react-i18next";
import TechPill from "../ui/TechPill";
import FadeInSection from "../ui/FadeInSection";

const techStack = [
  "Go",
  "Rust",
  "Python",
  "C/C++",
  "TypeScript",
  "PostgreSQL",
  "Kubernetes",
  "Docker",
  "AWS",
  "gRPC",
  "Apache Parquet",
  "FastAPI",
  "Axum",
  "CI/CD",
  "Git",
];

const AboutSection = () => {
  const { t } = useTranslation("about");

  return (
    <section id="about" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">
          {t("section_title")}
        </h2>
        <div className="w-16 h-1 bg-accent_purple mb-8" />

        <div className="space-y-4 text-slate_body max-w-3xl mb-10">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">
          {t("tech_stack")}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default AboutSection;
