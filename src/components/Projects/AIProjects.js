import React from "react";
import ProjectCard from "./ProjectCard"; // Reuse ProjectCard component
import heartImage from "../../assets/images/main.png"; // Import project images
import imageCaption from "../../assets/images/main.png";

const AIProjects = () => {
  const projects = [
    {
      image: heartImage, // Add the image for the project
      title: "Heart Disease Prediction",
      description:
        "Developed an AI model to predict the risk of heart disease using patient data. This model utilizes machine learning algorithms such as Decision Trees, Random Forests, and Neural Networks for high-accuracy predictions.",
      stars: 700,
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      link: "https://github.com/yourrepo/heart-disease-prediction", // Replace with your actual link
    },
    {
      image: imageCaption, // Add the image for the project
      title: "Image Captioning",
      description:
        "Created a deep learning model to generate captions for images using Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) networks. This project uses large datasets and transfer learning.",
      stars: 550,
      technologies: ["Python", "TensorFlow", "Keras", "NLP"],
      link: "https://github.com/yourrepo/image-captioning", // Replace with your actual link
    },
    // Add more AI projects here as needed
  ];

  return (
    <section id="ai-projects">
      <h2 style={{ fontSize: "25px" }}>AI Projects</h2>
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

export default AIProjects;
