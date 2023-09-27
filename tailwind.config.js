/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{hbs,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}