/** Keep in sync with the inline script in `public/index.html`. */
export const THEME_STORAGE_KEY = "portfolio-theme";

export function readStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    // ignore
  }
  return null;
}

export function getSystemTheme() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "dark";
  }
  try {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (!mq) return "dark";
    return mq.matches ? "dark" : "light";
  } catch {
    return "dark";
  }
}

export function getInitialTheme() {
  return readStoredTheme() ?? getSystemTheme();
}
