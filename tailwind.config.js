/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lgGC1: "#097963",
        lgGC2: "#6a1aa3",
        lgGC3: "#a3d5df",
      },
    },
  },
  plugins: [],
};
