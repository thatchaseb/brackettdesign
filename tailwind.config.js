/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'falling-down':{
          '0%':{ transform: 'translateY(-4000px)'},
          '60%':{ transform: 'translateY(-4000px)'},
          '100%':{transform: 'translateY(0px)'}
        },
        'fade-load':{
          '0%':{ opacity: 0 },
          '65%':{ opacity: 0 },
          '100%':{  opacity: 1.0 }
        }

      },
      animation:{
        'falling-down':'falling-down 3.5s ease-in-out',
        'fade-load':'fade-load 5.0s ease-in-out'
      }
    },
  },
  plugins: [],
}

