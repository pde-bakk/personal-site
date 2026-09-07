import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../data/social";

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
  showLabels?: boolean;
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
} as const;

const SocialLinks = ({
  iconSize = 24,
  className = "",
  showLabels = false,
}: SocialLinksProps) => (
  <div className={`flex gap-4 ${className}`}>
    {Object.entries(SOCIAL_LINKS).map(([key, { url, label }]) => {
      const Icon = icons[key as keyof typeof icons];
      return (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center gap-2 text-slate_body hover:text-accent_purple transition-colors"
        >
          <Icon size={iconSize} />
          {showLabels && <span>{label}</span>}
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
