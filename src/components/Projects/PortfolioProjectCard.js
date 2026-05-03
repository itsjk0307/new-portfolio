import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./PortfolioProjectCard.css";

const hoverTransition = { type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] };

function PortfolioProjectCard({
  title,
  summary,
  technologies,
  image,
  githubUrl,
  demoUrl,
  detailPath,
  labels,
}) {
  const reduceMotion = useReducedMotion();

  const media = (
    <div className="ppc-media">
      <img src={image} alt="" loading="lazy" />
      <div className="ppc-media__shine" aria-hidden="true" />
    </div>
  );

  const main = (
    <>
      {media}
      <div className="ppc-main">
        <h3 className="ppc-title">{title}</h3>
        <p className="ppc-desc">{summary}</p>
        <ul className="ppc-badges" aria-label={labels.tech}>
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </>
  );

  return (
    <motion.article
      className="ppc-card"
      whileHover={reduceMotion ? undefined : { scale: 1.03 }}
      transition={hoverTransition}
    >
      {detailPath ? (
        <Link
          className="ppc-card__hit"
          to={detailPath}
          aria-label={`${title} — ${labels.details}`}
        >
          {main}
          <span className="ppc-card__hit-cta" aria-hidden="true">
            {labels.details}
          </span>
        </Link>
      ) : (
        <div className="ppc-card__hit ppc-card__hit--static">{main}</div>
      )}

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
      </div>
    </motion.article>
  );
}

export default PortfolioProjectCard;
