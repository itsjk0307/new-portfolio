import React from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { useHeroContainerProps, useHeroItemProps } from "../motion/heroMotion";
import "./Hero.css";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

function Hero() {
  const { t } = useLanguage();
  const resumeUrl = t("experience.resumeUrl");
  const container = useHeroContainerProps();
  const item = useHeroItemProps();

  return (
    <section className="hero" id="top">
      <motion.div className="section-inner hero__inner" {...container}>
        <motion.h1 className="hero__name" {...item}>
          {t("hero.name")}
        </motion.h1>
        <motion.p className="hero__role" {...item}>
          {t("hero.role")}
        </motion.p>
        <motion.p className="hero__tagline" {...item}>
          {t("hero.tagline")}
        </motion.p>
        <motion.div className="hero__actions" {...item}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToId("projects")}
          >
            {t("hero.ctaProjects")}
            <FiArrowDownRight aria-hidden />
          </button>
          <a
            className="btn btn-ghost"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload aria-hidden />
            {t("hero.ctaResume")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
