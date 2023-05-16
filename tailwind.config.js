/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'appBg':"#f3f4f4",
      },
      height:{
        'cardHeight':"500px",
        'holidaysHeight':"460px"
      },
      width:{
        'cardWidth':"30%",
        'cardWidth2':"340px"
      }
    },
  },
  plugins: [],
}