import React from "react";
import WebDevelopmentProjects from "./WebDevelopmentProjects";
import DataScienceProjects from "./DataScienceProjects";
import AIProjects from "./AIProjects";

const Projects = () => {
  return (
    <section id="projects">
      <WebDevelopmentProjects />
      <DataScienceProjects />
      <AIProjects />
    </section>
  );
};

export default Projects;
