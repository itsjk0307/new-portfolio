import { useEffect, useRef } from "react";

/*
 * Topographic contour field drawn with marching squares.
 * Terrain = a few gaussian hills + low-frequency ripples. Pointer movement
 * raises a temporary hill under the cursor. Every fourth line is an
 * "index contour" (heavier), as on real survey maps. A pin flag marks
 * the main summit.
 */

const HILLS = [
  { x: 0.76, y: 0.4, r: 0.24, a: 1.0 },
  { x: 0.95, y: 0.86, r: 0.2, a: 0.55 },
  { x: 0.46, y: 0.95, r: 0.3, a: -0.45 },
  { x: 0.16, y: 0.16, r: 0.22, a: 0.42 },
  { x: 0.58, y: 0.1, r: 0.16, a: -0.3 },
];
const SUMMIT = HILLS[0];
const MIN = -0.7;
const MAX = 1.5;
const LEVELS = 20;
const STEP = (MAX - MIN) / LEVELS;
const INTRO_MS = 1600;

function readColors() {
  const cs = getComputedStyle(document.documentElement);
  return {
    line: cs.getPropertyValue("--contour").trim() || "#c9d0db",
    strong: cs.getPropertyValue("--contour-strong").trim() || "#a3aec0",
    flag: cs.getPropertyValue("--flag").trim() || "#b8923f",
    ink: cs.getPropertyValue("--text").trim() || "#0e1726",
  };
}

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function ContourField({ className = "", showFlag = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const host = canvas.parentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let cell = 12;
    let cols = 0;
    let rows = 0;
    let vals = new Float32Array(0);
    let colors = readColors();
    let intro = reduce ? 1 : 0;
    let start = null;
    let raf = 0;
    const p = { x: 0, y: 0, tx: 0, ty: 0, s: 0, ts: 0 };

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cell = w < 640 ? 10 : 12;
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);
      vals = new Float32Array((cols + 1) * (rows + 1));
    }

    function elevation(px, py) {
      const m = Math.max(w, h);
      let v = 0;
      for (let k = 0; k < HILLS.length; k += 1) {
        const hl = HILLS[k];
        const dx = (px - hl.x * w) / (hl.r * m);
        const dy = (py - hl.y * h) / (hl.r * m);
        v += hl.a * Math.exp(-(dx * dx + dy * dy));
      }
      const nx = px / m;
      const ny = py / m;
      v +=
        0.07 * Math.sin(nx * 11 + ny * 5) +
        0.05 * Math.sin(ny * 13 - nx * 4 + 1.3) +
        0.025 * Math.sin((nx + ny) * 23);
      if (p.s > 0.002) {
        const r = 0.11 * m;
        const dx = (px - p.x) / r;
        const dy = (py - p.y) / r;
        v += p.s * 0.75 * Math.exp(-(dx * dx + dy * dy));
      }
      return v;
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const stride = cols + 1;
      for (let j = 0; j <= rows; j += 1) {
        for (let i = 0; i <= cols; i += 1) {
          vals[j * stride + i] = elevation(i * cell, j * cell);
        }
      }

      const shown = easeOut(intro) * LEVELS;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let l = 0; l < LEVELS; l += 1) {
        if (l > shown) break;
        const iso = MIN + (l + 0.5) * STEP;
        const major = l % 4 === 3;
        ctx.globalAlpha = Math.min(1, shown - l);
        ctx.strokeStyle = major ? colors.strong : colors.line;
        ctx.lineWidth = major ? 1.35 : 0.85;
        ctx.beginPath();

        for (let j = 0; j < rows; j += 1) {
          const y = j * cell;
          for (let i = 0; i < cols; i += 1) {
            const a = vals[j * stride + i];
            const b = vals[j * stride + i + 1];
            const c = vals[(j + 1) * stride + i + 1];
            const d = vals[(j + 1) * stride + i];
            let idx = 0;
            if (a > iso) idx |= 8;
            if (b > iso) idx |= 4;
            if (c > iso) idx |= 2;
            if (d > iso) idx |= 1;
            if (idx === 0 || idx === 15) continue;

            const x = i * cell;
            const tX = x + (cell * (iso - a)) / (b - a);
            const rY = y + (cell * (iso - b)) / (c - b);
            const bX = x + (cell * (iso - d)) / (c - d);
            const lY = y + (cell * (iso - a)) / (d - a);
            const xr = x + cell;
            const yb = y + cell;

            switch (idx) {
              case 1:
              case 14:
                ctx.moveTo(x, lY);
                ctx.lineTo(bX, yb);
                break;
              case 2:
              case 13:
                ctx.moveTo(bX, yb);
                ctx.lineTo(xr, rY);
                break;
              case 3:
              case 12:
                ctx.moveTo(x, lY);
                ctx.lineTo(xr, rY);
                break;
              case 4:
              case 11:
                ctx.moveTo(tX, y);
                ctx.lineTo(xr, rY);
                break;
              case 6:
              case 9:
                ctx.moveTo(tX, y);
                ctx.lineTo(bX, yb);
                break;
              case 7:
              case 8:
                ctx.moveTo(x, lY);
                ctx.lineTo(tX, y);
                break;
              case 5:
                ctx.moveTo(tX, y);
                ctx.lineTo(xr, rY);
                ctx.moveTo(x, lY);
                ctx.lineTo(bX, yb);
                break;
              case 10:
                ctx.moveTo(x, lY);
                ctx.lineTo(tX, y);
                ctx.moveTo(bX, yb);
                ctx.lineTo(xr, rY);
                break;
              default:
                break;
            }
          }
        }
        ctx.stroke();
      }

      // Pin flag on the main summit, planted once the terrain has drawn in.
      const flagT = Math.max(0, (intro - 0.75) / 0.25);
      if (showFlag && flagT > 0) {
        const fx = SUMMIT.x * w;
        const fy = SUMMIT.y * h;
        const lift = (1 - easeOut(flagT)) * 10;
        ctx.globalAlpha = easeOut(flagT);
        ctx.strokeStyle = colors.ink;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(fx, fy, 7, 2.5, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(fx, fy - lift);
        ctx.lineTo(fx, fy - 46 - lift);
        ctx.stroke();
        ctx.fillStyle = colors.flag;
        ctx.beginPath();
        ctx.moveTo(fx, fy - 46 - lift);
        ctx.lineTo(fx + 24, fy - 38 - lift);
        ctx.lineTo(fx, fy - 30 - lift);
        ctx.closePath();
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function frame(t) {
      raf = 0;
      if (start === null) start = t;
      if (intro < 1) intro = Math.min(1, (t - start) / INTRO_MS);
      p.x += (p.tx - p.x) * 0.16;
      p.y += (p.ty - p.y) * 0.16;
      p.s += (p.ts - p.s) * 0.08;
      draw();
      const settled =
        intro >= 1 &&
        Math.abs(p.tx - p.x) < 0.4 &&
        Math.abs(p.ty - p.y) < 0.4 &&
        Math.abs(p.ts - p.s) < 0.004;
      if (!settled) raf = requestAnimationFrame(frame);
    }

    function kick() {
      if (!raf) raf = requestAnimationFrame(frame);
    }

    function onMove(e) {
      if (e.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      p.tx = e.clientX - rect.left;
      p.ty = e.clientY - rect.top;
      if (p.s < 0.01) {
        p.x = p.tx;
        p.y = p.ty;
      }
      p.ts = 1;
      kick();
    }

    function onLeave() {
      p.ts = 0;
      kick();
    }

    resize();
    kick();

    const ro = new ResizeObserver(() => {
      resize();
      kick();
    });
    ro.observe(canvas);

    const mo = new MutationObserver(() => {
      colors = readColors();
      kick();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    if (!reduce && host) {
      host.addEventListener("pointermove", onMove);
      host.addEventListener("pointerleave", onLeave);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      if (host) {
        host.removeEventListener("pointermove", onMove);
        host.removeEventListener("pointerleave", onLeave);
      }
    };
  }, [showFlag]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
