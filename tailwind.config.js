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
        '3xl-sky': '0 32px 64px rgba(96, 165, 250, .75)'
      }
    }
  },
  plugins: []
}
