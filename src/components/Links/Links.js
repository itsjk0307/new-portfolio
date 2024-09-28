import React from "react";
import "./Links.css";

function Links({ activeSection }) {
  return (
    <ul className="nav-menu1">
      <li className={`nav-item1 ${activeSection === "about" ? "active" : ""}`}>
        <a href="#about" className="nav-link1">
          ABOUT
        </a>
      </li>
      <li
        className={`nav-item1 ${
          activeSection === "experience" ? "active" : ""
        }`}
      >
        <a href="#experience" className="nav-link1">
          EXPERIENCE
        </a>
      </li>
      <li
        className={`nav-item1 ${activeSection === "projects" ? "active" : ""}`}
      >
        <a href="#projects" className="nav-link1">
          PROJECTS
        </a>
      </li>
    </ul>
  );
}

export default Links;
