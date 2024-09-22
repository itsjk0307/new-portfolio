// src/context/LanguageContext.js
import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default to English

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ko" : "en")); // Toggle between English and Korean
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
