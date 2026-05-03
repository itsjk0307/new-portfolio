import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollFadeProps } from "../motion/scrollReveal";
import "./Skills.css";

const GROUP_KEYS = ["aiMl", "backend", "frontend", "tools"];

function Skills() {
  const { t } = useLanguage();
  const scrollFade = useScrollFadeProps();

  return (
    <motion.section className="skills-section" id="skills" {...scrollFade}>
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </div>

        <div className="skills-grid">
          {GROUP_KEYS.map((key) => {
            const itemsRaw = t(`skills.groups.${key}.items`, {
              returnObjects: true,
            });
            const items = Array.isArray(itemsRaw) ? itemsRaw : [];
            return (
              <div className="skills-card" key={key}>
                <h3 className="skills-card__title">
                  {t(`skills.groups.${key}.title`)}
                </h3>
                <ul className="skills-card__list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
