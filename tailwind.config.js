/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{hbs,js}"],
  theme: {
    extend: {
      lineClamp: {
        8: '8',
        10: '10',
        12: '12',
        14: '14',
        16: '16',
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}