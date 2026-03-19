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
        // Corporate Archi-Core Theme
        "archi": {
          "primary": "#c3f5ff",
          "primary-container": "#00e5ff",
          "secondary": "#c6c6c9",
          "background": "#121416",
          "surface": "#121416",
          "surface-container": "#1e2022",
          "surface-container-low": "#1a1c1e",
          "surface-container-high": "#282a2c",
          "surface-container-highest": "#333537",
          "surface-container-lowest": "#0c0e10",
          "on-surface": "#e2e2e5",
          "on-surface-variant": "#bac9cc",
          "outline": "#849396",
          "outline-variant": "#3b494c",
          "surface-dim": "#121416",
          "surface-bright": "#37393b",
          "surface-tint": "#00daf3"
        }
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "corporate": ["Manrope", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "archi-headline": ["Manrope", "sans-serif"]
      },
      borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
    },
  },
  plugins: [],
}
