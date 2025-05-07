import {ApproachItemInterface, SkillCategoryType, SkillInterface} from '../types/skills-interface';

export const SKILLS: SkillInterface[] = [
  {name: 'JavaScript', category: 'Base'},
  {name: 'TypeScript', category: 'Base'},
  {name: 'HTML5', category: 'Base'},
  {name: 'SCSS', category: 'Base'},

  {name: 'Responsive Design', category: 'Core'},
  {name: 'REST API', category: 'Core'},
  {name: 'SPA', category: 'Core'},

  {name: 'Signals API', category: 'Advanced'},
  {name: 'Local Storage', category: 'Advanced'},
  {name: 'IndexedDB', category: 'Advanced'},
  {name: 'Reactive Forms', category: 'Advanced'},

  {name: 'Angular 18+', category: 'Frameworks'},

  {name: 'Tailwind CSS', category: 'UI'},
  {name: 'Bootstrap 5', category: 'UI'},
  {name: 'Angular Material', category: 'UI'},
  {name: 'Animations', category: 'UI'},

  {name: 'RxJS', category: 'Libraries'},
  {name: 'jQuery', category: 'Libraries'},
  {name: 'ngx-translate', category: 'Libraries'},
];


export const SKILL_CATEGORIES: SkillCategoryType[] = [
  'Base',
  'Core',
  'Advanced',
  'Frameworks',
  'UI',
  'Libraries',
];

export const APPROACH_ITEMS: ApproachItemInterface[] = [
  {
    name: 'GitHub',
    type: 'tools',
    description: 'GitHub — мой основной инструмент для контроля версий. Работаю через фиче-ветки, пишу осмысленные коммиты и поддерживаю порядок в истории проекта.\n',
    icon: '/img/svg/tools/github.svg'
  },
  {
    name: 'Firebase',
    type: 'tools',
    description: 'Firebase — использую для хостинга, базы данных и аутентификации. Идеально подходит для быстрого запуска полноценных проектов.\n',
    icon: '/img/svg/tools/firebase.svg'
  },
  {
    name: 'Gulp',
    type: 'tools',
    description: 'Gulp — применяю для автоматизации сборки проектов: минификация, компиляция SCSS, оптимизация изображений и другие задачи.\n',
    icon: '/img/svg/tools/gulp.svg'
  },
  {
    name: 'Material UI',
    type: 'tools',
    description: 'Material UI — использую готовые компоненты для создания понятного и структурированного UI в проектах на Angular.\n',
    icon: '/img/svg/tools/material.svg'
  },
  {
    name: 'BEM',
    type: 'methodology',
    description: 'BEM (Block, Element, Modifier) — придерживаюсь этой методологии при написании стилей для удобной поддержки и масштабирования CSS-структуры.\n',
    icon: '/img/svg/methodologies/bem.svg'
  },
  {
    name: 'Node.js',
    type: 'tools',
    description: 'Node.js — использую как основу фронтенд-разработки. Через Node запускаю dev-серверы, управляю сборкой проектов и установкой зависимостей.\n',
    icon: '/img/svg/tools/node_js.svg'
  },
  {
    name: 'Webpack',
    type: 'tools',
    description: 'Webpack — применяю для сборки фронтенд-проектов. Настраивал сборку модулей, минификацию и оптимизацию ресурсов.\n',
    icon: '/img/svg/tools/webpack.svg'
  },
  {
    name: 'WebStorm',
    type: 'tools',
    description: 'WebStorm — моя основная IDE для фронтенд-разработки. Использую встроенные инструменты для работы с Git, дебаггинга и рефакторинга кода.\n',
    icon: '/img/svg/tools/webstorm.svg'
  },
  {
    name: 'DRY',
    type: 'methodology',
    description: 'DRY (Don’t Repeat Yourself) — всегда стремлюсь избегать дублирования кода. Выношу повторяющиеся части в отдельные функции и компоненты.\n',
    icon: '/img/svg/methodologies/dry.svg'
  },
  {
    name: 'KISS',
    type: 'methodology',
    description: 'KISS (Keep It Simple, Stupid) — стараюсь писать максимально понятный и простой код, без ненужных усложнений и абстракций.\n',
    icon: '/img/svg/methodologies/kiss.svg'
  },
  {
    name: 'SOLID',
    type: 'methodology',
    description: 'SOLID — применяю принципы для проектирования расширяемого и поддерживаемого кода, особенно в компонентах и сервисах Angular.\n',
    icon: '/img/svg/methodologies/solid.svg'
  },
  {
    name: 'YAGNI',
    type: 'methodology',
    description: 'YAGNI (You Aren\'t Gonna Need It) — избегаю ненужной функциональности в коде. Реализую только те фичи, которые действительно требуются проекту.\n',
    icon: '/img/svg/methodologies/yagni.svg'
  }
];




