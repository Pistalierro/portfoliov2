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
        accent: '#d66926',
        accentLight: '#ffb347'
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
        light: '0 0 10px rgba(255, 255, 255, 0.8)',
        accentGlow: '0 0 8px rgba(255, 136, 36, 0.5), 0 0 12px rgba(255, 136, 36, 0.4)'
      },

      dropShadow: {
        sm: '0 1px 1px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.1)',
        md: '0 4px 3px rgba(0, 0, 0, 0.07), 0 2px 2px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 8px rgba(0, 0, 0, 0.04), 0 4px 3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 13px rgba(0, 0, 0, 0.03), 0 8px 5px rgba(0, 0, 0, 0.08)',
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
        none: '0 0 #0000',

        darkSm: '0 2px 4px rgba(0, 0, 0, 0.25)',
        darkMd: '0 4px 6px rgba(0, 0, 0, 0.35)',
        darkLg: '0 6px 12px rgba(0, 0, 0, 0.45)',
        darkXl: '0 8px 16px rgba(0, 0, 0, 0.55)',
        dark2xl: '0 12px 24px rgba(0, 0, 0, 0.65)',

        card: '0 4px 8px rgba(0, 0, 0, 0.25)',

        // 🔥 Glow
        glow: '0 0 6px rgba(255, 255, 255, 0.3), 0 0 12px rgba(255, 255, 255, 0.2)',
        accentGlow: '0 0 6px rgba(255, 136, 36, 0.6), 0 0 14px rgba(255, 136, 36, 0.4)'
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
