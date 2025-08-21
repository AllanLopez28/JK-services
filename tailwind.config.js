
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f7ff',
          100: '#e3effe',
          200: '#c1dbfd',
          300: '#9cc6fb',
          400: '#5da0f9',
          500: '#2e72d6',
          600: '#2a5eb3',
          700: '#244b8f',
          800: '#1f3b72',
          900: '#192f5b'
        }
      }
    },
  },
  plugins: [],
};
