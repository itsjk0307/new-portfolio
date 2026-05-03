import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "../../context/LanguageContext";
import "./Contact.css";

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact-section" id="contact">
      <div className="section-inner">
        <header className="section-head">
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.body")}</p>
        </header>

        <div className="contact-panel">
          <div>
            <div className="contact-kicker">{t("contact.locationLabel")}</div>
            <div className="contact-value">{t("contact.location")}</div>
          </div>

          <div>
            <div className="contact-kicker">{t("contact.socialHeading")}</div>
            <div className="contact-social">
              <a
                href="https://github.com/itsjk0307"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/itsjk0307"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/itsmetkm03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="https://wa.me/821098021777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
