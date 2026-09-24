"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full border border-muted flex items-center justify-center text-muted hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className={`absolute transition-all duration-300 ${currentTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}>
        <Sun size={16} />
      </div>
      <div className={`absolute transition-all duration-300 ${currentTheme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
        <Moon size={16} />
      </div>
    </button>
  );
}
