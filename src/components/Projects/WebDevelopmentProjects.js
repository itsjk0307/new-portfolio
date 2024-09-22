import React from "react";
import ProjectCard from "./ProjectCard"; // Import the reusable ProjectCard component
import main from "../../assets/images/main.png";

const WebDevelopmentProjects = () => {
  const projects = [
    {
      image: main, // Update this with the actual image
      title: "Personal Portfolio Website",
      description:
        "Developed a responsive and interactive personal portfolio website to showcase my work. Used React for the frontend and Express.js for the backend.",
      stars: 500, // Or remove if you don't need it
      technologies: ["React", "Express", "Node.js", "CSS"],
      link: "https://yourportfolio.com", // Add actual project link
    },
    {
      image: main, // Update this with the actual image
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://ecommerceplatform.com", // Add actual project link
    },
    // Add more web development projects here
  ];

  return (
    <section id="web-development-projects">
      <h2 style={{ fontSize: "25px" }}>Web Development Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          stars={project.stars}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default WebDevelopmentProjects;
