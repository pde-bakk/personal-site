import React from "react";
interface TechPillProps {
  label: string;
}

const TechPill = ({ label }: TechPillProps) => {
  return (
    <span className="px-3 py-1 text-sm font-mono bg-white/5 border border-white/10 rounded-full text-slate_body">
      {label}
    </span>
  );
};

export default TechPill;
