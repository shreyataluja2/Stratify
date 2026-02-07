
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brand-red": "#d32f2f",
        "brand-purple": "#8e24aa",
        "brand-yellow": "#fbc02d",
        "primary": "var(--primary)",
        "sidebar-bg": "#F8FAFC",
        "sidebar-text": "#0F172A",
        "sidebar-border": "#e2e8f0", 
        "sidebar-hover": "#f1f5f9",
        "sidebar-active": "#fef2f2",
        "background-light": "#f8f6f6",
        "background-dark": "#221010",
      },
      fontFamily: {
        "display": ["var(--font-inter)", "var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        "lg": "var(--radius)",
        "md": "calc(var(--radius) - 2px)",
        "sm": "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
