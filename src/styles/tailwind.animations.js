// tailwind.animations.js (или как у тебя файл называется)

const keyframes = {
  // Твои старые кейфреймы (не трогаем, как есть):
  zoom: {
    '0%, 100%': {transform: 'scale(1)'},
    '50%': {transform: 'scale(1.1)'}
  },
  flipUnMirror: {
    '0%': {
      opacity: 0,
      transform: 'scaleY(0.75) scaleX(-1)',
      transformOrigin: 'top'
    },
    '100%': {
      opacity: 1,
      transform: 'scaleY(1) scaleX(1)',
      transformOrigin: 'top left'
    }
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
  blockFlyTop: {
    '0%': {
      opacity: 0,
      transform: 'scale(0.75) translateY(-100px)',
      filter: 'blur(8px)',
      visibility: 'hidden'
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1) translateY(0)',
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
  },

  // ---- НОВЫЕ 4 АНИМАЦИИ ДЛЯ СЛАЙДОВ ----
  slideInLeft: {
    '0%': {
      transform: 'translateX(-100%)'
    },
    '100%': {
      transform: 'translateX(0)'
    }
  },
  slideInRight: {
    '0%': {
      transform: 'translateX(100%)'
    },
    '100%': {
      transform: 'translateX(0)'
    }
  },
  slideOutLeft: {
    '0%': {
      transform: 'translateX(0)'
    },
    '100%': {
      transform: 'translateX(-100%)'
    }
  },
  slideOutRight: {
    '0%': {
      transform: 'translateX(0)'
    },
    '100%': {
      transform: 'translateX(100%)'
    }
  },
  infoAppear: {
    '0%': {
      opacity: 0,
      transform: 'translateY(-20px) scale(0.95)',
      filter: 'blur(4px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0) scale(1)',
      filter: 'blur(0)'
    }
  },

  infoFadeUp: {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
      filter: 'blur(4px)'
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
      filter: 'blur(0)'
    }
  },
  blink: {
    '0%, 49%': {opacity: '1'},
    '50%, 100%': {opacity: '0'}
  }
};

const animation = {
  zoom: 'zoom 15s ease-in-out infinite',

  'flip-unmirror': 'flipUnMirror 0.75s ease-out forwards',

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
  'block-fly-top': 'blockFlyTop 0.5s ease-out forwards',
  'block-fly-right-top': 'blockFlyRightTop 1s ease-out forwards',
  'block-fly-right': 'blockFlyRight 1s ease-out forwards',
  'block-fly-left': 'blockFlyLeft 1s ease-out forwards',
  'block-fly-right-bottom': 'blockFlyRightBottom 1s ease-out forwards',
  'block-fly-left-bottom': 'blockFlyLeftBottom 1s ease-out forwards',

  'slide-in-left': 'slideInLeft 0.7s ease-in-out forwards',
  'slide-in-right': 'slideInRight 0.7s ease-in-out forwards',
  'slide-out-left': 'slideOutLeft 0.7s ease-in-out forwards',
  'slide-out-right': 'slideOutRight 0.7s ease-in-out forwards',

  'info-appear': 'infoAppear 0.5s ease-out forwards',
  'info-fade-up': 'infoFadeUp 0.6s ease-out forwards',

  'cursor-blink': 'blink 1s step-end infinite'
};

module.exports = {keyframes, animation};
