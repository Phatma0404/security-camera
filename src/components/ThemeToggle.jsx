import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add = "dark";
    } else {
      document.documentElement.classList.remove = "dark";
    }
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default ThemeToggle;
