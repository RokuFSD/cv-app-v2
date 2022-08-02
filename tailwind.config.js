/** @type {import('tailwindcss').Config} */
const tailwindForm = require("@tailwindcss/forms");

module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindForm],
};
