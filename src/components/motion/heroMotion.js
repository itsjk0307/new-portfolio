import { useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function useHeroContainerProps() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? false : "hidden",
    animate: "visible",
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: reduce ? 0 : 0.09,
          delayChildren: reduce ? 0 : 0.06,
        },
      },
    },
  };
}

export function useHeroItemProps() {
  const reduce = useReducedMotion();
  return {
    variants: {
      hidden: { opacity: 0, y: 14 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduce ? 0 : 0.48, ease },
      },
    },
  };
}
