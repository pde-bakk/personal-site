import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import languageDropdown from "./languageDropdown";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [t] = useTranslation("navigation");

  return (
    <div className="w-full flex justify-between items-center px-4 bg-background_colour text-gray-300">
      <div>
        <h1 className="font-thin text-2xl italic font-serif">PeerDB</h1>
      </div>

      <nav>
        {/* menu */}
        <ul className="hidden md:flex gap-x-8">
          <li>
            <Link to="home">
              {t("home")}
            </Link>
          </li>
          <li>
            <Link to="about" >
              {t("about me")}
            </Link>
          </li>
          <li>
            <Link to="portfolio">
              {t("portfolio")}
            </Link>
          </li>
          <li>
            <Link to="codingame">
              {t("codingame")}
            </Link>
          </li>
          <li>
            <Link to="work">
              {t("work")}
            </Link>
          </li>
          <li>
            <Link to="skills">
              {t("skills")}
            </Link>
          </li>
          <li>{languageDropdown()}</li>
          <li>
            <a
              href="https://www.linkedin.com/in/peer-de-bakker"
              aria-label={"LinkedIn"}
            >
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a href="https://github.com/pde-bakk" aria-label={"GitHub"}>
              <FaGithub size={25} />
            </a>
          </li>
        </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-background_colour flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
            >
              {t("home")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="about"
            >
              {t("about me")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="portfolio"
            >
              {t("portfolio")}
            </Link>
            {/*<Link to="/portfolio">Portfolio</Link>*/}
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="codingame"
            >
              {t("codingame")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="work"
            >
              {t("work")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
            >
              {t("skills")}
            </Link>
          </li>
          <li>{languageDropdown()}</li>
          <li className="py-6 text-4xl">
            <a
              href="https://www.linkedin.com/in/peer-de-bakker"
              aria-label={"LinkedIn"}
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="py-6 text-4xl">
            <a href="https://github.com/pde-bakk" aria-label={"GitHub"}>
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
