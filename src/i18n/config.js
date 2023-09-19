import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LngDetector from 'i18next-browser-languagedetector';

i18n
  // .use(LngDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en", // if you're using a language detector, do not define the lng
    // option
    resources: {
      en: {
        navigation: require("./locales/en/navigation.json"),
        codingame: require("./locales/en/codingame.json"),
      },
      nl: {
        navigation: require("./locales/nl/navigation.json"),
        codingame: require("./locales/nl/codingame.json"),
      },
      zh: {
        navigation: require("./locales/zh/navigation.json"),
        codingame: require("./locales/zh/codingame.json"),
      },
    },
    ns: ["navigation, codingame"],
    defaultNS: "navigation",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

i18n.languages = ["en", "nl", "zh", "es", "fr", "de"];

export default i18n;
