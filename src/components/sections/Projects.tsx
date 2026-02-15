import React from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ui/ProjectCard";
import TabToggle from "../ui/TabToggle";
import FadeInSection from "../ui/FadeInSection";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../data/projects";
import { useTabFilter } from "../../hooks/useTabFilter";

const Projects = () => {
  const { t } = useTranslation("projects");

  const tabs = [
    { key: "work", label: t("tab_work") },
    { key: "university", label: t("tab_university") },
  ];

  const { activeKey, setActiveKey, filteredItems } = useTabFilter(
    projects,
    tabs,
  );

  return (
    <section id="projects" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4">
        <SectionHeader title={t("title")} />
        <TabToggle
          tabs={tabs}
          activeKey={activeKey}
          onTabChange={setActiveKey}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((project, i) => (
            <div key={project.name} className={`fade-item stagger-${i + 1}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
