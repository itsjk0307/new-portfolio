import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const NAV_HEIGHT = 72;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

const SECTION_IDS = ["about", "experience", "projects", "skills", "contact"];

function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  const isHome = location.pathname === "/" || location.pathname === "/about";

  useEffect(() => {
    if (!isHome) return undefined;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("id");
          if (id) setActive(id);
        });
      },
      { rootMargin: `-${NAV_HEIGHT + 24}px 0px -55% 0px`, threshold: 0.01 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
  }, [isHome, location.key]);

  const navItems = useMemo(
    () => [
      { id: "about", label: t("nav.about") },
      { id: "experience", label: t("nav.experience") },
      { id: "projects", label: t("nav.projects") },
      { id: "skills", label: t("nav.skills") },
      { id: "contact", label: t("nav.contact") },
    ],
    [t]
  );

  const goToSection = (id) => {
    setOpen(false);
    if (isHome) {
      scrollToId(id);
      return;
    }
    navigate("/");
    window.setTimeout(() => scrollToId(id), 80);
  };

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link className="site-nav__brand" to="/" onClick={() => setOpen(false)}>
          {t("nav.brand")}
        </Link>

        <nav className={`site-nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`site-nav__link ${active === item.id && isHome ? "is-active" : ""}`}
              onClick={() => goToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <Link
            className="site-nav__link site-nav__link--ghost"
            to="/projects"
            onClick={() => setOpen(false)}
          >
            {t("nav.allProjects")}
          </Link>
        </nav>

        <div className="site-nav__controls">
          <div className="lang-switch" role="group" aria-label="Language">
            {["en", "ko", "uz"].map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-switch__btn ${locale === code ? "is-active" : ""}`}
                onClick={() => setLocale(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <button
            type="button"
            className="icon-btn site-nav__menu"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
