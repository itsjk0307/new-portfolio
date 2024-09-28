import React from "react";
import ProjectCard from "./ProjectCard"; // Reuse ProjectCard component
import heartImage from "../../assets/images/heartDisease.png"; // Import project images
import cusChurn from "../../assets/images/cusChurn.png";

const AIProjects = () => {
  const projects = [
    {
      image: heartImage, // Add the image for the project
      title: "Heart Disease Prediction",
      description:
        "Developed an AI model to predict the risk of heart disease using patient data. This model utilizes machine learning algorithms such as Decision Trees, Random Forests, and Neural Networks for high-accuracy predictions.",
      stars: 700,
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      link: "https://github.com/itsjk0307/Heart-Disease-Prediction/blob/main/Heart%20Disease%20Prediction.ipynb", // Replace with your actual link
    },
    {
      image: cusChurn, // Add the image for the project
      title: "Customer-Churn-Prediction",
      description:
        "Created a deep learning model to generate captions for images using Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) networks. This project uses large datasets and transfer learning.",
      stars: 550,
      technologies: ["Python", "TensorFlow", "Keras", "NLP"],
      link: "https://github.com/itsjk0307/Customer-Churn-Prediction/blob/main/Customer%20Churn%20Prediction.ipynb", // Replace with your actual link
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
