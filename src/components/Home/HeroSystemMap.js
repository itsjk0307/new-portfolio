import React, { useEffect, useRef, useState } from "react";

/*
 * Live GreenCare architecture for the hero.
 * A request dot travels: field app -> FastAPI -> Gemini -> FastAPI -> PostgreSQL,
 * lighting each edge and node as it passes. Pauses when off-screen or when the
 * tab is hidden; static (no dot) under prefers-reduced-motion.
 */

const NODES = [
  { id: "field", x: 10, y: 30, w: 140, h: 46, labelKey: "field" },
  { id: "admin", x: 10, y: 150, w: 140, h: 46, labelKey: "admin" },
  { id: "api", x: 300, y: 150, w: 200, h: 46, label: "FastAPI" },
  { id: "db", x: 280, y: 290, w: 120, h: 46, label: "PostgreSQL" },
  { id: "ai", x: 420, y: 290, w: 120, h: 46, label: "Gemini" },
];

const EDGES = [
  { id: "field-api", d: "M150 53 H400 V150", label: "REST", lx: 275, ly: 44, kind: "rest" },
  { id: "admin-api", d: "M150 173 H300", label: "REST", lx: 225, ly: 164, kind: "rest" },
  { id: "api-db", d: "M340 196 V290", label: "SQL", lx: 348, ly: 248, kind: "rest", anchor: "start" },
  { id: "api-ai", d: "M480 196 V290", label: "SDK", lx: 488, ly: 248, kind: "sdk", anchor: "start" },
];

const FLOW = [
  { edge: "field-api", dir: 1, node: "api" },
  { edge: "api-ai", dir: 1, node: "ai" },
  { edge: "api-ai", dir: -1, node: "api" },
  { edge: "api-db", dir: 1, node: "db" },
];

const MOVE_MS = 1100;
const HOLD_MS = 700;
const REST_MS = 1800;
const START_DELAY_MS = 900;

const ease = (p) => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2);

function HeroSystemMap({ t }) {
  const rootRef = useRef(null);
  const dotRef = useRef(null);
  const pathRefs = useRef({});
  const [step, setStep] = useState(-1);
  const [arrived, setArrived] = useState(false);

  const rawSteps = t("home.hero.map.steps", { returnObjects: true });
  const steps = Array.isArray(rawSteps) ? rawSteps : [];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let raf = 0;
    let inView = true;
    let last = null;
    let idx = 0;
    let phase = "move";
    let elapsed = -START_DELAY_MS;
    setStep(0);

    const running = () => inView && !document.hidden;

    function tick(now) {
      raf = 0;
      if (!running()) {
        last = null;
        return;
      }
      if (last !== null) elapsed += now - last;
      last = now;

      const s = FLOW[idx];
      const dot = dotRef.current;
      if (phase === "move") {
        const p = Math.max(0, Math.min(1, elapsed / MOVE_MS));
        const path = pathRefs.current[s.edge];
        if (path && dot && elapsed >= 0) {
          const len = path.getTotalLength();
          const e = ease(p);
          const pt = path.getPointAtLength(s.dir > 0 ? e * len : (1 - e) * len);
          dot.setAttribute("cx", pt.x);
          dot.setAttribute("cy", pt.y);
          dot.style.opacity = "1";
        }
        if (p >= 1) {
          phase = "hold";
          elapsed = 0;
          setArrived(true);
        }
      } else {
        const wait = idx === FLOW.length - 1 ? REST_MS : HOLD_MS;
        if (elapsed >= wait) {
          if (idx === FLOW.length - 1 && dot) dot.style.opacity = "0";
          idx = (idx + 1) % FLOW.length;
          phase = "move";
          elapsed = idx === 0 ? -300 : 0;
          setStep(idx);
          setArrived(false);
        }
      }
      raf = requestAnimationFrame(tick);
    }

    const resume = () => {
      if (running() && !raf) {
        last = null;
        raf = requestAnimationFrame(tick);
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      resume();
    });
    if (rootRef.current) io.observe(rootRef.current);
    document.addEventListener("visibilitychange", resume);
    resume();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", resume);
    };
  }, []);

  const current = step >= 0 ? FLOW[step] : null;
  const activeEdge = current && !arrived ? current.edge : null;
  const activeNode = current && arrived ? current.node : null;

  return (
    <figure className="sysmap" ref={rootRef}>
      <svg
        viewBox="0 0 550 346"
        className="sysmap__svg"
        role="img"
        aria-label={t("home.hero.map.aria")}
      >
        <defs>
          <marker
            id="sysmap-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" className="sysmap__arrowhead" />
          </marker>
        </defs>

        {EDGES.map((e) => (
          <g
            key={e.id}
            className={`sysmap__edge sysmap__edge--${e.kind} ${
              activeEdge === e.id ? "is-active" : ""
            }`}
          >
            <path
              ref={(el) => {
                pathRefs.current[e.id] = el;
              }}
              d={e.d}
              markerEnd="url(#sysmap-arrow)"
            />
            <text
              x={e.lx}
              y={e.ly}
              textAnchor={e.anchor || "middle"}
              className="sysmap__proto"
            >
              {e.label}
            </text>
          </g>
        ))}

        {NODES.map((n) => (
          <g
            key={n.id}
            className={`sysmap__node ${activeNode === n.id ? "is-active" : ""}`}
          >
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" />
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {n.labelKey ? t(`home.hero.map.${n.labelKey}`) : n.label}
            </text>
          </g>
        ))}

        <circle ref={dotRef} r="7" cx="-20" cy="-20" className="sysmap__dot" />
      </svg>

      <figcaption className="sysmap__caption" aria-hidden="true">
        {current && steps[step] ? (
          <>
            <span className="sysmap__num">
              {step + 1}/{steps.length}
            </span>
            <span>{steps[step]}</span>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}

export default HeroSystemMap;
