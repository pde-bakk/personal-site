import { useTranslation } from "react-i18next";
import TimelineItem from "../ui/TimelineItem";
import TabToggle from "../ui/TabToggle";
import FadeInSection from "../ui/FadeInSection";
import SectionHeader from "../ui/SectionHeader";
import { experiences } from "../../data/experience";
import { useTabFilter } from "../../hooks/useTabFilter";
import React from "react";

const Experience = () => {
  const { t } = useTranslation("experience");

  const tabs = [
    { key: "work", label: t("tab_work") },
    { key: "education", label: t("tab_education") },
  ];

  const { activeKey, setActiveKey, filteredItems } = useTabFilter(
    experiences,
    tabs,
  );

  return (
    <section id="experience" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4">
        <SectionHeader title={t("title")} />
        <TabToggle
          tabs={tabs}
          activeKey={activeKey}
          onTabChange={setActiveKey}
        />

        <div>
          {filteredItems.map((exp, i) => (
            <div key={exp.company} className={`fade-item stagger-${i + 1}`}>
              <TimelineItem {...exp} />
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;
