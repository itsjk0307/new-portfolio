import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import Projects from "./components/Projects/Projects";
import WebDevelopmentProjects from "./components/Projects/WebDevelopmentProjects";
import DataScienceProjects from "./components/Projects/DataScienceProjects";
import AIProjects from "./components/Projects/AIProjects";
import PortfolioProject from "./components/Projects/PortfolioProject"; // Specific detailed projects
import CustomerChurnProject from "./components/Projects/ProjectDetails/CustomerChurnProject";
import HeartDiseasePrediction from "./components/Projects/ProjectDetails/HeartDiseasePrediction";
import Navbar from "./components/Navbar/Navbar"; // Fixed Navbar
// import Content from "./components/Content"; // Your main content (About, Projects, etc.)
import "./styles/App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="App">
        <Navbar /> {/* Fixed Navbar */}
        {/* <Content /> Main content */}
      </div>
      <Router>
        <div className="main-container">
          <div className="app-container">
            <LeftSide activeSection={activeSection} />
            <Routes>
              <Route path="/" element={<RightSide />} />
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
                element={<PortfolioProject />}
              />
              <Route
                path="/projects/data-science/customer-churn"
                element={<CustomerChurnProject />}
              />
              <Route
                path="/projects/ai/heart-disease-prediction"
                element={<HeartDiseasePrediction />}
              />
            </Routes>
            <div
              className="circle"
              style={{ left: `${position.x}px`, top: `${position.y}px` }}
            ></div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
