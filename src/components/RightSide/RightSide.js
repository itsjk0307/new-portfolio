import React from "react";
import Hero from "../Hero/Hero";
import Experience from "../Experience/Experience";
import ProjectsSection from "../Projects/ProjectsSection";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import { useLanguage } from "../../context/LanguageContext";
import "./RightSide.css";

function RightSide() {
  const { t } = useLanguage();

  return (
    <main className="home-main">
      <Hero />
      <ProjectsSection preview />
      <Skills />
      <Experience />
      <Contact />
      <footer className="site-footer">
        <div className="section-inner">
          <p className="site-footer__note">{t("footer.note")}</p>
        </div>
      </footer>
    </main>
  );
}

export default RightSide;
