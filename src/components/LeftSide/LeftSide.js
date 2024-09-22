import React from "react";
import "./LeftSide.css";
import SocialLinks from "../SocialLinks/SocialLinks";

function LeftSide({ activeSection }) {
  return (
    <div className="left-side">
      <div className="content">
        <h1 className="main-title">Jamshid Khaytbaev</h1>
        <h2 className="sub-title">Data science & AI Engineer</h2>
        <h2 className="sub-title">Web developer</h2>
        <p className="description">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>

        <div className="nav-container">
          <ul className="nav-menu">
            <li
              className={`nav-item ${
                activeSection === "about" ? "active" : ""
              }`}
            >
              <a href="#about" className="nav-link">
                ABOUT
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "experience" ? "active" : ""
              }`}
            >
              <a href="#experience" className="nav-link">
                EXPERIENCE
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              <a href="#projects" className="nav-link">
                PROJECTS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}

export default LeftSide;
