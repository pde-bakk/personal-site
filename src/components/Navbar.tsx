import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import LanguageDropdown from "./languageDropdown";

const navItems = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Projects", to: "projects" },
  { label: "Skills", to: "skills" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background_colour/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="font-bold text-xl text-white">
            PdB<span className="text-accent_purple">.</span>
          </h1>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-x-6">
          {navItems.map((item) => (
            <li key={item.to} className="px-0">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="text-sm text-slate_body hover:text-accent_purple transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="px-0">
            <LanguageDropdown />
          </li>
          <li className="px-0">
            <a
              href="https://www.linkedin.com/in/peer-de-bakker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate_body hover:text-accent_purple transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
          </li>
          <li className="px-0">
            <a
              href="https://github.com/pde-bakk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate_body hover:text-accent_purple transition-colors"
            >
              <FaGithub size={18} />
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10 text-gray-300 cursor-pointer">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-background_colour flex flex-col justify-center items-center gap-8"
          }
        >
          {navItems.map((item) => (
            <li key={item.to} className="text-3xl">
              <Link
                onClick={closeNav}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-60}
                className="text-gray-300 hover:text-accent_purple transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <LanguageDropdown />
          </li>
          <li className="flex gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/peer-de-bakker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-accent_purple"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pde-bakk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-accent_purple"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
