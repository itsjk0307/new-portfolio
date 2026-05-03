import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getProjectsByCategory } from "./projectsData";
import PortfolioProjectCard from "./PortfolioProjectCard";
import "./ProjectsSection.css";

const TITLES = {
  ai: "sectionAi",
  data: "sectionDs",
  web: "sectionWeb",
};

function ProjectCategoryPage({ category }) {
  const { t } = useLanguage();
  const items = getProjectsByCategory(category);

  const labels = {
    summary: t("projects.summaryLabel"),
    tech: t("projects.techLabel"),
    demo: t("projects.demo"),
    github: t("projects.source"),
    details: t("projects.details"),
  };

  return (
    <main className="page-shell">
      <div className="section-inner">
        <div className="section-head section-head--page">
          <Link className="back-link" to="/projects">
            {t("projectsPage.backProjects")}
          </Link>
          <h1 className="section-title section-title--xl">
            {t(`projects.${TITLES[category]}`)}
          </h1>
          <p className="section-subtitle">{t("projectsPage.subtitle")}</p>
        </div>

        <div className="projects-section__grid">
          {items.map((project) => {
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
    </main>
  );
}

export default ProjectCategoryPage;
