import React from "react";
import "./Navbar.css";
import RightToolbar from "../RightSide/RightToolbar";
// import logo from "../../assets/images/rocket1.png"; // Adjust the path based on your file structure

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar-brand">
        <img src={logo} alt="JamaTech Logo" className="navbar-logo" />
        <span className="navbar-title">JamaTech</span>
      </div> */}
      <RightToolbar />
    </nav>
  );
};

export default Navbar;
