import React from "react";
import TechPill from "./TechPill";

interface TimelineItemProps {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
  tech: string[];
}

const TimelineItem = ({
  company,
  role,
  dates,
  bullets,
  tech,
}: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-10 border-l border-white/10 last:pb-0">
      <div className="timeline-dot absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-accent_purple" />
      <div className="mb-1">
        <h3 className="text-lg font-semibold text-white">{company}</h3>
        <p className="text-accent_purple font-medium text-sm">{role}</p>
        <p className="text-slate_body text-sm">{dates}</p>
      </div>
      <ul className="mt-3 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="text-sm text-slate_body flex gap-2">
            <span className="text-accent_purple mt-1 shrink-0">&#8227;</span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-3">
        {tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
