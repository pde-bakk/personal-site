import React from "react";
import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className = "" }: FadeInSectionProps) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
