import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ko from "./locales/ko.json";
import uz from "./locales/uz.json";

/** Must match `lookupLocalStorage` in detection and Navbar / docs. */
export const LOCALE_STORAGE_KEY = "portfolio-locale";

export const initPromise = i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ko", "uz"],
    defaultNS: "translation",
    ns: ["translation"],
    interpolation: { escapeValue: false },
    resources: {
      en: { translation: en },
      ko: { translation: ko },
      uz: { translation: uz },
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: LOCALE_STORAGE_KEY,
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
