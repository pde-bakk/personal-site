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
        home: require("./locales/en/home.json"),
        navigation: require("./locales/en/navigation.json"),
        codingame: require("./locales/en/codingame.json"),
        about: require("./locales/en/about.json"),
      },
      nl: {
        home: require("./locales/nl/home.json"),
        navigation: require("./locales/nl/navigation.json"),
        codingame: require("./locales/nl/codingame.json"),
        about: require("./locales/nl/about.json"),
      },
      zh: {
        home: require("./locales/zh/home.json"),
        navigation: require("./locales/zh/navigation.json"),
        codingame: require("./locales/zh/codingame.json"),
        about: require("./locales/zh/about.json"),
      },
    },
    ns: ["home", "navigation, codingame", "about"],
    defaultNS: "home",
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

i18n.languages = ["en", "nl", "zh", "es", "fr", "de"];

export default i18n;
