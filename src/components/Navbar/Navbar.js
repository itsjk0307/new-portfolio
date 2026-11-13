import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const SECTION_IDS = ["now", "experience", "work", "skills", "contact"];
/* Nav item -> the page sections that light it up. */
const NAV = [
  { id: "now", labelKey: "work", covers: ["now", "work"] },
  { id: "experience", labelKey: "about", covers: ["experience", "skills"] },
];
const LOCALES = [
  { code: "en", label: "EN", name: "English" },
  { code: "ko", label: "KO", name: "한국어" },
  { code: "uz", label: "UZ", name: "O'zbekcha" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ block: "start" });
}

function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/" || location.pathname === "/about";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY < 200) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) return undefined;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome, location.key]);

  const navItems = useMemo(
    () => NAV.map((n) => ({ ...n, label: t(`home.nav.${n.labelKey}`) })),
    [t]
  );

  const goToSection = (id) => {
    setOpen(false);
    if (isHome) {
      scrollToId(id);
      return;
    }
    navigate("/");
    window.setTimeout(() => scrollToId(id), 120);
  };

  const solid = scrolled || !isHome || open;

  return (
    <>
      <a className="skip-link" href="#main">
        {t("home.nav.skip")}
      </a>
      <header className={`site-nav ${solid ? "is-solid" : ""}`}>
        <div className="site-nav__inner">
          <Link className="site-nav__brand" to="/" aria-label="Jamshid Khaytbaev">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M6 22V3" className="brand-pole" />
              <path d="M6 3l12 4.5L6 12z" className="brand-flag" />
            </svg>
            <span>Jamshid Khaytbaev</span>
          </Link>

          <nav
            id="site-menu"
            className={`site-nav__links ${open ? "is-open" : ""}`}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`site-nav__link ${
                  isHome && item.covers.includes(active) ? "is-active" : ""
                }`}
                aria-current={isHome && item.covers.includes(active) ? "true" : undefined}
                onClick={() => goToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="site-nav__tools">
            <div className="lang-switch" role="group" aria-label="Language">
              {LOCALES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  lang={l.code}
                  title={l.name}
                  aria-pressed={locale === l.code}
                  className={`lang-switch__btn ${locale === l.code ? "is-active" : ""}`}
                  onClick={() => setLocale(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? t("home.nav.themeLight") : t("home.nav.themeDark")
              }
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>

            <button
              type="button"
              className="icon-btn site-nav__menu"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? t("nav.menuClose") : t("nav.menuOpen")}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
