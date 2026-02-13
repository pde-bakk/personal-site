import { useTranslation } from "react-i18next";
import FadeInSection from "../ui/FadeInSection";
import SocialLinks from "../ui/SocialLinks";

const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <section id="contact" className="bg-background_colour py-20">
      <FadeInSection className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">{t("title")}</h2>
        <div className="w-16 h-1 bg-accent_purple mx-auto mb-8" />

        <p className="text-slate_body mb-2">{t("roles")}</p>
        <p className="text-slate_body mb-8">{t("location")}</p>

        <SocialLinks iconSize={20} showLabels className="justify-center mb-8" />
      </FadeInSection>
    </section>
  );
};

export default Contact;
