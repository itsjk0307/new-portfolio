import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"; // Ensure this import
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links" style={{ display: "flex" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a
          href="https://telegram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://telegram.com"
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
