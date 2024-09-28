import React from "react";
import "./ProjectCard.css"; // Import CSS for styling

const ProjectCard = ({ image, title, description, technologies, link }) => {
  return (
    <div className="project-card">
      <div className="project-image-wapper">
        <div className="project-image">
          <img src={image} alt={`${title} Screenshot`} />
        </div>
      </div>
      <div className="project-details">
        <h4>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <p>{description}</p>
        <div className="project-stars"></div>
        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
