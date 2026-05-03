import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollFadeProps } from "../motion/scrollReveal";
import { projectsData } from "./projectsData";
import PortfolioProjectCard from "./PortfolioProjectCard";
import "./ProjectsSection.css";

const ORDER = ["ai", "data", "web"];

const SECTION_KEY = {
  ai: "sectionAi",
  data: "sectionDs",
  web: "sectionWeb",
};

function ProjectsSection({ preview = false, variant = "home" }) {
  const { t } = useLanguage();

  const labels = {
    summary: t("projects.summaryLabel"),
    tech: t("projects.techLabel"),
    demo: t("projects.demo"),
    github: t("projects.source"),
    details: t("projects.details"),
  };

  const grouped = ORDER.map((cat) => ({
    category: cat,
    title: t(`projects.${SECTION_KEY[cat]}`),
    items: projectsData.filter((p) => p.category === cat),
  }));

  const sliceItems = (items) => (preview ? items.slice(0, 2) : items);

  const isPage = variant === "page";
  const scrollFade = useScrollFadeProps();

  return (
    <motion.section
      className="projects-section"
      id={isPage ? undefined : "projects"}
      {...scrollFade}
    >
      <div className="section-inner">
        {isPage ? (
          <div className="section-head section-head--page">
            <Link className="back-link" to="/">
              {t("projectsPage.backHome")}
            </Link>
            <h1 className="section-title section-title--xl">
              {t("projectsPage.title")}
            </h1>
            <p className="section-subtitle">{t("projectsPage.subtitle")}</p>
          </div>
        ) : (
          <div className="section-head">
            <h2 className="section-title">{t("projects.title")}</h2>
            <p className="section-subtitle">{t("projects.subtitle")}</p>
          </div>
        )}

        <div className="projects-section__groups">
          {grouped.map((group) => (
            <div className="projects-section__group" key={group.category}>
              <h3 className="projects-section__group-title">{group.title}</h3>
              <div className="projects-section__grid">
                {sliceItems(group.items).map((project) => {
                  const copy = t(`projects.items.${project.slug}`);
                  const summary =
                    copy?.problemShort || copy?.problem || project.slug;
                  const title = copy?.title || project.slug;
                  return (
                    <PortfolioProjectCard
                      key={project.slug}
                      title={title}
                      summary={summary}
                      technologies={project.technologies}
                      image={project.image}
                      githubUrl={project.github}
                      demoUrl={project.demo}
                      detailPath={`/projects/${project.slug}`}
                      labels={labels}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {preview ? (
          <div className="projects-section__footer">
            <Link className="text-link" to="/projects">
              {t("projects.viewAll")}
            </Link>
          </div>
        ) : null}
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
