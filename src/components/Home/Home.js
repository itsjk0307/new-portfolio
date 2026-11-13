import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight, FiCopy, FiCheck, FiFileText, FiPhone } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import ContourField from "./ContourField";
import CourseMap from "./CourseMap";
import HeroSystemMap from "./HeroSystemMap";
import "./Home.css";

const GITHUB = "https://github.com/itsjk0307";

/* Stack strings stay untranslated; titles and copy come from i18n. */
const WORK = [
  { key: "greencare", year: "2026", stack: "React Native, React, FastAPI, PostgreSQL, Gemini Vision", privateRepo: true, jump: "#now" },
  { key: "daejungSite", year: "2026", stack: "Next.js, TypeScript, Prisma, PostgreSQL", privateRepo: true },
  { key: "luxury", year: "2025", stack: "PyTorch, TensorFlow, YOLO, OpenCV", route: "/projects/quazarLuxuryAuth" },
  { key: "rainbow3d", year: "2023", stack: "React, Three.js, React Three Fiber, MobX", route: "/projects/rap3d", routeLabel: "details" },
  { key: "logs", year: "2026", stack: "FastAPI, scikit-learn, Next.js, Recharts", route: "/projects/logMonitoringDashboard", code: `${GITHUB}/ai-log-intelligence-dashboard` },
  { key: "tinybert", year: "2025", stack: "Python, Transformers, PyTorch", code: `${GITHUB}/TinyBERT-Sentiment-Classifier` },
  { key: "chatbot", year: "2024", stack: "Python, NLP, Vue", code: `${GITHUB}/Smart-Chatbot-for-Customer-Support` },
];

function useList(t, key) {
  const raw = t(key, { returnObjects: true });
  return Array.isArray(raw) ? raw : [];
}

function Hero({ t, resumeUrl }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <ContourField className="hero__terrain" showFlag={false} />
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__headline">
            {t("home.hero.headline")}
          </h1>
          <p className="hero__now">
            <span className="hero__live" aria-hidden="true" />
            {t("home.hero.now")}
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#now">
              {t("home.hero.ctaCase")}
            </a>
            <a
              className="btn btn--line"
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("home.hero.ctaResume")}
            </a>
          </div>
        </div>
        <HeroSystemMap t={t} />
      </div>
    </section>
  );
}

