const keyframes = {
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
  },
  letterFlyTop: {
    '0%': {
      opacity: 0,
      transform: 'translateY(-100px) scale(2) rotate(-10deg)',
      filter: 'blur(10px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterFlyBottom: {
    '0%': {
      opacity: 0,
      transform: 'translateY(100px) scale(1.8) rotate(10deg)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  // letterTyping: {
  //   '0%': {
  //     opacity: 0,
  //     transform: 'translateY(10px) scale(1.8)',
  //     filter: 'blur(6px)',
  //     visibility: 'hidden'
  //   },
  //   '100%': {
  //     opacity: 1,
  //     transform: 'translateY(0) scale(1)',
  //     filter: 'blur(0)',
  //     visibility: 'visible'
  //   }
  // },
  letterFlyLeft: {
    '0%': {
      opacity: 0,
      transform: 'translateX(-100px) scale(1.8) rotate(-15deg)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterFlyRight: {
    '0%': {
      opacity: 0,
      transform: 'translateX(100px) scale(1.8) rotate(15deg)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterFlyTopLeft: {
    '0%': {
      opacity: 0,
      transform: 'translate(-100px, -100px) scale(1.6) rotate(-20deg)',
      filter: 'blur(8px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterFlyTopRight: {
    '0%': {
      opacity: 0,
      transform: 'translate(100px, -100px) scale(1.6) rotate(20deg)',
      filter: 'blur(8px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterFlyBottomLeft: {
    '0%': {
      opacity: 0,
      transform: 'translate(-100px, 100px) scale(1.6) rotate(-10deg)',
      filter: 'blur(8px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterFlyBottomRight: {
    '0%': {
      opacity: 0,
      transform: 'translate(100px, 100px) scale(1.6) rotate(10deg)',
      filter: 'blur(8px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0) scale(1) rotate(0deg)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  letterTyping: {
    '0%': {
      opacity: 0,
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      visibility: 'visible'
    }
  }
};

const animation = {
  zoom: 'zoom 15s ease-in-out infinite',
  'fade-in': 'fadeIn 0.3s ease-out forwards',
  'menu-open': 'menuOpen 0.2s ease-out forwards',
  'menu-close': 'menuClose 0.2s ease-in forwards',

  'letter-fly-top': 'letterFlyTop 0.4s ease-out forwards',
  'letter-fly-bottom': 'letterFlyBottom 0.4s ease-out forwards',
  'letter-fly-left': 'letterFlyLeft 0.4s ease-out forwards',
  'letter-fly-right': 'letterFlyRight 0.4s ease-out forwards',
  'letter-fly-top-left': 'letterFlyTopLeft 0.4s ease-out forwards',
  'letter-fly-top-right': 'letterFlyTopRight 0.4s ease-out forwards',
  'letter-fly-bottom-left': 'letterFlyBottomLeft 0.4s ease-out forwards',
  'letter-fly-bottom-right': 'letterFlyBottomRight 0.4s ease-out forwards',
  'letter-typing': 'letterTyping 0.2s ease-out forwards'
};

module.exports = {keyframes, animation};
