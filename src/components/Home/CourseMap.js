import React from "react";

/*
 * Stylised GreenCare course map: one hole with contour rings around the
 * green, bunkers, a tee box, photo-report pins and three work zones whose
 * state matches the legend rendered beside it.
 */
const ZONES = [
  {
    key: "open",
    points: "196,300 262,268 290,322 226,350",
    pin: [243, 309],
    tag: [226, 262],
  },
  {
    key: "assigned",
    points: "438,168 492,176 488,214 434,206",
    pin: [463, 191],
    tag: [512, 214],
  },
  {
    key: "resolved",
    points: "322,214 364,200 376,236 334,250",
    pin: [349, 225],
    tag: [304, 196],
  },
];

function CourseMap({ zones = [], caption }) {
  return (
    <figure className="course-map">
      <svg
        viewBox="0 0 600 440"
        role="img"
        aria-label={caption}
        className="course-map__svg"
      >
        <rect width="600" height="440" className="cm-rough" rx="10" />

        {/* terrain contours */}
        <g className="cm-contour">
          <path d="M-10 90 C120 60 220 120 330 70 S520 10 610 40" />
          <path d="M-10 140 C110 110 230 170 340 120 S520 60 610 90" />
          <path d="M-10 420 C90 380 160 410 250 430" />
          <path d="M420 450 C470 400 540 390 610 400" />
          <ellipse cx="498" cy="118" rx="96" ry="70" />
          <ellipse cx="498" cy="118" rx="122" ry="92" />
        </g>

        {/* fairway, green, bunkers, tee */}
        <path
          className="cm-fairway"
          d="M64 384 C120 306 184 284 244 236 C302 188 332 126 420 96 C480 76 540 84 560 122 C578 160 540 200 482 210 C402 226 362 262 322 312 C282 362 204 402 132 412 C92 416 50 410 64 384 Z"
        />
        <ellipse className="cm-green" cx="500" cy="122" rx="58" ry="42" />
        <ellipse className="cm-green-ring" cx="500" cy="122" rx="40" ry="28" />
        <ellipse className="cm-bunker" cx="430" cy="178" rx="24" ry="12" />
        <ellipse className="cm-bunker" cx="392" cy="92" rx="17" ry="10" />
        <rect className="cm-tee" x="78" y="366" width="34" height="16" rx="4" />

        {/* shot line from tee to pin */}
        <path className="cm-shot" d="M95 374 Q260 210 503 118" />

        {/* zones */}
        {ZONES.map((z, i) => (
          <g key={z.key} className={`cm-zone cm-zone--${z.key}`}>
            <polygon points={z.points} />
            <circle cx={z.pin[0]} cy={z.pin[1]} r="5" className="cm-zone__pin" />
            <text x={z.tag[0]} y={z.tag[1]} className="cm-zone__tag">
              {zones[i]?.label}
            </text>
          </g>
        ))}

        {/* flag */}
        <g className="cm-flag">
          <line x1="503" y1="122" x2="503" y2="80" />
          <path d="M503 80 L526 88 L503 96 Z" />
          <ellipse cx="503" cy="122" rx="5" ry="2" />
        </g>

        <text x="24" y="38" className="cm-hole">7</text>
        <text x="24" y="58" className="cm-par">PAR 4</text>
      </svg>

      <figcaption className="course-map__legend">
        <p className="course-map__caption">{caption}</p>
        <ul>
          {ZONES.map((z, i) => (
            <li key={z.key} className={`legend legend--${z.key}`}>
              <span className="legend__swatch" aria-hidden="true" />
              <span className="legend__label">{zones[i]?.label}</span>
              <span className="legend__status">{zones[i]?.status}</span>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

export default CourseMap;
