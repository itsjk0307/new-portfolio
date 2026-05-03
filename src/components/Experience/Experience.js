import React, { useMemo } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Experience.css";

function Experience() {
  const { t } = useLanguage();

  const items = useMemo(() => {
    const raw = t("experience.items");
    return Array.isArray(raw) ? raw : [];
  }, [t]);

  return (
    <section className="experience-section" id="experience">
      <div className="section-inner">
        <header className="section-head">
          <h2 className="section-title">{t("experience.title")}</h2>
        </header>

        <div className="experience-grid">
          {items.map((item) => (
            <article className="experience-card" key={item.id}>
              <h3 className="experience-card__title">{item.title}</h3>
              <div className="experience-card__company">{item.company}</div>
              <div className="experience-card__period">{item.period}</div>
              <p className="experience-card__desc">{item.description}</p>
              <div className="experience-card__tags">
                {(item.skills || []).map((skill) => (
                  <span className="experience-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
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
    </section>
  );
}

export default Experience;
