import React from "react";
import "./Links.css";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Align the top of the right content section with the top of the left column.
  // The left column is `position: fixed` on desktop, so we need an offset to avoid
  // the "jump upward" effect when scrolling.
  const leftWrapper = document.querySelector(".left-side-wrapper");
  const offsetTop = leftWrapper ? leftWrapper.getBoundingClientRect().top : 0;

  const targetY = el.getBoundingClientRect().top + window.scrollY - offsetTop;
  window.scrollTo({ top: Math.max(0, targetY), behavior: "smooth" });
}

function Links({ activeSection }) {
  return (
    <ul className="nav-menu1">
      <li className={`nav-item1 ${activeSection === "about" ? "active" : ""}`}>
        <a
          href="#about"
          className="nav-link1"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          ABOUT
        </a>
      </li>
      <li
        className={`nav-item1 ${
          activeSection === "experience" ? "active" : ""
        }`}
      >
        <a
          href="#experience"
          className="nav-link1"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("experience");
          }}
        >
          EXPERIENCE
        </a>
      </li>
      <li
        className={`nav-item1 ${activeSection === "projects" ? "active" : ""}`}
      >
        <a
          href="#projects"
          className="nav-link1"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          PROJECTS
        </a>
      </li>
    </ul>
  );
}

export default Links;
