import React from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RightSide from "./components/RightSide/RightSide";
import Projects from "./components/Projects/Projects";
import WebDevelopmentProjects from "./components/Projects/WebDevelopmentProjects";
import DataScienceProjects from "./components/Projects/DataScienceProjects";
import AIProjects from "./components/Projects/AIProjects";
import ProjectDetailPage from "./components/Projects/ProjectDetailPage";
import LuxuryBagAuthCaseStudy from "./components/Projects/LuxuryBagAuthCaseStudy";
import MonitoringDashboardCaseStudy from "./components/Projects/MonitoringDashboardCaseStudy";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RightSide />} />
        <Route path="/about" element={<RightSide />} />
        <Route path="/projects/web-development" element={<WebDevelopmentProjects />} />
        <Route path="/projects/data-science" element={<DataScienceProjects />} />
        <Route path="/projects/ai" element={<AIProjects />} />
        <Route
          path="/projects/ai/heart-disease-prediction"
          element={<Navigate to="/projects/heartDisease" replace />}
        />
        <Route
          path="/projects/data-science/customer-churn"
          element={<Navigate to="/projects/customerChurn" replace />}
        />
        <Route
          path="/projects/web-development/portfolio"
          element={<Navigate to="/projects/portfolioSite" replace />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/quazarLuxuryAuth"
          element={<LuxuryBagAuthCaseStudy />}
        />
        <Route
          path="/projects/logMonitoringDashboard"
          element={<MonitoringDashboardCaseStudy />}
        />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<RightSide />} />
      </Routes>
    </Router>
  );
}

export default App;
