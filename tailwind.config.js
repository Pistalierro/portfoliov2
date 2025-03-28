/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./src/**/**.ts"
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.1)'}
        },
        fadeIn: {
          '0%': {opacity: 0, transform: 'translateY(-10px)'},
          '100%': {opacity: 1, transform: 'translateY(0)'}
        },
        menuOpen: {
          '0%': {transform: 'scaleY(0)', opacity: 0},
          '100%': {transform: 'scaleY(1)', opacity: 1}
        },
        menuClose: {
          '0%': {transform: 'scaleY(1)', opacity: 1},
          '100%': {transform: 'scaleY(0)', opacity: 0}
        }
      },
      animation: {
        zoom: 'zoom 15s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'menu-open': 'menuOpen 0.2s ease-out forwards',
        'menu-close': 'menuClose 0.2s ease-in forwards'
      },

      fontFamily: {
        pangolin: ['Pangolin', 'cursive'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        accent: '#EE8824'
      },
      textShadow: {
        sm: '1px 1px 2px rgba(255, 255, 255, 0.3)',     // лёгкий
        md: '2px 2px 4px rgba(255, 255, 255, 0.5)',     // средний
        lg: '0 0 10px rgba(255, 255, 255, 1), ' +
          '0 0 20px rgba(255, 255, 255, 0.8), ' +
          '0 0 30px rgba(255, 255, 255, 0.8), ' +
          '0 0 40px rgba(255, 255, 255, 0.8)'          // мощный
        // glow
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

