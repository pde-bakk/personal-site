import TechPill from "../ui/TechPill";
import { useInView } from "../../hooks/useInView";

const techStack = [
  "Go", "Rust", "Python", "C/C++", "TypeScript",
  "PostgreSQL", "Kubernetes", "Docker", "AWS", "gRPC",
  "Apache Parquet", "FastAPI", "Axum", "CI/CD", "Git",
];

const AboutSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="bg-background_colour py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold text-white mb-2">About</h2>
        <div className="w-16 h-1 bg-accent_purple mb-8" />

        <div className="space-y-4 text-slate_body max-w-3xl mb-10">
          <p>
            My tech journey started at Codam Amsterdam (42 Network), where I wrote my first lines of
            code in C. After finishing the core curriculum, I interned and worked at Panartis, building
            backend systems for art collection databases. I then pursued my Master's at 42 Paris,
            specializing in AI and Cybersecurity.
          </p>
          <p>
            Now I'm a Software Engineer and Data Engineer at Auguria.io, where I build data clustering
            pipelines in Go, Python, and Rust that process billions of records to enable anomaly detection.
            I manage Kubernetes deployments for tens of microservices, administer PostgreSQL databases,
            and maintain CI/CD pipelines and AWS infrastructure.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
