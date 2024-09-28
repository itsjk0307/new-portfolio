import React from "react";
import LeftSide from "./LeftSide";
import Links from "../Links/Links";
import "./LeftSideWrapper.css";
import SocialLinks from "../SocialLinks/SocialLinks";

function LeftSideWrapper() {
  return (
    <div className="wrapper-container">
      <div className="left-side-wrapper">
        <LeftSide />
        <Links />
        <SocialLinks />
      </div>
    </div>
  );
}

export default LeftSideWrapper;
