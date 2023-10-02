import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import peerdb_jpg from "../assets/peerdb.jpg";
// import { Link } from "react-scroll";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
import {useTranslation} from "react-i18next";


ReactGA.send({
  hitType: "pageview",
  page: "/home",
  title: "Home",
});

const Home = () => {
  const [t] = useTranslation("home");
  return (

    <div className="h-full w-full bg-background_colour">
      <div className="max-w-screen-lg pt-80 mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {t("title")}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {t("description")}
          </p>
          <div className="flex">
            <Link
              to="about"
              smooth={"true"}
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              {t("more")}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>

          <div>
            <img
              src={peerdb_jpg}
              alt={t("image-alt-text")}
              className="rounded-2xl mx-auto w-2/3 md:w-half"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
