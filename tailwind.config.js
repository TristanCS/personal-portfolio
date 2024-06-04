/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      primary: "#00ADB5",
      secondary: "#393E46",
      tertiary: "#222831",
      complimentary: "#EEEEEE",
    },
  },
};
