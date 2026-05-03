import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./PortfolioProjectCard.css";

function PortfolioProjectCard({
  title,
  problem,
  technologies,
  image,
  githubUrl,
  demoUrl,
  detailPath,
  labels,
}) {
  return (
    <article className="ppc-card">
      <div className="ppc-media">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="ppc-body">
        <div className="ppc-header">
          <h3 className="ppc-title">{title}</h3>
        </div>
        <p className="ppc-label">{labels.problem}</p>
        <p className="ppc-problem">{problem}</p>
        <p className="ppc-label">{labels.tech}</p>
        <ul className="ppc-tech">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="ppc-actions">
          {demoUrl ? (
            <a
              className="ppc-btn ppc-btn-primary"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink aria-hidden />
              {labels.demo}
            </a>
          ) : null}
          {githubUrl ? (
            <a
              className="ppc-btn ppc-btn-ghost"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub aria-hidden />
              {labels.github}
            </a>
          ) : null}
          {detailPath ? (
            <Link className="ppc-btn ppc-btn-ghost" to={detailPath}>
              {labels.details}
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default PortfolioProjectCard;
