import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollFadeProps } from "../motion/scrollReveal";
import "./Experience.css";

function Experience() {
  const { t } = useLanguage();

  const items = useMemo(() => {
    const raw = t("experience.items", { returnObjects: true });
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  const scrollFade = useScrollFadeProps();

  return (
    <motion.section className="experience-section" id="experience" {...scrollFade}>
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle">{t("experience.subtitle")}</p>
        </div>

        <div className="experience-grid">
          {items.map((item) => {
            const bullets = Array.isArray(item.bullets) ? item.bullets : [];
            return (
              <article className="experience-card" key={item.id}>
                <div className="experience-card__head">
                  <h3 className="experience-card__title">{item.title}</h3>
                  <div className="experience-card__company">{item.company}</div>
                  <div className="experience-card__period">{item.period}</div>
                </div>
                {bullets.length ? (
                  <ul className="experience-card__bullets">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="experience-card__desc">{item.description}</p>
                )}
                <div className="experience-card__tags">
                  {(item.skills || []).map((skill) => (
                    <span className="experience-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="experience-resume">
          <a
            className="text-link"
            href={t("experience.resumeUrl")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("experience.resume")}
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;
