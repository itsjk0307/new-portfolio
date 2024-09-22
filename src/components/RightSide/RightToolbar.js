import React, { useState } from "react";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import soundToggle from "../../assets/images/SoundOn.mp3"; // Importing sound toggle sound
import clickSound from "../../assets/images/buttonClick.mp3"; // Importing click sound
import "./RightSide.css";

const RightToolbar = () => {
  const [theme, setTheme] = useState("dark");
  const [isVolumeOn, setIsVolumeOn] = useState(true);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Language dropdown state

  // Sound toggling logic
  const playSound = (soundFile) => {
    if (isVolumeOn) {
      const audio = new Audio(soundFile);
      audio.play();
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    playSound(clickSound); // Play click sound on theme toggle
  };

  const toggleVolume = () => {
    setIsVolumeOn(!isVolumeOn);
    playSound(soundToggle); // Play sound toggle sound when changing volume state
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
    playSound(clickSound); // Play click sound for language menu toggle
  };

  const changeLanguage = (lang) => {
    console.log(`Language changed to: ${lang}`);
    setIsLanguageMenuOpen(false); // Close the menu after selecting a language
    playSound(clickSound); // Play click sound when changing language
  };

  return (
    <div className="right-toolbar">
      {/* Day/Night Mode Toggle */}
      <button onClick={toggleTheme}>
        {theme === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </button>

      {/* Volume Toggle */}
      <button onClick={toggleVolume}>
        {isVolumeOn ? <VolumeUpOutlinedIcon /> : <VolumeOffOutlinedIcon />}
      </button>

      {/* Language Toggle with Dropdown */}
      <div className="language-container">
        <button onClick={toggleLanguageMenu}>
          <TranslateOutlinedIcon />
        </button>
        {isLanguageMenuOpen && (
          <div className="language-dropdown">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("ko")}>Korean</button>
            <button onClick={() => changeLanguage("uz")}>Uzbek</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightToolbar;
