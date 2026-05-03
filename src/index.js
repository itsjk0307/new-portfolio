import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { initPromise } from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));

initPromise.then(() => {
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
});

reportWebVitals();
