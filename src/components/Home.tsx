import React from "react";
import Hero from "./sections/Hero";
import AboutSection from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import SkillsSection from "./sections/Skills";
import Competitive from "./sections/Competitive";
import Contact from "./sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Experience />
      <Projects />
      <SkillsSection />
      <Competitive />
      <Contact />
    </>
  );
};

export default Home;
