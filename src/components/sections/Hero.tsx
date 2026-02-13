import { useTranslation } from "react-i18next";
import MetricCard from "../ui/MetricCard";
import SocialLinks from "../ui/SocialLinks";
import FadeInSection from "../ui/FadeInSection";
import peerdb_jpg from "../../assets/peerdb.jpg";

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <section id="hero" className="min-h-screen flex items-center bg-background_colour">
      <FadeInSection className="max-w-5xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-accent_purple font-mono text-sm mb-2">{t("greeting")}</p>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate_body mb-6">
              {t("subtitle")}
            </h2>
            <p className="text-slate_body max-w-lg mb-8">
              {t("description")}
            </p>
            <SocialLinks />
          </div>
          <div className="flex-shrink-0">
            <img
              src={peerdb_jpg}
              alt={t("image-alt-text")}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-accent_purple/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
          <MetricCard value="Billions" label={t("metric_records")} />
          <MetricCard value="Top 0.1%" label={t("metric_codingame")} />
          <MetricCard value="3 Languages" label={t("metric_languages")} />
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;
