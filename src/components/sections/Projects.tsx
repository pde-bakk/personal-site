import ProjectCard from "../ui/ProjectCard";
import { useInView } from "../../hooks/useInView";

const projects = [
  {
    name: "Data Clustering Pipeline",
    icon: "📊",
    problem: "Process billions of records for anomaly detection at scale",
    approach: "Multi-language pipeline with Go orchestration, Rust compute, Python ML — columnar storage via Parquet/Arrow",
    tech: ["Go", "Rust", "Python", "Parquet", "gRPC"],
    link: "https://github.com/pde-bakk",
  },
  {
    name: "Custom Nginx",
    icon: "🌐",
    problem: "Understand HTTP servers from the ground up",
    approach: "Built a lightweight, RFC-compliant web server handling CGI, chunked transfer, and virtual hosts",
    tech: ["C++", "HTTP", "Sockets", "CGI"],
    link: "https://github.com/42pde-bakk/webserv.git",
  },
  {
    name: "Cryptography Suite",
    icon: "🔐",
    problem: "Learn cryptographic primitives by implementing them",
    approach: "Reimplemented MD5, SHA256, DES, and RSA algorithms from specification",
    tech: ["C", "Cryptography", "Math"],
    link: "https://github.com/42pde-bakk/ft_ssl.git",
  },
  {
    name: "Gomoku AI",
    icon: "🧠",
    problem: "Create an AI that beats humans at Gomoku",
    approach: "Minimax algorithm with alpha-beta pruning and heuristic board evaluation",
    tech: ["C++", "AI", "Game Theory"],
    link: "https://github.com/42pde-bakk/gomoku.git",
  },
  {
    name: "Reverse Engineering",
    icon: "🕵️",
    problem: "Exploit vulnerabilities in compiled binaries",
    approach: "Reverse engineered C/C++ binaries using Ghidra, developed buffer overflow and format string exploits",
    tech: ["Assembly", "Ghidra", "C", "Security"],
    link: "https://github.com/42pde-bakk/rainfall.git",
  },
  {
    name: "Pong Tournament",
    icon: "🏓",
    problem: "Build a full-stack multiplayer game platform",
    approach: "Real-time pong with matchmaking, guilds, chat, and friend system",
    tech: ["TypeScript", "WebSockets", "Docker"],
    link: "https://github.com/42pde-bakk/ft_transcendence.git",
  },
];

const Projects = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="projects" className="bg-background_colour py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 fade-in-section ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="w-16 h-1 bg-accent_purple mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
