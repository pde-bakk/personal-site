/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background_colour: "#0a192f",
        footer_colour: "#09162a",
        almost_black: "#040c16",
        accent_purple: "#8B5CF6",
        accent_cyan: "#06B6D4",
        slate_body: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
