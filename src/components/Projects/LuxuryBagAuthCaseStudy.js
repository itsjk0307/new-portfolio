import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiCpu, FiDatabase, FiLayers, FiTarget } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import "./LuxuryBagAuthCaseStudy.css";

const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

function SlideFigure({ src, caption, onOpen }) {
  const [broken, setBroken] = useState(false);
  return (
    <figure className="quazar-fig">
      <button
        type="button"
        className="quazar-fig__btn"
        onClick={() => onOpen(src, caption)}
      >
        {broken ? (
          <div className="quazar-fig__fallback" role="img" aria-label={caption}>
            <span className="quazar-fig__fallback-label">{caption}</span>
          </div>
        ) : (
          <img
            src={src}
            alt=""
            loading="lazy"
            onError={() => setBroken(true)}
          />
        )}
      </button>
      <figcaption className="quazar-fig__cap">{caption}</figcaption>
    </figure>
  );
}

function LuxuryBagAuthCaseStudy() {
  const { t } = useLanguage();
  const p = "caseStudyQuazar";
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
      [1, 2, 3, 4].map((n) => ({
        src: `${publicUrl}/projects/quazar-luxury/slide-${n}.svg`,
        caption: t(`${p}.slideCaptions.${n - 1}`),
      })),
    [t, p]
  );

  const pipelineSteps = t(`${p}.pipelineSteps`, { returnObjects: true });
  const dataBullets = t(`${p}.dataBullets`, { returnObjects: true });
  const roleItems = t(`${p}.roleItems`, { returnObjects: true });

  const steps = Array.isArray(pipelineSteps) ? pipelineSteps : [];
  const dataList = Array.isArray(dataBullets) ? dataBullets : [];
  const roles = Array.isArray(roleItems) ? roleItems : [];

  return (
    <main className="page-shell quazar-cs">
      <div className="section-inner quazar-cs__inner">
        <Link className="back-link" to="/projects">
          {t("projects.projectDetail.backToList")}
        </Link>

        <header className="quazar-cs__hero">
          <p className="quazar-cs__eyebrow">{t(`${p}.eyebrow`)}</p>
          <h1 className="quazar-cs__title">{t(`${p}.title`)}</h1>
          <p className="quazar-cs__lead">{t(`${p}.subtitle`)}</p>
          <ul className="quazar-cs__chips" aria-label={t(`${p}.chipsAria`)}>
            <li>{t(`${p}.chipCv`)}</li>
            <li>{t(`${p}.chipDetection`)}</li>
            <li>{t(`${p}.chipProd`)}</li>
          </ul>
        </header>

        <section className="quazar-card" aria-labelledby="quazar-overview">
          <h2 id="quazar-overview" className="quazar-card__h">
            {t(`${p}.overviewTitle`)}
          </h2>
          <p className="quazar-card__p">{t(`${p}.overviewBody`)}</p>
        </section>

        <section className="quazar-card" aria-labelledby="quazar-challenge">
          <h2 id="quazar-challenge" className="quazar-card__h">
            {t(`${p}.challengeTitle`)}
          </h2>
          <p className="quazar-card__p">{t(`${p}.challengeBody`)}</p>
        </section>

        <section className="quazar-section" aria-labelledby="quazar-pipeline">
          <div className="quazar-section__head">
            <h2 id="quazar-pipeline" className="quazar-section__title">
              {t(`${p}.pipelineTitle`)}
            </h2>
            <p className="quazar-section__intro">{t(`${p}.pipelineIntro`)}</p>
          </div>

          <div className="quazar-pipeline" role="list">
            {steps.map((text, i) => (
              <React.Fragment key={i}>
                {i > 0 ? (
                  <div className="quazar-pipeline__connector" aria-hidden="true">
                    <span className="quazar-pipeline__line" />
                    <span className="quazar-pipeline__chev" />
                  </div>
                ) : null}
                <div className="quazar-pipeline__node" role="listitem">
                  <span className="quazar-pipeline__idx">
                    {t("projects.projectDetail.step", { n: i + 1 })}
                  </span>
                  <p className="quazar-pipeline__text">{text}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="quazar-pipeline__ensemble">
            <div className="quazar-pipeline__ensemble-bar" aria-hidden="true" />
            <div className="quazar-card quazar-card--accent">
              <h3 className="quazar-card__h quazar-card__h--sm">
                {t(`${p}.ensembleTitle`)}
              </h3>
              <p className="quazar-card__p">{t(`${p}.ensembleBody`)}</p>
            </div>
          </div>
        </section>

        <section className="quazar-split" aria-labelledby="quazar-data">
          <div className="quazar-card quazar-card--stat">
            <h2 id="quazar-data" className="quazar-card__h">
              <FiDatabase className="quazar-card__icon" aria-hidden />
              {t(`${p}.dataTitle`)}
            </h2>
            <p className="quazar-stat__label">{t(`${p}.dataStatLabel`)}</p>
            <p className="quazar-stat__value">{t(`${p}.dataStatValue`)}</p>
            <p className="quazar-card__p quazar-card__p--tight">
              {t(`${p}.dataLead`)}
            </p>
            <ul className="quazar-list">
              {dataList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="quazar-card">
            <h2 className="quazar-card__h">
              <FiCpu className="quazar-card__icon" aria-hidden />
              {t(`${p}.modelsTitle`)}
            </h2>
            <p className="quazar-card__p">{t(`${p}.modelsLead`)}</p>
            <div className="quazar-model-grid">
              <div className="quazar-model-tile">
                <h3 className="quazar-model-tile__h">ResNet</h3>
                <p className="quazar-model-tile__p">{t(`${p}.modelResNet`)}</p>
              </div>
              <div className="quazar-model-tile">
                <h3 className="quazar-model-tile__h">DenseNet</h3>
                <p className="quazar-model-tile__p">{t(`${p}.modelDenseNet`)}</p>
              </div>
              <div className="quazar-model-tile">
                <h3 className="quazar-model-tile__h">ViT</h3>
                <p className="quazar-model-tile__p">{t(`${p}.modelVit`)}</p>
              </div>
            </div>
            <h3 className="quazar-card__subh">{t(`${p}.perPartTitle`)}</h3>
            <p className="quazar-card__p">{t(`${p}.perPartBody`)}</p>
            <h3 className="quazar-card__subh">
              <FiLayers className="quazar-card__icon quazar-card__icon--inline" aria-hidden />
              {t(`${p}.ensembleArchTitle`)}
            </h3>
            <p className="quazar-card__p">{t(`${p}.ensembleArchBody`)}</p>
          </div>
        </section>

        <section className="quazar-card quazar-card--diagram" aria-labelledby="quazar-arch">
          <h2 id="quazar-arch" className="quazar-card__h">
            <FiTarget className="quazar-card__icon" aria-hidden />
            {t(`${p}.architectureTitle`)}
          </h2>
          <p className="quazar-card__p">{t(`${p}.architectureBody`)}</p>
          <div className="quazar-arch-svg" aria-hidden="true">
            <svg viewBox="0 0 880 220" className="quazar-arch-svg__inner">
              <defs>
                <marker
                  id="quazarArrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="7"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" />
                </marker>
              </defs>
              <rect x="20" y="70" width="120" height="80" rx="10" fill="#1e293b" stroke="#475569" />
              <text x="80" y="118" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="system-ui">
                Image
              </text>
              <line
                x1="140"
                y1="110"
                x2="175"
                y2="110"
                stroke="#64748b"
                strokeWidth="2"
                markerEnd="url(#quazarArrow)"
              />
              <rect x="180" y="70" width="120" height="80" rx="10" fill="#312e81" stroke="#6366f1" />
              <text x="240" y="112" textAnchor="middle" fill="#c7d2fe" fontSize="11" fontFamily="system-ui">
                Detector
              </text>
              <text x="240" y="130" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui">
                YOLO crops
              </text>
              <line
                x1="300"
                y1="110"
                x2="335"
                y2="110"
                stroke="#64748b"
                strokeWidth="2"
                markerEnd="url(#quazarArrow)"
              />
              <rect x="340" y="55" width="100" height="110" rx="10" fill="#111827" stroke="#334155" />
              <text x="390" y="95" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="system-ui">
                Preprocess
              </text>
              <text x="390" y="118" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontFamily="system-ui">
                LBP / norm
              </text>
              <line
                x1="440"
                y1="110"
                x2="475"
                y2="110"
                stroke="#64748b"
                strokeWidth="2"
                markerEnd="url(#quazarArrow)"
              />
              <rect x="480" y="40" width="90" height="140" rx="10" fill="#0f172a" stroke="#475569" />
              <text x="525" y="78" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontFamily="system-ui">
                Part classifiers
              </text>
              <text x="525" y="100" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui">
                R / D / V
              </text>
              <text x="525" y="125" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="system-ui">
                multi-model
              </text>
              <line
                x1="570"
                y1="110"
                x2="605"
                y2="110"
                stroke="#64748b"
                strokeWidth="2"
                markerEnd="url(#quazarArrow)"
              />
              <rect x="610" y="65" width="120" height="90" rx="10" fill="#4c1d95" stroke="#a78bfa" strokeOpacity="0.6" />
              <text x="670" y="108" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontFamily="system-ui">
                Weighted
              </text>
              <text x="670" y="128" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontFamily="system-ui">
                ensemble
              </text>
              <line
                x1="730"
                y1="110"
                x2="765"
                y2="110"
                stroke="#64748b"
                strokeWidth="2"
                markerEnd="url(#quazarArrow)"
              />
              <rect x="770" y="75" width="90" height="70" rx="10" fill="#14532d" stroke="#22c55e" strokeOpacity="0.5" />
              <text x="815" y="118" textAnchor="middle" fill="#bbf7d0" fontSize="11" fontFamily="system-ui">
                Authenticity
              </text>
            </svg>
          </div>
          <p className="quazar-card__note">{t(`${p}.architectureNote`)}</p>
        </section>

        <section className="quazar-card" aria-labelledby="quazar-role">
          <h2 id="quazar-role" className="quazar-card__h">
            {t(`${p}.roleTitle`)}
          </h2>
          <ul className="quazar-list quazar-list--roles">
            {roles.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="quazar-figures" aria-labelledby="quazar-figures">
          <h2 id="quazar-figures" className="quazar-section__title">
            {t(`${p}.figuresTitle`)}
          </h2>
          <p className="quazar-section__intro">{t(`${p}.figuresLead`)}</p>
          <div className="quazar-figures__grid">
            {slides.map((s) => (
              <SlideFigure
                key={s.src}
                src={s.src}
                caption={s.caption}
                onOpen={(src, caption) => setLightbox({ src, caption })}
              />
            ))}
          </div>
        </section>
      </div>

      {lightbox ? (
        <div
          className="quazar-lb"
          role="dialog"
          aria-modal="true"
          aria-label={t(`${p}.figuresTitle`)}
        >
          <button
            type="button"
            className="quazar-lb__backdrop"
            aria-label={t("projects.projectDetail.close")}
            onClick={close}
          />
          <div className="quazar-lb__panel">
            <button
              type="button"
              className="quazar-lb__close"
              onClick={close}
              aria-label={t("projects.projectDetail.close")}
            >
              ×
            </button>
            <img src={lightbox.src} alt="" className="quazar-lb__img" />
            <p className="quazar-lb__cap">{lightbox.caption}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default LuxuryBagAuthCaseStudy;
