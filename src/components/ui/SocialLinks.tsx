import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SOCIAL_LINKS } from "../../data/social";

interface SocialLinksProps {
  iconSize?: number;
  className?: string;
  showLabels?: boolean;
}

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: HiMail,
} as const;

const SocialLinks = ({
  iconSize = 24,
  className = "",
  showLabels = false,
}: SocialLinksProps) => (
  <div className={`flex gap-4 ${className}`}>
    {Object.entries(SOCIAL_LINKS).map(([key, { url, label }]) => {
      const Icon = icons[key as keyof typeof icons];
      const isExternal = url.startsWith("http");
      return (
        <a
          key={key}
          href={url}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
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
