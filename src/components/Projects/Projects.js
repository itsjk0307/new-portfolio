import React from "react";
import WebDevelopmentProjects from "./WebDevelopmentProjects";
import DataScienceProjects from "./DataScienceProjects";
import AIProjects from "./AIProjects";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <WebDevelopmentProjects />
      <DataScienceProjects />
      <AIProjects />
    </div>
  );
};

export default Projects;
