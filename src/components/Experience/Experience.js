import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      {/* Experience as an Intern */}
      <div className="experience-card">
        <h3 className="experience-title">
          Frontend Developer Intern · RainbowTech
        </h3>
        <span className="experience-duration">March 2023 — July 2023</span>
        <p className="experience-description">
          Assisted in building and maintaining user interfaces for various web
          projects. Worked closely with senior developers to learn best
          practices and understand key aspects of frontend development.
        </p>
        <div className="skills">
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">HTML5</span>
          <span className="skill-tag">CSS3</span>
          <span className="skill-tag">React Three Fiber</span>
          <span className="skill-tag">Three JS</span>
          <span className="skill-tag">Research & Development</span>
        </div>
      </div>
      {/* Experience as a Frontend Developer Researcher */}
      <div className="experience-card">
        <h3 className="experience-title">
          Frontend Developer Researcher · RainbowTech
        </h3>
        <span className="experience-duration">July 2023 — September 2024</span>
        <p className="experience-description">
          Conducted extensive research on the latest frontend technologies and
          frameworks to improve the development process. Collaborated with the
          development team to implement optimized user interfaces and improve
          application performance.
        </p>
        <div className="skills">
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS</span>
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">Next Js</span>
          <span className="skill-tag">Typescript</span>
          <span className="skill-tag">GraphQL</span>
          <span className="skill-tag">Apollo Client</span>
          <span className="skill-tag">MobX</span>
          <span className="skill-tag">Version Control (Git)</span>
          <span className="skill-tag">Responsive Design</span>
        </div>
      </div>

      {/* View Full Résumé Link */}
      <div className="resume-link">
        <a
          href="https://drive.google.com/file/d/1um1zw9LT1Zi8kQs-EYhjWdFkmR5xjYU6/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Full Résumé ↗
        </a>
      </div>
    </div>
  );
};

export default Experience;
