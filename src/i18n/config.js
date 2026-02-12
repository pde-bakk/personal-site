import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ✅ Import JSON files using ESM
import enHome from "./locales/en/home.json";
import enNavigation from "./locales/en/navigation.json";
import enCodingame from "./locales/en/codingame.json";
import enAbout from "./locales/en/about.json";

import nlHome from "./locales/nl/home.json";
import nlNavigation from "./locales/nl/navigation.json";
import nlCodingame from "./locales/nl/codingame.json";
import nlAbout from "./locales/nl/about.json";

import zhHome from "./locales/zh/home.json";
import zhNavigation from "./locales/zh/navigation.json";
import zhCodingame from "./locales/zh/codingame.json";
import zhAbout from "./locales/zh/about.json";

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        lng: "en",
        resources: {
            en: {
                home: enHome,
                navigation: enNavigation,
                codingame: enCodingame,
                about: enAbout,
            },
            nl: {
                home: nlHome,
                navigation: nlNavigation,
                codingame: nlCodingame,
                about: nlAbout,
            },
            zh: {
                home: zhHome,
                navigation: zhNavigation,
                codingame: zhCodingame,
                about: zhAbout,
            },
        },
        ns: ["home", "navigation", "codingame", "about"],
        defaultNS: "home",
        interpolation: {
            escapeValue: false,
        },
    });

i18n.languages = ["en", "nl", "zh", "es", "fr", "de"];

export default i18n;
