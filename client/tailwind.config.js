/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungeer: ['Bungee-Regular', 'sans-serif'],
        bungeei: ['Bungee-Inline', 'sans-serif'],
        sansar: ['Sansation-Regular', 'sans-serif'],
        sansal: ['Sansation-Light', 'sans-serif'],
        sansab: ['Sansation-Bold', 'sans-serif']
      },
      colors: {
        'screenColor': '#f1f1f1', 
        'primary': '#1b6da4', 
        'subprimary': '#5091bb', 
        'headText' : '#202020',
        'inactiveBtn' : '#9c9c9c',
        'inactiveText':'#606060',
        'alert':'#bf2d2d',
      }
    },
    
    screens: {
      wide: { min: "1441px" },
      desktop: { max: "1440px" },
      tablet: { max: "768px" },
      mobile: { max: "500px" },
    },
  },
  plugins: [
  ],
}

