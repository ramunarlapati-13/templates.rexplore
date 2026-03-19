/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#de8eff",
        "secondary": "#00f4fe",
        "background": "#0e0e0f",
        "surface": "#0e0e0f",
        "surface-container": "#1a191b",
        "surface-container-low": "#131314",
        "surface-container-high": "#201f21",
        "surface-container-highest": "#262627",
        "on-surface": "#ffffff",
        "on-surface-variant": "#adaaab",
        "outline-variant": "#484849",
        "secondary-dim": "#00e5ee",
        "error-dim": "#d73357",
        "error": "#ff6e84",
        "tertiary": "#ff6e81",
        "primary-container": "#d779ff",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "corporate": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [],
}
