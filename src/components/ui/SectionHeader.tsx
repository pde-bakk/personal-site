import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <>
    <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
    <div className="w-16 h-1 bg-gradient-to-r from-accent_purple to-accent_cyan mb-10" />
  </>
);

export default SectionHeader;
