import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCpu,
  FiKey,
  FiLayers,
  FiZap,
  FiSearch,
  FiTrendingUp,
} from "react-icons/fi";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useLanguage } from "../../context/LanguageContext";
import "./MonitoringDashboardCaseStudy.css";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

const CHART_COLORS = {
  primary: "#6366f1",
  error: "#f87171",
  warn: "#fbbf24",
  info: "#38bdf8",
  grid: "rgba(148, 163, 184, 0.15)",
};

const volumeData = [
  { t: "Mon", v: 12400 },
  { t: "Tue", v: 15820 },
  { t: "Wed", v: 14200 },
  { t: "Thu", v: 18900 },
  { t: "Fri", v: 21040 },
  { t: "Sat", v: 9800 },
  { t: "Sun", v: 7600 },
];

const severityData = [
  { name: "Error", value: 128, fill: CHART_COLORS.error },
  { name: "Warning", value: 402, fill: CHART_COLORS.warn },
  { name: "Info", value: 1820, fill: CHART_COLORS.info },
];

const categoryData = [
  { cat: "Network", n: 210 },
  { cat: "System", n: 340 },
  { cat: "Application", n: 180 },
  { cat: "Database", n: 95 },
  { cat: "Auth", n: 72 },
];

const pieData = [
  { name: "Network", value: 210 },
  { name: "System", value: 340 },
  { name: "Application", value: 180 },
  { name: "Database", value: 95 },
  { name: "Auth", value: 72 },
];

const PIE_COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#22c55e", "#f59e0b"];

function SlideFigure({ src, caption, onOpen }) {
  const [broken, setBroken] = useState(false);
  return (
    <figure className="mon-fig">
      <button
        type="button"
        className="mon-fig__btn"
        onClick={() => onOpen(src, caption)}
      >
        {broken ? (
          <div className="mon-fig__fallback" role="img" aria-label={caption}>
            <span>{caption}</span>
          </div>
        ) : (
          <img src={src} alt="" loading="lazy" onError={() => setBroken(true)} />
        )}
      </button>
      <figcaption className="mon-fig__cap">{caption}</figcaption>
    </figure>
  );
}

