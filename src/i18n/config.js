import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enHome from "./locales/en/home.json";
import enNavigation from "./locales/en/navigation.json";
import enCodingame from "./locales/en/codingame.json";
import enAbout from "./locales/en/about.json";
import enExperience from "./locales/en/experience.json";
import enProjects from "./locales/en/projects.json";
import enSkills from "./locales/en/skills.json";
import enContact from "./locales/en/contact.json";

import nlHome from "./locales/nl/home.json";
import nlNavigation from "./locales/nl/navigation.json";
import nlCodingame from "./locales/nl/codingame.json";
import nlAbout from "./locales/nl/about.json";
import nlExperience from "./locales/nl/experience.json";
import nlProjects from "./locales/nl/projects.json";
import nlSkills from "./locales/nl/skills.json";
import nlContact from "./locales/nl/contact.json";

import zhHome from "./locales/zh/home.json";
import zhNavigation from "./locales/zh/navigation.json";
import zhCodingame from "./locales/zh/codingame.json";
import zhAbout from "./locales/zh/about.json";
import zhExperience from "./locales/zh/experience.json";
import zhProjects from "./locales/zh/projects.json";
import zhSkills from "./locales/zh/skills.json";
import zhContact from "./locales/zh/contact.json";

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
                experience: enExperience,
                projects: enProjects,
                skills: enSkills,
                contact: enContact,
            },
            nl: {
                home: nlHome,
                navigation: nlNavigation,
                codingame: nlCodingame,
                about: nlAbout,
                experience: nlExperience,
                projects: nlProjects,
                skills: nlSkills,
                contact: nlContact,
            },
            zh: {
                home: zhHome,
                navigation: zhNavigation,
                codingame: zhCodingame,
                about: zhAbout,
                experience: zhExperience,
                projects: zhProjects,
                skills: zhSkills,
                contact: zhContact,
            },
        },
        ns: ["home", "navigation", "codingame", "about", "experience", "projects", "skills", "contact"],
        defaultNS: "home",
        interpolation: {
            escapeValue: false,
        },
    });

i18n.languages = ["en", "nl", "zh"];

export default i18n;
