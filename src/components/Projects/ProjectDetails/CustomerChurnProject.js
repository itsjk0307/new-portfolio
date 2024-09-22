import React from "react";

const CustomerChurnProject = () => {
  return (
    <section id="customer-churn-project">
      <h2>Customer Churn Prediction</h2>
      <p>
        This project was focused on predicting customer churn using machine
        learning techniques. The model was trained on historical customer data
        to identify patterns that indicate churn behavior.
      </p>
      <h3>Technologies Used</h3>
      <ul>
        <li>Python</li>
        <li>Pandas</li>
        <li>Scikit-learn</li>
        <li>XGBoost</li>
      </ul>
      <h3>Project Overview</h3>
      <p>
        The goal was to minimize customer churn by analyzing historical
        behavior. The model achieved an accuracy of 85% using XGBoost and Random
        Forest classifiers.
      </p>
      <img
        src="path_to_churn_model_screenshot.jpg"
        alt="Customer Churn Model"
      />{" "}
      {/* Sample image */}
    </section>
  );
};

export default CustomerChurnProject;
