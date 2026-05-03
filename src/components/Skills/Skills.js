import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Skills.css";

const GROUP_KEYS = ["aiMl", "frontend", "backend", "tools"];

function Skills() {
  const { t } = useLanguage();

  return (
    <section className="skills-section" id="skills">
      <div className="section-inner">
        <header className="section-head">
          <h2 className="section-title">{t("skills.title")}</h2>
          <p className="section-subtitle">{t("skills.subtitle")}</p>
        </header>

        <div className="skills-grid">
          {GROUP_KEYS.map((key) => {
            const itemsRaw = t(`skills.groups.${key}.items`);
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
    </section>
  );
}

export default Skills;
