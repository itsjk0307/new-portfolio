import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { getProjectBySlug } from "./projectsData";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const project = slug ? getProjectBySlug(slug) : null;
  const [lightbox, setLightbox] = useState(null);

  const rawCopy = project
    ? t(`projects.items.${project.slug}`, { returnObjects: true })
    : null;
  const copy =
    rawCopy && typeof rawCopy === "object" && !Array.isArray(rawCopy)
      ? rawCopy
      : null;
  const detail = copy?.detail;

  const gallery = project?.gallery?.length
    ? project.gallery
    : project
      ? [project.image]
      : [];
  const captions = Array.isArray(detail?.galleryCaptions)
    ? detail.galleryCaptions
    : [];

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox == null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox]);

  if (!project || !copy || !detail) {
    return <Navigate to="/projects" replace />;
  }

  const pipeline = Array.isArray(detail.pipeline) ? detail.pipeline : [];
  const labels = {
    demo: t("projects.demo"),
    github: t("projects.source"),
  };

  return (
    <main className="page-shell project-detail">
      <div className="section-inner project-detail__inner">
        <Link className="back-link" to="/projects">
          {t("projects.projectDetail.backToList")}
        </Link>

        <header className="project-detail__hero">
          <div className="project-detail__hero-media">
            <img src={project.image} alt="" loading="eager" />
          </div>
          <div className="project-detail__hero-copy">
            <h1 className="project-detail__title">{copy.title}</h1>
            <div className="project-detail__actions">
              {project.demo ? (
                <a
                  className="btn btn-primary project-detail__cta"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink aria-hidden />
                  {labels.demo}
                </a>
              ) : null}
              {project.github ? (
                <a
                  className="btn btn-ghost project-detail__cta"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub aria-hidden />
                  {labels.github}
                </a>
              ) : null}
            </div>
          </div>
        </header>

        <div className="project-detail__grid">
          <article className="detail-card">
            <h2 className="detail-card__title">
              {t("projects.projectDetail.overview")}
            </h2>
            <p className="detail-card__body">{detail.overview}</p>
          </article>

          <article className="detail-card">
            <h2 className="detail-card__title">
              {t("projects.projectDetail.problem")}
            </h2>
            <p className="detail-card__body">{copy.problem}</p>
          </article>

          <article className="detail-card">
            <h2 className="detail-card__title">
              {t("projects.projectDetail.myRole")}
            </h2>
            <p className="detail-card__body">{detail.myRole}</p>
          </article>

          <article className="detail-card detail-card--wide">
            <h2 className="detail-card__title">
              {t("projects.projectDetail.pipeline")}
            </h2>
            <ol className="pipeline-list">
              {pipeline.map((step, i) => (
                <li key={i} className="pipeline-list__item">
                  <span className="pipeline-list__badge">
                    {t("projects.projectDetail.step", { n: i + 1 })}
                  </span>
                  <span className="pipeline-list__text">{step}</span>
                </li>
              ))}
            </ol>
          </article>

          <article className="detail-card">
            <h2 className="detail-card__title">
              {t("projects.projectDetail.techStack")}
            </h2>
            <ul className="tech-pills">
              {project.technologies.map((tech) => (
                <li key={tech} className="tech-pills__item">
                  {tech}
                </li>
              ))}
            </ul>
          </article>

          <article className="detail-card">
            <h2 className="detail-card__title">
              {t("projects.projectDetail.results")}
            </h2>
            <p className="detail-card__body">{detail.results}</p>
          </article>
        </div>

        <section className="detail-gallery" aria-label={t("projects.projectDetail.gallery")}>
          <h2 className="detail-gallery__heading">
            {t("projects.projectDetail.gallery")}
          </h2>
          <div className="detail-gallery__grid">
            {gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                className="detail-gallery__tile"
                onClick={() => setLightbox(i)}
              >
                <img src={src} alt={captions[i] || ""} loading="lazy" />
                {captions[i] ? (
                  <span className="detail-gallery__caption">{captions[i]}</span>
                ) : null}
              </button>
            ))}
          </div>
        </section>
      </div>

      {lightbox != null ? (
        <div
          className="detail-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t("projects.projectDetail.gallery")}
        >
          <button
            type="button"
            className="detail-lightbox__backdrop"
            aria-label={t("projects.projectDetail.close")}
            onClick={closeLightbox}
          />
          <div className="detail-lightbox__panel">
            <button
              type="button"
              className="detail-lightbox__close icon-btn"
              onClick={closeLightbox}
              aria-label={t("projects.projectDetail.close")}
            >
              <FiX aria-hidden />
            </button>
            <img
              src={gallery[lightbox]}
              alt={captions[lightbox] || copy.title}
              className="detail-lightbox__img"
            />
            {captions[lightbox] ? (
              <p className="detail-lightbox__note">{captions[lightbox]}</p>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default ProjectDetailPage;
