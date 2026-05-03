import { useReducedMotion } from "framer-motion";

/**
 * Subtle scroll-triggered fade for section wrappers (Framer Motion).
 * Respects prefers-reduced-motion.
 */
export function useScrollFadeProps({ delay = 0 } = {}) {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : { opacity: 0, y: 18 },
    whileInView: reduce ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-56px 0px -32px 0px" },
    transition: {
      duration: reduce ? 0 : 0.42,
      ease: [0.22, 1, 0.36, 1],
      delay: reduce ? 0 : delay,
    },
  };
}
