/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFE1E6',
          blue: '#E1F0FF',
          purple: '#F0E1FF',
          green: '#E1FFE6',
          yellow: '#FFF9E1',
        }
      }
    },
  },
  plugins: [],
}