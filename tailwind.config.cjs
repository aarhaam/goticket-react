/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: 'Koulen',
        roboto: 'roboto, sans-serif'
      },
      colors: {
        primary: '#161629',
        secondary: '#C0C0C8',
        info: '#1FBAD6',
        warning: '#FEDE00',
        danger: '#FF0000'
      }
    }
  },
  plugins: []
}
