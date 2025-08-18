import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { LiaSun } from "react-icons/lia";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark mode if no preference is stored
    if ("theme" in localStorage) {
      return localStorage.theme === "dark";
    }
    return true; // default dark
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="absolute sm:fixed top-4 right-4 sm:right-12 sm:top-6 z-50">
      <label
        className={`relative w-[50px] h-[26px] rounded-full flex items-center justify-between px-1 cursor-pointer
          transition-colors duration-300
          ${darkMode ? "bg-black border border-gray-300" : "bg-gray-200"}
        `}
      >
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <FaMoon className="text-yellow-400 text-sm" />
        <LiaSun className="text-orange-400 text-lg" />
        <span
          className="absolute left-[2px] top-[2px] w-[22px] h-[22px] bg-white rounded-full
                     transition-transform duration-200 peer-checked:translate-x-[24px]"
        />
      </label>
    </div>
  );
}