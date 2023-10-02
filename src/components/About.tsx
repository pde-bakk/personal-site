import React from "react";
import useTitle from "./UseTitle";
import { useTranslation } from "react-i18next";
import graduation from "../assets/Codam/graduation.png";

const About: React.FC = () => {
  const { t } = useTranslation("about");
  useTitle(t("title"));
  return (
      <div
          // name="about"
          id="about"
          className="w-full h-screen bg-background_colour text-gray-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            {t("title")}
          </p>
          <div className="py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
            <div className="max-w-[1000px] w-full text-center gap-8 px-4">
              <p>{t("whoami")}</p>
              <p>{t("p1")}</p>
              <br />
              <p>{t("p2")}</p>
            </div>
          </div>

          <div>
            <img
                src={graduation}
                alt={t("image-alt-text")}
                className="rounded-2xl mx-auto w-2/3 md:w-half"
            />
          </div>
        </div>
      </div>
  );
};

export default About;
