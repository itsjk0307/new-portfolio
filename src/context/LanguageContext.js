import React, { useCallback, useEffect, useMemo } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../i18n";

export const SUPPORTED_LOCALES = ["en", "ko", "uz"];

export function LanguageProvider({ children }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

/**
 * Thin wrapper over react-i18next so existing components keep using `useLanguage()`.
 * Use `t(key, { returnObjects: true })` for arrays/objects in JSON.
 */
export function useLanguage() {
  const { t, i18n } = useTranslation();

  const locale = useMemo(
    () => (i18n.resolvedLanguage || i18n.language || "en").split("-")[0],
    [i18n.language, i18n.resolvedLanguage]
  );

  const setLocale = useCallback(
    (next) => {
      if (!SUPPORTED_LOCALES.includes(next)) return;
      void i18n.changeLanguage(next);
    },
    [i18n]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return useMemo(
    () => ({
      locale,
      setLocale,
      t,
      supportedLocales: SUPPORTED_LOCALES,
    }),
    [locale, setLocale, t]
  );
}
