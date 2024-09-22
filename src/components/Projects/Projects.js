import React from "react";
import WebDevelopmentProjects from "./WebDevelopmentProjects";
import DataScienceProjects from "./DataScienceProjects";
import AIProjects from "./AIProjects";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        Here are the various projects I've worked on, categorized into Web
        Development, Data Science, and AI.
      </p>

      {/* Render the Web Development Projects component */}
      <WebDevelopmentProjects />

      {/* Render the Data Science Projects component */}
      <DataScienceProjects />

      {/* Render the AI Projects component */}
      <AIProjects />
    </section>
  );
};

export default Projects;
