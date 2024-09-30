import React, { useState, useEffect } from "react";
import LeftSide from "./LeftSide";
import Links from "../Links/Links";
import "./LeftSideWrapper.css";
import SocialLinks from "../SocialLinks/SocialLinks";

function LeftSideWrapper() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="wrapper-container">
      <div className="left-side-wrapper">
        <LeftSide />
        <Links activeSection={activeSection} />
        <SocialLinks />
      </div>
    </div>
  );
}

export default LeftSideWrapper;
