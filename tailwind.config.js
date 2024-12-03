/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          50: "#eaeaea",
          100: "#bebebf",
          200: "#9e9e9f",
          300: "#7d7d7e",
          400: "#5c5c5e",
          500: "#3c3c3d",
          600: "#2d2d2e",
          700: "#1f1f20",
          800: "#141415",
          900: "#0a0a0b",
        },
      },
    },
  },
  plugins: [],
};
