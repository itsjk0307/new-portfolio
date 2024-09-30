import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"; // Ensure this import
import { FaXTwitter } from "react-icons/fa6";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <div style={{ display: "flex", gap: "20px" }}>
        <a
          href="https://github.com/itsjk0307"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.x.com/itsmetkm03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://www.instagram.com/itsjk0307"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://t.me/itsmetkm03"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://wa.me/821098021777"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
