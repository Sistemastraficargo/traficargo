"use client";
import { useEffect, useState } from "react";
export type SiteLanguage = "es" | "en";
export function useSiteLanguage() {
  const [language, setLanguage] = useState<SiteLanguage>("es");
  useEffect(() => {
    const update = () => { const value = localStorage.getItem("traficargo-language"); setLanguage(value === "en" ? "en" : "es"); };
    update();
    window.addEventListener("storage", update);
    return () => window.removeEventListener("storage", update);
  }, []);
  return language;
}
