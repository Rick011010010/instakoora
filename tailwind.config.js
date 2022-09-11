/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {

    

    extend: {
      fontFamily:{
        Montserrat:"'Montserrat', sans-serif",
        Merriweather:"'Merriweather', serif",
        opensans:"'Open Sans', sans-serif",
        amatic:"'Amatic SC', cursive",
        alegreya:"'Alegreya', serif"
      },
    },
  },
  plugins: [],
}
