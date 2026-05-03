import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { initPromise } from "./i18n";

test("renders after i18n loads", async () => {
  await initPromise;
  render(
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
  expect(screen.getByRole("navigation", { name: /primary/i })).toBeInTheDocument();
});
