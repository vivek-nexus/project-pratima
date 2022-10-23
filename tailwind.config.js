/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1400px',
      '2xl': '1500px',
    },
    extend: {},
  },
  plugins: [],
}
