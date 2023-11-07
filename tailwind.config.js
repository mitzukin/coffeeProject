/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans'], 
        'condensed': ['Roboto Condensed', 'sans'],
      },
      colors:{
        'navtext': '#fca311',
        'title':"#EDF2F4"
      },
      fontWeight: {
        'extra-light': 200, 
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 50s linear infinite',
      },
    

    },
  },
  plugins: [],
}

