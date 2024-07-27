/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'br': ['bungee.regular', 'sans-serif'],
        'bi': ['bungee.inline', 'sans-serif']
      }
    },
    
    screens: {
      wide: { min: "1441px" },
      desktop: { max: "1440px" },
      tablet: { max: "768px" },
      mobile: { max: "500px" },
    },
  },
  plugins: [],
}

