import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
  { code: "nl", name: "Dutch", flag: "\uD83C\uDDF3\uD83C\uDDF1" },
  { code: "zh", name: "Chinese", flag: "\uD83C\uDDE8\uD83C\uDDF3" },
];

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex justify-center w-full rounded-md bg-opacity-100 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        >
          {languages.find((lang) => lang.code === i18n.language)?.flag}
          <svg
            className={`-mr-1 ml-2 h-5 w-5 ${isDropdownOpen ? "transform rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-blue-900 text-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((language) => (
              <button
                type="button"
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="block w-full px-4 py-2 text-sm hover:bg-gray-800 text-left"
                role="menuitem"
              >
                {language.flag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
