import React from "react";
import ProjectCard from "./ProjectCard"; // Reuse ProjectCard component
import EDA from "../../assets/images/EDA.png"; // Import project images
import loanImage from "../../assets/images/EDA1.png";
import "./ProjectCard.css"; // Import CSS for styling

const DataScienceProjects = () => {
  const projects = [
    {
      image: EDA, // Add the image for the project
      title: "Exploratory Data Analysis",
      description:
        "Conducted an in-depth exploratory data analysis on the Titanic dataset. Utilized various data visualization techniques to identify key factors that contributed to survival rates among passengers. Cleaned and processed the dataset to reveal insights such as age, gender, and class distribution.",
      stars: 645,
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
      link: "https://github.com/itsjk0307/Exploratory-Data-Analysis-EDA-Project/blob/main/Titanic-EDA-Project.ipynb", // Replace with your actual link
    },
    {
      image: loanImage, // Add the image for the project
      title: "Loan Eligibility Prediction",
      description:
        "Developed a classification model to predict loan eligibility based on several criteria, including income, loan amount, and credit history. This project involves data cleaning, feature selection, and implementation of machine learning algorithms such as Logistic Regression and Random Forests to ensure accurate predictions.",
      stars: 320,
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Seaborn",
        "Logistic Regression",
        "Random Forest",
      ],
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
