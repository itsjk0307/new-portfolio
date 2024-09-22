import React from "react";
import ProjectCard from "./ProjectCard"; // Reuse ProjectCard component
import churnImage from "../../assets/images/main.png"; // Import project images
import loanImage from "../../assets/images/main.png";
import "./ProjectCard.css"; // Import CSS for styling

const DataScienceProjects = () => {
  const projects = [
    {
      image: churnImage, // Add the image for the project
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model to predict customer churn using historical data. The model uses decision trees, random forests, and logistic regression to predict whether a customer will leave a company based on their behavior.",
      stars: 645,
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "https://github.com/yourrepo/customer-churn-prediction", // Replace with your actual link
    },
    {
      image: loanImage, // Add the image for the project
      title: "Loan Eligibility Prediction",
      description:
        "Created a model to predict loan eligibility based on various factors like income, loan amount, and credit history. The project uses classification algorithms like Logistic Regression and Random Forests.",
      stars: 320,
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      link: "https://github.com/yourrepo/loan-eligibility-prediction", // Replace with your actual link
    },
    // Add more data science projects here as needed
  ];

  return (
    <section id="data-science-projects">
      <h2 style={{ fontSize: "25px" }}>Data Science Projects</h2>
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

export default DataScienceProjects;
