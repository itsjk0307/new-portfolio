import React from "react";
import ProjectCard from "./ProjectCard"; // Import the reusable ProjectCard component
import main from "../../assets/images/main.png";
import bank from "../../assets/images/bank.png";
import vizzano from "../../assets/images/vizzano.png";
import trillo from "../../assets/images/trillo.png";
import memory from "../../assets/images/memory.png";
import portfolio from "../../assets/images/portfolio.png";
import monster from "../../assets/images/monster.png";
import greenshop from "../../assets/images/greenshop.png";

const WebDevelopmentProjects = () => {
  const projects = [
    {
      image: main, // Update this with the actual image
      title: "RainbowTech AI Platform",
      description:
        "Developed a responsive and interactive personal portfolio website to showcase my work. Used React for the frontend and Express.js for the backend.",
      stars: 500, // Or remove if you don't need it
      technologies: ["React", "Express", "Node.js", "CSS"],
      link: "https://yourportfolio.com", // Add actual project link
    },
    {
      image: main, // Update this with the actual image
      title: " RAP 3D Platform",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://ecommerceplatform.com", // Add actual project link
    },
    {
      image: main, // Update this with the actual image
      title: "RAP File Managament",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://ecommerceplatform.com", // Add actual project link
    },
    {
      image: greenshop, // Update this with the actual image
      title: "Green Shop",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://greenfl.netlify.app/", // Add actual project link
    },
    {
      image: bank, // Update this with the actual image
      title: "Online Bank Platform",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://banking-app-zeta.vercel.app/", // Add actual project link
    },
    {
      image: vizzano, // Update this with the actual image
      title: "Vizzano",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://vizzano-mikro.vercel.app/", // Add actual project link
    },
    {
      image: trillo, // Update this with the actual image
      title: "Trillo",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://trillo-omega.vercel.app/", // Add actual project link
    },
    {
      image: memory, // Update this with the actual image
      title: "Memory Game",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://memory-game-itsjk0307.vercel.app/", // Add actual project link
    },
    {
      image: portfolio, // Update this with the actual image
      title: "First Personal Portfolio",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://portfolio07-sigma.vercel.app/", // Add actual project link
    },
    {
      image: monster, // Update this with the actual image
      title: "Monster Rolodex",
      description:
        "Built a full-stack e-commerce platform with payment integration and real-time inventory tracking. Features include secure checkout, user authentication, and order management.",
      stars: 320,
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "https://mymonsters-roledox.vercel.app/", // Add actual project link
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
