/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eggplant': '#14293A',
        'header': '#6F9B2A',
        'buttons': '#CE9B5A',
        'tanish': '#F8B570',
        'linkedin': '#0072b1'
      }
    },
    fontFamily: {
      gilroy: 'Gilroy',
      logo: 'Permanent Marker',
    },
  },
  plugins: [],
}