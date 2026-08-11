"use client";

import { useEffect, useSyncExternalStore } from "react";

const themeEvent = "portfolio-theme-change";
const getServerSnapshot = () => "dark" as const;
const getSnapshot = () => {
  const saved = window.localStorage.getItem("theme");
  return saved === "light" || saved === "dark" ? saved : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};
const subscribe = (notify: () => void) => {
  window.addEventListener("storage", notify);
  window.addEventListener(themeEvent, notify);
  return () => { window.removeEventListener("storage", notify); window.removeEventListener(themeEvent, notify); };
};

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const toggle = () => { const next = theme === "dark" ? "light" : "dark"; window.localStorage.setItem("theme", next); window.dispatchEvent(new Event(themeEvent)); };
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}><span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span></button>;
}
