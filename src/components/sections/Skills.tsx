import React from "react";
import { useTranslation } from "react-i18next";
import FadeInSection from "../ui/FadeInSection";
import SectionHeader from "../ui/SectionHeader";
import { skillGroups } from "../../data/skills";
import { useInView } from "../../hooks/useInView";

const SkillBar = ({
  name,
  level,
  delay,
  animate,
}: {
  name: string;
  level: number;
  delay: number;
  animate: boolean;
}) => (
  <div className="mb-3">
    <div className="flex justify-between text-sm mb-1">
      <span className="text-slate_body">{name}</span>
      <span className="text-accent_purple font-mono text-xs">{level}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-accent_purple to-accent_cyan transition-all duration-1000 ease-out"
        style={{
          width: animate ? `${level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  const { t } = useTranslation("skills");
  const { ref, isVisible } = useInView();

  return (
    <section id="skills" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4">
        <SectionHeader title={t("title")} />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.titleKey}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-accent_purple/30"
            >
              <h3 className="text-lg font-semibold text-accent_purple mb-5 flex items-center gap-2">
                <span>{group.icon}</span>
                {t(group.titleKey)}
              </h3>
              {group.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 80}
                  animate={isVisible}
                />
              ))}
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default SkillsSection;
