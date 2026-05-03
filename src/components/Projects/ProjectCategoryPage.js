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
    problem: t("projects.problemLabel"),
    tech: t("projects.techLabel"),
    demo: t("projects.demo"),
    github: t("projects.source"),
    details: t("projects.details"),
  };

  return (
    <main className="page-shell">
      <div className="section-inner">
        <header className="section-head section-head--page">
          <Link className="back-link" to="/projects">
            {t("projectsPage.backProjects")}
          </Link>
          <h1 className="section-title section-title--xl">
            {t(`projects.${TITLES[category]}`)}
          </h1>
          <p className="section-subtitle">{t("projectsPage.subtitle")}</p>
        </header>

        <div className="projects-section__grid">
          {items.map((project) => {
            const copy = t(`projects.items.${project.slug}`);
            const problem =
              copy?.problemShort || copy?.problem || project.slug;
            const title = copy?.title || project.slug;
            return (
              <PortfolioProjectCard
                key={project.slug}
                title={title}
                problem={problem}
                technologies={project.technologies}
                image={project.image}
                githubUrl={project.github}
                demoUrl={project.demo}
                detailPath={project.detailPath}
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
