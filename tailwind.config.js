/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.html", "./src/**/*.css"],
  theme: {
    extend: {
      screens: {
        mobile: "576px",
        tablet: "768px",
        desctop: "1024px",
        "large-desctop": "1200px",
      },
      colors: {
        "page-red": "#d0473d",
        "page-orange": "#d73f0e",
      },
      fontFamily: {
        main: ["Jost"],
      },
    },
  },
  plugins: [require("tailwindcss")("tailwind.config.js"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
