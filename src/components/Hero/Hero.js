import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import "./Hero.css";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="section-inner hero__inner">
        <h1 className="hero__name">{t("hero.name")}</h1>
        <p className="hero__role">{t("hero.role")}</p>
        <p className="hero__tagline">{t("hero.tagline")}</p>
        <div className="hero__actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToId("projects")}
          >
            {t("hero.ctaProjects")}
            <FiArrowDownRight aria-hidden />
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => scrollToId("contact")}
          >
            {t("hero.ctaContact")}
          </button>
        </div>
        <p className="hero__hint">{t("hero.scrollHint")}</p>
      </div>
    </section>
  );
}

export default Hero;
