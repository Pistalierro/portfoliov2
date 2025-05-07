import {ApproachItemInterface, SkillCategoryType, SkillInterface} from '../types/skills-interface';

export const SKILLS: SkillInterface[] = [
  {name: 'JavaScript', category: 'TECH.TABS.BASE'},
  {name: 'TypeScript', category: 'TECH.TABS.BASE'},
  {name: 'HTML5', category: 'TECH.TABS.BASE'},
  {name: 'SCSS', category: 'TECH.TABS.BASE'},

  {name: 'Responsive Design', category: 'TECH.TABS.CORE'},
  {name: 'REST API', category: 'TECH.TABS.CORE'},
  {name: 'SPA', category: 'TECH.TABS.CORE'},

  {name: 'Signals API', category: 'TECH.TABS.ADVANCED'},
  {name: 'Local Storage', category: 'TECH.TABS.ADVANCED'},
  {name: 'IndexedDB', category: 'TECH.TABS.ADVANCED'},
  {name: 'Reactive Forms', category: 'TECH.TABS.ADVANCED'},

  {name: 'Angular 18+', category: 'TECH.TABS.FRAMEWORKS'},

  {name: 'Tailwind CSS', category: 'TECH.TABS.UI'},
  {name: 'Bootstrap 5', category: 'TECH.TABS.UI'},
  {name: 'Angular Material', category: 'TECH.TABS.UI'},
  {name: 'Animations', category: 'TECH.TABS.UI'},

  {name: 'RxJS', category: 'TECH.TABS.LIBRARIES'},
  {name: 'jQuery', category: 'TECH.TABS.LIBRARIES'},
  {name: 'ngx-translate', category: 'TECH.TABS.LIBRARIES'},
];


export const SKILL_CATEGORIES: SkillCategoryType[] = [
  'TECH.TABS.BASE',
  'TECH.TABS.CORE',
  'TECH.TABS.ADVANCED',
  'TECH.TABS.FRAMEWORKS',
  'TECH.TABS.UI',
  'TECH.TABS.LIBRARIES',
];

export const APPROACH_ITEMS: ApproachItemInterface[] = [
  {
    name: 'APPROACH.CARDS.GITHUB.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.GITHUB.DESCRIPTION',
    icon: '/img/svg/tools/github.svg'
  },
  {
    name: 'APPROACH.CARDS.FIREBASE.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.FIREBASE.DESCRIPTION',
    icon: '/img/svg/tools/firebase.svg'
  },
  {
    name: 'APPROACH.CARDS.GULP.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.GULP.DESCRIPTION',
    icon: '/img/svg/tools/gulp.svg'
  },
  {
    name: 'APPROACH.CARDS.MATERIAL_UI.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.MATERIAL_UI.DESCRIPTION',
    icon: '/img/svg/tools/material.svg'
  },
  {
    name: 'APPROACH.CARDS.BEM.TITLE',
    type: 'methodology',
    description: 'APPROACH.CARDS.BEM.DESCRIPTION',
    icon: '/img/svg/methodologies/bem.svg'
  },
  {
    name: 'APPROACH.CARDS.NODE_JS.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.NODE_JS.DESCRIPTION',
    icon: '/img/svg/tools/node_js.svg'
  },
  {
    name: 'APPROACH.CARDS.WEBPACK.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.WEBPACK.DESCRIPTION',
    icon: '/img/svg/tools/webpack.svg'
  },
  {
    name: 'APPROACH.CARDS.WEBSTORM.TITLE',
    type: 'tools',
    description: 'APPROACH.CARDS.WEBSTORM.DESCRIPTION',
    icon: '/img/svg/tools/webstorm.svg'
  },
  {
    name: 'APPROACH.CARDS.DRY.TITLE',
    type: 'methodology',
    description: 'APPROACH.CARDS.DRY.DESCRIPTION',
    icon: '/img/svg/methodologies/dry.svg'
  },
  {
    name: 'APPROACH.CARDS.KISS.TITLE',
    type: 'methodology',
    description: 'APPROACH.CARDS.KISS.DESCRIPTION',
    icon: '/img/svg/methodologies/kiss.svg'
  },
  {
    name: 'APPROACH.CARDS.SOLID.TITLE',
    type: 'methodology',
    description: 'APPROACH.CARDS.SOLID.DESCRIPTION',
    icon: '/img/svg/methodologies/solid.svg'
  },
  {
    name: 'APPROACH.CARDS.YAGNI.TITLE',
    type: 'methodology',
    description: 'APPROACH.CARDS.YAGNI.DESCRIPTION',
    icon: '/img/svg/methodologies/yagni.svg'
  }
];




