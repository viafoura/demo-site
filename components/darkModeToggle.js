import { useEffect, useState } from "react";
import { HiOutlineLightBulb, HiOutlineMoon } from "react-icons/hi";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return darkMode ? (
    <HiOutlineMoon
      title="Dark Theme"
      className="mt-1 h-6 w-6 cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
    />
  ) : (
    <HiOutlineLightBulb
      title="Light Theme"
      className="mt-1 h-6 w-6 cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
    />
  );
}
