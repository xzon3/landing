/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        base: { 950: '#020617', 900: '#0b1220', 850: '#0f172a', 800: '#141f36' },
        accent: { 500: '#059669', 600: '#047857', 400: '#34d399' }
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
