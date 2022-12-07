import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const HeaderComponent = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = {
    background: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
  };
  return (
    <div className="header" style={theme}>
      헤더
      {darkMode ? (
        <button className="toggleBtn" onClick={toggleDarkMode}>
          🌞
        </button>
      ) : (
        <button className="toggleBtn" onClick={toggleDarkMode}>
          🌝
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
