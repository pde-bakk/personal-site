import TechPill from "./TechPill";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  icon?: string;
  problem: string;
  approach: string;
  tech: string[];
  link: string;
}

const ProjectCard = ({ name, icon, problem, approach, tech, link }: ProjectCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20">
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <p className="text-sm text-slate_body mb-2">
        <span className="text-accent_purple font-medium">Problem:</span> {problem}
      </p>
      <p className="text-sm text-slate_body mb-4">
        <span className="text-accent_cyan font-medium">Approach:</span> {approach}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-accent_purple hover:text-accent_cyan transition-colors"
      >
        <FaGithub /> View Code
      </a>
    </div>
  );
};

export default ProjectCard;
