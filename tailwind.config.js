/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // Scans all .html files in src and subdirectories
    "./src/**/*.js", // Scans all .js files in src and subdirectories
    "./*.html", // Scans root-level HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