function Now({ t }) {
  const steps = useList(t, "home.now.steps");
  const surfaces = useList(t, "home.now.surfaces");
  const zones = useList(t, "home.now.zones");

  return (
    <section id="now" className="block block--now" aria-labelledby="now-title">
      <div className="wrap">
        <div className="now__intro">
          <div>
            <h2 id="now-title" className="block__title">
              {t("home.now.title")}
            </h2>
            <p className="now__product">GreenCare</p>
            <p className="block__lead">{t("home.now.lead")}</p>
            <p className="now__private">{t("home.now.privateNote")}</p>
          </div>
          <CourseMap zones={zones} caption={t("home.now.mapCaption")} />
        </div>

        <h3 className="sub-title">{t("home.now.stepsTitle")}</h3>
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step__num" aria-hidden="true">
                {i + 1}
              </span>
              <h4 className="step__title">{s.title}</h4>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="sub-title">{t("home.now.surfacesTitle")}</h3>
        <ul className="surfaces">
          {surfaces.map((s) => (
            <li className="surface" key={s.name}>
              <h4 className="surface__name">{s.name}</h4>
              <p className="surface__text">{s.text}</p>
              <p className="surface__stack">{s.stack}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Experience({ t }) {
  const items = useList(t, "home.experience.items");
  const present = t("home.experience.present");

  return (
    <section
      id="experience"
      className="block block--experience"
      aria-labelledby="exp-title"
    >
      <div className="wrap">
        <h2 id="exp-title" className="block__title">
          {t("home.experience.title")}
        </h2>
        <ol className="timeline">
          {items.map((job, i) => (
            <li className={`job ${i === 0 ? "job--current" : ""}`} key={job.id}>
              <p className="job__when">
                <span>{job.period}</span>
                <span className="job__to">{job.end || present}</span>
              </p>
              <div className="job__body">
                <h3 className="job__role">{job.role}</h3>
                <p className="job__org">{job.org}</p>
                <ul className="job__points">
                  {(job.points || []).map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <p className="job__stack">{job.stack}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function WorkAction({ item, t }) {
  if (item.jump) {
    return (
      <a className="work__link" href={item.jump}>
        {t("home.work.jump")}
      </a>
    );
  }
  if (item.route) {
    return (
      <Link className="work__link" to={item.route}>
        {t(`home.work.${item.routeLabel || "caseStudy"}`)}
      </Link>
    );
  }
  return null;
}

function Work({ t }) {
  return (
    <section id="work" className="block block--work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="block__head">
          <h2 id="work-title" className="block__title">
            {t("home.work.title")}
          </h2>
          <p className="block__lead">{t("home.work.lead")}</p>
        </div>

        <ul className="work">
          {WORK.map((item) => (
            <li className="work__row" key={item.key}>
              <span className="work__year">{item.year}</span>
              <div className="work__main">
                <h3 className="work__title">
                  {t(`home.work.items.${item.key}.title`)}
                </h3>
                <p className="work__text">{t(`home.work.items.${item.key}.text`)}</p>
              </div>
              <p className="work__stack">{item.stack}</p>
              <div className="work__actions">
                {item.privateRepo ? (
                  <span className="work__badge">{t("home.work.private")}</span>
                ) : null}
                <WorkAction item={item} t={t} />
                {item.code ? (
                  <a
                    className="work__link"
                    href={item.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub aria-hidden="true" /> {t("home.work.code")}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <Link className="text-cta" to="/projects">
          {t("home.work.all")}
        </Link>
      </div>
    </section>
  );
}

function Skills({ t }) {
  const groups = useList(t, "home.skills.groups");
  const facts = useList(t, "home.skills.facts");

  return (
    <section id="skills" className="block block--skills" aria-labelledby="skills-title">
      <div className="wrap skills">
        <div>
          <h2 id="skills-title" className="block__title">
            {t("home.skills.title")}
          </h2>
          <dl className="skill-list">
            {groups.map((g) => (
              <div className="skill-list__row" key={g.name}>
                <dt>{g.name}</dt>
                <dd>{g.items}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="facts">
          <h3 className="sub-title sub-title--tight">{t("home.skills.factsTitle")}</h3>
          <dl>
            {facts.map((f) => (
              <div className="facts__row" key={f.name}>
                <dt>{f.name}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact({ t, resumeUrl }) {
  const email = t("home.contact.email");
  const phone = t("home.contact.phone");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section id="contact" className="block block--contact" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title" className="block__title">
          {t("home.contact.title")}
        </h2>
        <p className="block__lead">{t("home.contact.lead")}</p>

        <div className="contact__email">
          <a href={`mailto:${email}`} className="contact__address">
            {email}
          </a>
          <button type="button" className="btn btn--line btn--small" onClick={copy}>
            {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
            <span aria-live="polite">
              {copied ? t("home.contact.copied") : t("home.contact.copy")}
            </span>
          </button>
        </div>

        <ul className="contact__links">
          <li>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> {t("home.contact.github")}
              <FiArrowUpRight aria-hidden="true" className="ext" />
            </a>
          </li>
          <li>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <FiFileText aria-hidden="true" /> {t("home.contact.resume")}
              <FiArrowUpRight aria-hidden="true" className="ext" />
            </a>
          </li>
          <li>
            <a href={`tel:${phone.replace(/[\s-]/g, "")}`}>
              <FiPhone aria-hidden="true" /> {phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Home() {
  const { t } = useLanguage();
  const resumeUrl = t("experience.resumeUrl");

  return (
    <main id="main" className="home">
      <Hero t={t} resumeUrl={resumeUrl} />
      <Now t={t} />
      <Experience t={t} />
      <Work t={t} />
      <Skills t={t} />
      <Contact t={t} resumeUrl={resumeUrl} />
      <footer className="site-footer">
        <div className="wrap">
          <p>{t("home.footer")}</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;
