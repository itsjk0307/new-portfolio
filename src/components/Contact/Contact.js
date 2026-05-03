import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { useScrollFadeProps } from "../motion/scrollReveal";
import "./Contact.css";

function Contact() {
  const { t } = useLanguage();
  const email = t("contact.email");
  const mailto = email ? `mailto:${email}` : null;
  const phone = (t("contact.phone") || "").trim();
  const telHref = phone
    ? `tel:${phone.replace(/[\s-]/g, "")}`
    : null;
  const scrollFade = useScrollFadeProps();

  return (
    <motion.section className="contact-section" id="contact" {...scrollFade}>
      <div className="section-inner">
        <div className="section-head">
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="section-subtitle">{t("contact.body")}</p>
        </div>

        <div className="contact-grid">
          {email ? (
            <a
              className="contact-card"
              href={mailto}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card__icon" aria-hidden>
                <FiMail />
              </span>
              <span className="contact-card__label">{t("contact.emailLabel")}</span>
              <span className="contact-card__value">{email}</span>
            </a>
          ) : null}

          {phone && telHref ? (
            <a className="contact-card" href={telHref}>
              <span className="contact-card__icon" aria-hidden>
                <FiPhone />
              </span>
              <span className="contact-card__label">{t("contact.phoneLabel")}</span>
              <span className="contact-card__value">{phone}</span>
            </a>
          ) : null}

          <a
            className="contact-card"
            href="https://github.com/itsjk0307"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon" aria-hidden>
              <FaGithub />
            </span>
            <span className="contact-card__label">{t("contact.githubLabel")}</span>
            <span className="contact-card__value">{t("contact.githubValue")}</span>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon" aria-hidden>
              <FaLinkedin />
            </span>
            <span className="contact-card__label">{t("contact.linkedinLabel")}</span>
            <span className="contact-card__value">{t("contact.linkedinValue")}</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
