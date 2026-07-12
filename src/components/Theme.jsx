import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("ig-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("ig-theme", theme);
    } catch {
      // Private browsing can disable localStorage.
    }
  }, [theme]);

  return { theme, toggle: () => setTheme((value) => (value === "light" ? "dark" : "light")) };
}
