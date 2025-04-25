import {ApproachItemInterface, SkillCategoryType, SkillInterface} from '../types/skills-interface';

export const SKILLS: SkillInterface[] = [
  {name: 'JavaScript', category: 'Languages'},
  {name: 'TypeScript', category: 'Languages'},
  {name: 'HTML5', category: 'Markup'},
  {name: 'CSS', category: 'Markup'},
  {name: 'SCSS', category: 'Markup'},
  {name: 'Responsive Design', category: 'Technologies'},
  {name: 'REST API', category: 'Technologies'},
  {name: 'Reactive Forms', category: 'Technologies'},
  {name: 'Cloud Functions', category: 'Technologies'},
  {name: 'Angular 18+', category: 'Frameworks'},
  {name: 'Tailwind CSS', category: 'UI Frameworks'},
  {name: 'Bootstrap 5', category: 'UI Frameworks'},
  {name: 'RxJS', category: 'Libraries'},
  {name: 'jQuery', category: 'Libraries'},
  {name: 'Angular Material', category: 'Libraries'},
  {name: 'GitHub', category: 'Version Control'},
  {name: 'Firebase', category: 'Version Control'},
];

export const SKILL_CATEGORIES: SkillCategoryType[] = [
  'Languages',
  'Markup',
  'Technologies',
  'Frameworks',
  'UI Frameworks',
  'Libraries',
  'Version Control'
];

export const APPROACH_ITEMS: ApproachItemInterface[] = [
  {
    name: 'GitHub',
    type: 'tools',
    description: 'GitHub — мой основной инструмент для контроля версий. Использую фиче-ветки, пишу осмысленные коммиты и документирую изменения. Помогает держать проекты в порядке.\n',
    icon: '/img/svg/tools/github.svg'
  }
];



