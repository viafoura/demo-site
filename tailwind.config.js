const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      nav: "#3d3e39",
      transparent: "transparent",
      currentColor: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      sky: colors.sky,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
