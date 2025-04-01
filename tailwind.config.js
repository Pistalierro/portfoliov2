/** @type {import('tailwindcss').Config} */
const animations = require('./src/styles/tailwind.animations');


module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./src/**/**.ts"
  ],
  theme: {
    extend: {
      keyframes: animations.keyframes,
      animation: animations.animation,

      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        accent: '#d66926'
      },
      textShadow: {
        sm: '1px 1px 2px rgba(255, 255, 255, 0.3)',
        md: '2px 2px 4px rgba(255, 255, 255, 0.5)',
        lgLight: '0 0 10px rgba(255, 255, 255, 1), ' +
          '0 0 20px rgba(255, 255, 255, 0.8), ' +
          '0 0 30px rgba(255, 255, 255, 0.8), ' +
          '0 0 40px rgba(255, 255, 255, 0.8)'
      },
      boxShadow: {
        light: '0 0 10px rgba(255, 255, 255, 0.8)'
      },
      transitionProperty: {
        'text-shadow': 'text-shadow'
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
