/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.1)'}
        }
      }
    },
    animation: {
      zoom: 'zoom 15s ease-in-out infinite'
    }
  },
  plugins: []
}

