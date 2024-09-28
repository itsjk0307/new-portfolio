import React from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
// import Contact from "../Contact/Contact";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-side-wrapper">
      <About />
      <Experience />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
};

export default RightSide;
