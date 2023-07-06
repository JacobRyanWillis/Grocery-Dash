/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eggplant': '#14293A',
        'grass': '#6F9B2A',
        'dark-tan': '#CE9B5A',
        'tan': '#F8B570',
        'light-tan': '#FFF7EC',
        'linkedin': '#0072b1',
        'cFruits': '#F2F9EA'
      },
      backgroundImage: {
        'vendorImage': "url('./assets/VendorImage.png')",
        'buyerImage': "url('./assets/BuyerImage.png')",
      }
    },
    fontFamily: {
      gilroy: 'Gilroy',
      logo: 'Permanent Marker',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}