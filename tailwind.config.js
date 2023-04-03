/** @type {import('tailwindcss').Config} */
const { join } = require('path');
module.exports = {
  content: ["./src/**/*.{html,js,tsx}",
  './src/**/**/*.{js,ts,jsx,tsx}',
  "./components/**/**/*.{html,js,ts,jsx,tsx}",
  './pages/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  fontFamily: {
    'oswald': 'Oswald',
    'quicksand': 'Quicksand',
  },
  plugins: [],
}
