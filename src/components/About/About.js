import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./About.css";

const BULLET_KEYS = [0, 1, 2, 3];

function About() {
  const { t } = useLanguage();

  return (
    <section className="about-section" id="about">
      <div className="section-inner">
        <header className="section-head">
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle about-section__lead">{t("about.lead")}</p>
        </header>

        <ul className="about-list">
          {BULLET_KEYS.map((i) => (
            <li className="about-list__item" key={i}>
              <div className="about-list__title">
                {t(`about.bullets.${i}.title`)}
              </div>
              <p className="about-list__text">{t(`about.bullets.${i}.text`)}</p>
            </li>
          ))}
        </ul>

        <p className="about-section__closing">{t("about.closing")}</p>
      </div>
    </section>
  );
}

export default About;
