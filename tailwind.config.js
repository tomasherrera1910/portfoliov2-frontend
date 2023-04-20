/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      dropShadow: {
        '3xl-dark': '16px 16px 16px rgba(0, 0, 0, .75)',
        '3xl-light': '8px 8px 24px rgba(255, 255, 255, .20)'
      }
    }
  },
  plugins: []
}
