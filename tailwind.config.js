/** @type {import('tailwindcss').Config} */
const tailwindForm = require("@tailwindcss/forms");

module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
      },
    },
  },
  plugins: [tailwindForm],
};