function MonitoringDashboardCaseStudy() {
  const { t } = useLanguage();
  const p = "caseStudyLogMonitor";
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);
  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close]);

  const slides = useMemo(
    () =>
      [1, 2, 3].map((n) => ({
        src: `${publicUrl}/projects/monitoring-dashboard/ui-${n}.svg`,
        caption: t(`${p}.uiCaptions.${n - 1}`),
      })),
    [t, p]
  );

  const problemBullets = t(`${p}.problemBullets`, { returnObjects: true });
  const solutionSteps = t(`${p}.solutionSteps`, { returnObjects: true });
  const pipelineSteps = t(`${p}.pipelineSteps`, { returnObjects: true });
  const featureItems = t(`${p}.featureItems`, { returnObjects: true });
  const apiEndpoints = t(`${p}.apiEndpoints`, { returnObjects: true });

  const problems = Array.isArray(problemBullets) ? problemBullets : [];
  const solutions = Array.isArray(solutionSteps) ? solutionSteps : [];
  const pipeline = Array.isArray(pipelineSteps) ? pipelineSteps : [];
  const features = Array.isArray(featureItems) ? featureItems : [];
  const endpoints = Array.isArray(apiEndpoints) ? apiEndpoints : [];

  return (
    <main className="page-shell mon-saas">
      <div className="mon-saas__bg" aria-hidden="true" />
      <div className="section-inner mon-saas__inner">
        <div className="mon-saas__topbar">
          <Link className="mon-saas__back back-link" to="/projects">
            {t("projects.projectDetail.backToList")}
          </Link>
          <span className="mon-saas__badge">{t(`${p}.productBadge`)}</span>
        </div>

        <header className="mon-saas__hero">
          <h1 className="mon-saas__title">{t(`${p}.title`)}</h1>
          <p className="mon-saas__subtitle">{t(`${p}.subtitle`)}</p>
          <div className="mon-saas__hero-actions">
            <span className="mon-saas__pill mon-saas__pill--live">
              <FiActivity className="mon-saas__pill-icon" aria-hidden />
              {t(`${p}.pillLive`)}
            </span>
            <span className="mon-saas__pill">{t(`${p}.pillNlp`)}</span>
            <span className="mon-saas__pill">{t(`${p}.pillApi`)}</span>
          </div>
        </header>

        <section className="mon-panel" aria-labelledby="mon-overview">
          <h2 id="mon-overview" className="mon-panel__title">
            {t(`${p}.overviewTitle`)}
          </h2>
          <p className="mon-panel__lead">{t(`${p}.overviewBody`)}</p>
        </section>

        <div className="mon-grid2">
          <section className="mon-panel mon-panel--accent" aria-labelledby="mon-problem">
            <h2 id="mon-problem" className="mon-panel__title">
              {t(`${p}.problemTitle`)}
            </h2>
            <ul className="mon-list">
              {problems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="mon-panel" aria-labelledby="mon-solution">
            <h2 id="mon-solution" className="mon-panel__title">
              {t(`${p}.solutionTitle`)}
            </h2>
            <ol className="mon-ol">
              {solutions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p className="mon-panel__muted">{t(`${p}.predictIntro`)}</p>
            <ul className="mon-tags">
              <li>{t(`${p}.predictSeverity`)}</li>
              <li>{t(`${p}.predictCategory`)}</li>
            </ul>
          </section>
        </div>

        <section className="mon-panel" aria-labelledby="mon-pipeline">
          <h2 id="mon-pipeline" className="mon-panel__title">
            {t(`${p}.pipelineTitle`)}
          </h2>
          <p className="mon-panel__muted mon-panel__muted--mb">
            {t(`${p}.pipelineSubtitle`)}
          </p>
          <div className="mon-flow" role="list">
            {pipeline.map((label, i) => (
              <React.Fragment key={i}>
                {i > 0 ? (
                  <span className="mon-flow__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
                <div className="mon-flow__step" role="listitem">
                  <span className="mon-flow__idx">{i + 1}</span>
                  <span className="mon-flow__label">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="mon-panel" aria-labelledby="mon-tech">
          <h2 id="mon-tech" className="mon-panel__title">
            <FiLayers className="mon-panel__icon" aria-hidden />
            {t(`${p}.techTitle`)}
          </h2>
          <div className="mon-tech-strip">
            {[
              "FastAPI",
              "scikit-learn",
              "TF-IDF",
              "Logistic Regression",
              "Next.js",
              "Recharts",
            ].map((tech) => (
              <span key={tech} className="mon-tech-chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mon-panel" aria-labelledby="mon-features">
          <h2 id="mon-features" className="mon-panel__title">
            {t(`${p}.featuresTitle`)}
          </h2>
          <div className="mon-features">
            {features.map((text, i) => (
              <div key={i} className="mon-feature-card">
                <div className="mon-feature-card__icon" aria-hidden>
                  {i === 0 ? (
                    <FiZap />
                  ) : i === 1 ? (
                    <FiTrendingUp />
                  ) : i === 2 ? (
                    <FiSearch />
                  ) : (
                    <FiCpu />
                  )}
                </div>
                <p className="mon-feature-card__text">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mon-panel mon-panel--charts" aria-labelledby="mon-charts">
          <div className="mon-panel__head">
            <h2 id="mon-charts" className="mon-panel__title mon-panel__title--flush">
              {t(`${p}.chartsTitle`)}
            </h2>
            <p className="mon-panel__muted">{t(`${p}.chartsLead`)}</p>
          </div>
          <div className="mon-charts-grid">
            <div className="mon-chart-card">
              <h3 className="mon-chart-card__h">{t(`${p}.chartVolume`)}</h3>
              <div className="mon-chart-card__plot">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={volumeData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="monVol" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity={0.35} />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                    <XAxis dataKey="t" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={36} />
                    <Tooltip
                      contentStyle={{
                        background: "#111827",
                        border: "1px solid #334155",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                    />
                    <Area type="monotone" dataKey="v" stroke="#6366f1" fill="url(#monVol)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mon-chart-card">
              <h3 className="mon-chart-card__h">{t(`${p}.chartSeverity`)}</h3>
              <div className="mon-chart-card__plot">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={severityData} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} horizontal={false} />
                    <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis dataKey="name" type="category" width={56} tick={{ fill: "#e2e8f0", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#111827",
                        border: "1px solid #334155",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                      {severityData.map((entry) => (
                        <Cell key={entry.name} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="mon-chart-card mon-chart-card--wide">
              <h3 className="mon-chart-card__h">{t(`${p}.chartCategory`)}</h3>
              <div className="mon-chart-card__plot mon-chart-card__plot--split">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
                    <XAxis dataKey="cat" tick={{ fill: "#94a3b8", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={32} />
                    <Tooltip
                      contentStyle={{
                        background: "#111827",
                        border: "1px solid #334155",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="n" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={48}
                      outerRadius={72}
                      paddingAngle={2}
                    >
                      {pieData.map((_, index) => (
                        <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend wrapperStyle={{ fontSize: "11px", color: "#94a3b8" }} />
                    <Tooltip
                      contentStyle={{
                        background: "#111827",
                        border: "1px solid #334155",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        <section className="mon-panel" aria-labelledby="mon-api">
          <h2 id="mon-api" className="mon-panel__title">
            <FiKey className="mon-panel__icon" aria-hidden />
            {t(`${p}.apiTitle`)}
          </h2>
          <p className="mon-panel__muted mon-panel__muted--mb">{t(`${p}.apiLead`)}</p>
          <div className="mon-api-grid">
            {endpoints.map((ep, i) => (
              <article key={i} className="mon-api-card">
                <div className="mon-api-card__row">
                  <span className={`mon-api-card__method mon-api-card__method--${ep.method.toLowerCase()}`}>
                    {ep.method}
                  </span>
                  <code className="mon-api-card__path">{ep.path}</code>
                </div>
                <p className="mon-api-card__desc">{ep.desc}</p>
                {ep.body && String(ep.body).trim() ? (
                  <pre className="mon-api-card__pre">{ep.body}</pre>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="mon-panel" aria-labelledby="mon-ui">
          <h2 id="mon-ui" className="mon-panel__title">
            {t(`${p}.uiTitle`)}
          </h2>
          <p className="mon-panel__muted mon-panel__muted--mb">{t(`${p}.uiLead`)}</p>
          <div className="mon-fig-grid">
            {slides.map((s) => (
              <SlideFigure
                key={s.src}
                src={s.src}
                caption={s.caption}
                onOpen={(src, cap) => setLightbox({ src, cap })}
              />
            ))}
          </div>
        </section>
      </div>

      {lightbox ? (
        <div className="mon-lb" role="dialog" aria-modal="true" aria-label={t(`${p}.uiTitle`)}>
          <button type="button" className="mon-lb__backdrop" aria-label={t("projects.projectDetail.close")} onClick={close} />
          <div className="mon-lb__panel">
            <button type="button" className="mon-lb__close" onClick={close} aria-label={t("projects.projectDetail.close")}>
              ×
            </button>
            <img src={lightbox.src} alt="" className="mon-lb__img" />
            <p className="mon-lb__cap">{lightbox.cap}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default MonitoringDashboardCaseStudy;
