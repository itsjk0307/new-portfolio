import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RightSide from "./components/RightSide/RightSide";
import Projects from "./components/Projects/Projects";
import WebDevelopmentProjects from "./components/Projects/WebDevelopmentProjects";
import DataScienceProjects from "./components/Projects/DataScienceProjects";
import AIProjects from "./components/Projects/AIProjects";
import PortfolioProject from "./components/Projects/PortfolioProject";
import CustomerChurnProject from "./components/Projects/ProjectDetails/CustomerChurnProject";
import HeartDiseasePrediction from "./components/Projects/ProjectDetails/HeartDiseasePrediction";
import PageShell from "./components/layout/PageShell";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RightSide />} />
        <Route path="/about" element={<RightSide />} />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/web-development"
          element={<WebDevelopmentProjects />}
        />
        <Route
          path="/projects/data-science"
          element={<DataScienceProjects />}
        />
        <Route path="/projects/ai" element={<AIProjects />} />
        <Route
          path="/projects/web-development/portfolio"
          element={
            <PageShell>
              <PortfolioProject />
            </PageShell>
          }
        />
        <Route
          path="/projects/data-science/customer-churn"
          element={
            <PageShell>
              <CustomerChurnProject />
            </PageShell>
          }
        />
        <Route
          path="/projects/ai/heart-disease-prediction"
          element={
            <PageShell>
              <HeartDiseasePrediction />
            </PageShell>
          }
        />
        <Route path="*" element={<RightSide />} />
      </Routes>
    </Router>
  );
}

export default App;
