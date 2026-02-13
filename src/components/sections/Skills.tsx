import { useTranslation } from "react-i18next";
import FadeInSection from "../ui/FadeInSection";
import { skillGroups } from "../../data/skills";

const SkillsSection = () => {
  const { t } = useTranslation("skills");

  return (
    <section id="skills" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-2">{t("title")}</h2>
        <div className="w-16 h-1 bg-accent_purple mb-10" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div key={group.titleKey}>
              <h3 className="text-lg font-semibold text-accent_purple mb-4">
                {t(group.titleKey)}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-slate_body text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent_purple/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default SkillsSection;
