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
        },
        'hover-top-left':{
          '0%':{ transform: 'translateY(0px) translateX(0px)'},
          '50%':{ transform: 'translateY(-4px) translateX(5px)'},
          '100%':{ transform: 'translateY(0px) translateX(0px)'},
        },
        'orbit':{
          '0%':{ 
            transform: ' translate(170px, 70px)  scale(0.6);',
            opacity: 0,
          },
          '25%':{
            opacity: 1,
          },
          '50%':{ transform: ' translate(-170px, -70px)  scale(0.8); ',
            opacity: 1
          },
          '70%':{
            opacity: 0,
          },
          '80%':{
            opacity: 0,
          },
          '100%':{ transform: ' translate(170px, 70px)  scale(0.6); ',
            opacity: 0,
          },
        },
        'large-orbit':{
          '0%':{ 
            transform: ' translate(270px, 100px)  scale(0.8);',
            opacity: 0,
          },
          '25%':{
            opacity: 1,
          },
          '50%':{ transform: ' translate(-270px, -100px)  scale(0.9); ',
            opacity: 1
          },
          '70%':{
            opacity: 0,
          },
          '80%':{
            opacity: 0,
          },
          '100%':{ transform: ' translate(270px, 100px)  scale(0.8); ',
            opacity: 0,
          },
        },
        'flip-horizantal':{
          '50%':{transform: 'rotateY(180deg)'},
        },

      },
      animation:{
        'falling-down':'falling-down 3.5s ease-in-out',
        'fade-load':'fade-load 5.0s ease-in-out',
        'hover-top-left':'hover-top-left 1.5s ease-in-out infinite',
        'orbit':'orbit 9s infinite ease-in-out',
        'large-orbit':'large-orbit 9s infinite ease-in-out',
        'orbiting':'orbit 20s infinite ease-in-out',
        'hflip':'flip-horizantal 4s infinite linear',
        
        'move-up-down':'move-up-down 9s infinite ease-in-out'
      }
    },
  },
  plugins: [],
}

