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
        "Developed a machine learning model to predict the risk of heart disease based on patient data. The model uses Decision Trees, Random Forests, and Logistic Regression to classify patient health conditions and improve diagnostic predictions.",
      stars: 700,
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      link: "https://github.com/itsjk0307/Heart-Disease-Prediction/blob/main/Heart%20Disease%20Prediction.ipynb", // Replace with your actual link
    },
    {
      image: cusChurn, // Add the image for the project
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn using historical data. The model employs Logistic Regression and Random Forest classifiers to forecast churn rates and provide actionable insights to reduce customer attrition.",
      stars: 550,
      technologies: ["Python", "TensorFlow", "Keras", "Pandas", "Matplotlib"],
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
