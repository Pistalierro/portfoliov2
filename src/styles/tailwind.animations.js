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
  },

  blockFlyLeftTop: {
    '0%': {
      opacity: 0,
      transform: 'translateX(-100px) scale(0.75) translateY(-100px)',
      filter: 'blur(8px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) scale(1) translateY(0)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  blockFlyRightTop: {
    '0%': {
      opacity: 0,
      transform: 'translateX(100px) scale(0.75) translateY(-100px)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) scale(1) translateY(0) ',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  blockFlyRight: {
    '0%': {
      opacity: 0,
      transform: 'translateX(100px) scale(0.75)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  blockFlyLeft: {
    '0%': {
      opacity: 0,
      transform: 'translateX(-100px)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  blockFlyRightBottom: {
    '0%': {
      opacity: 0,
      transform: 'translateX(-100px) translateY(100px) scale(0.75)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) translateY(0) scale(1)',
      filter: 'blur(0)',
      visibility: 'visible'
    }
  },
  blockFlyLeftBottom: {
    '0%': {
      opacity: 0,
      transform: 'translateX(100px) translateY(100px)',
      filter: 'blur(6px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0) translateY(0) ',
      filter: 'blur(0)',
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
  'letter-typing': 'letterTyping 0.2s ease-out forwards',

  'block-fly-left-top': 'blockFlyLeftTop 1s ease-out forwards',
  'block-fly-right-top': 'blockFlyRightTop 1s ease-out forwards',
  'block-fly-right': 'blockFlyRight 1s ease-out forwards',
  'block-fly-left': 'blockFlyLeft 1s ease-out forwards',
  'block-fly-right-bottom': 'blockFlyRightBottom 1s ease-out forwards',
  'block-fly-left-bottom': 'blockFlyLeftBottom 1s ease-out forwards'
};

module.exports = {keyframes, animation};
