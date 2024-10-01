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
        "Co-developed a platform that detects structural problem areas in buildings and walls, generates PDF reports, and calculates costs and materials needed for repairs. Worked on data manipulation and report generation, optimizing the workflow for construction projects.",
      technologies: [
        "HTML",
        "SCSS",
        "Javascript",
        "React",
        "Typescript",
        "Next JS",
        "GraphQL",
        "Apollo Client",
        "MobX",
      ],
      // link: "https://yourportfolio.com", // Add actual project link
    },
    {
      image: main, // Update this with the actual image
      title: "RAP 3D Platform",
      description:
        "Built a 3D platform with real-time collaboration features using Three.js and React Three Fiber. Implemented the user interface and interactive 3D features, ensuring a seamless design experience for users.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "Three Js",
        "React Three Fiber",
        "Luva UI Library",
        "MUI",
      ],
      // link: "https://ecommerceplatform.com", // Add actual project link
    },
    {
      image: main, // Update this with the actual image
      title: "RAP File Managament",
      description:
        "Created a secure file management system with cross-platform mobile compatibility using React Native. Integrated WebViewer for in-app PDF viewing and optimized synchronization across devices.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "React",
        "React Native",
        "Webviwer",
      ],
      // link: "https://ecommerceplatform.com", // Add actual project link
    },
    {
      image: greenshop, // Update this with the actual image
      title: "Green Shop",
      description:
        "Developed an eco-themed landing page that promotes sustainable practices and products. The platform features clean and minimalistic UI/UX with smooth transitions, showcasing environmental benefits and green initiatives. Integrated responsive design for optimal viewing across devices",
      technologies: [
        "HTML",
        "CSS",
        "Tailwind",
        "Javascript",
        "React",
        "Node.js",
      ],
      link: "https://greenfl.netlify.app/", // Add actual project link
    },
    {
      image: bank, // Update this with the actual image
      title: "Financial Management Platform",
      description:
        "Developed a responsive and secure banking application that allows users to manage accounts, transfer funds, and monitor transactions in real-time. The app focuses on user-friendly navigation, robust authentication, and seamless user experience across devices.",
      technologies: ["React", "Javascript", "HTML", "CSS"],
      link: "https://banking-app-zeta.vercel.app/", // Add actual project link
    },
    {
      image: vizzano, // Update this with the actual image
      title: "Vizzano App",
      description:
        "Created an interactive fashion platform for showcasing products in a visually engaging way. The app focuses on delivering an immersive user experience with sleek design, smooth navigation, and high-quality visuals, providing users with easy access to explore and purchase the latest collections",
      technologies: ["React", "Javascript", "HTML", "CSS"],
      link: "https://vizzano-mikro.vercel.app/", // Add actual project link
    },
    {
      image: trillo, // Update this with the actual image
      title: "Trillo – Travel Booking App",
      description:
        "Developed a responsive travel booking platform with a sleek and modern interface. The app allows users to search for flights, hotels, and rental cars while offering features like user reviews and dynamic filters. It provides seamless navigation and real-time updates for a smooth booking experience.",
      technologies: ["React", "Javascript", "HTML", "CSS"],
      link: "https://trillo-omega.vercel.app/", // Add actual project link
    },
    {
      image: memory, // Update this with the actual image
      title: "Interactive Puzzle Challenge",
      description:
        " Developed an interactive memory game designed to improve concentration and cognitive skills. The game involves flipping cards to match pairs, with progressively challenging levels. It features a clean interface, responsive design, and smooth animations for an engaging user experience",
      technologies: ["React", "Javascript", "HTML", "CSS"],
      link: "https://memory-game-itsjk0307.vercel.app/", // Add actual project link
    },
    {
      image: portfolio, // Update this with the actual image
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React showcasing web development projects and skills, featuring a minimalist design and responsive layout for a smooth user experience across devices.",
      technologies: ["React", "Javascript", "HTML", "CSS"],
      link: "https://portfolio07-sigma.vercel.app/", // Add actual project link
    },
    {
      image: monster, // Update this with the actual image
      title: "Monster Rolodex",
      description:
        "A fun, interactive monster card collection game where users can search for and view a variety of monster characters. Built with React and integrated with API data for dynamically loading monster information",
      technologies: ["React", "Javascript", "Typescript", "HTML", "CSS"],
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
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </section>
  );
};

export default WebDevelopmentProjects;
