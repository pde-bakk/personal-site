import { useState } from "react";
import TechPill from "./TechPill";
import MediaModal from "./MediaModal";
import { FaGithub, FaPlay } from "react-icons/fa";

interface ProjectCardProps {
  name: string;
  icon?: string;
  problem: string;
  approach: string;
  tech: string[];
  link: string;
  media?: { type: "image" | "video"; src: string };
}

const ProjectCard = ({ name, icon, problem, approach, tech, link, media }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 hover:border-accent_purple/40">
        {media && (
          <button
            type="button"
            aria-label="View project media"
            onClick={() => setShowModal(true)}
            className="relative w-full overflow-hidden rounded-t-xl cursor-pointer"
          >
            {media.type === "image" ? (
              <img
                src={media.src}
                alt={name}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="relative">
                <video src={media.src} className="w-full h-40 object-cover" muted />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <FaPlay className="text-white/80 text-2xl" />
                </div>
              </div>
            )}
          </button>
        )}
        <div className="p-6">
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
      </div>

      {showModal && media && (
        <MediaModal
          media={media}
          alt={name}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
