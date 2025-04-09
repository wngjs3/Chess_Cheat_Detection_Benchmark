/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e3a8a',
        'secondary': '#2563eb',
        'accent': '#3b82f6',
        'background': '#f8fafc',
        'chess-dark': '#769656',
        'chess-light': '#eeeed2'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
} 