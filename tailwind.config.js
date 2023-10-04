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
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}