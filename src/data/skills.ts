import {SkillCategoryType, SkillInterface} from '../types/skills';

export const SKILLS: SkillInterface[] = [
  {name: 'JavaScript', category: 'Languages'},
  {name: 'TypeScript', category: 'Languages'},

  {name: 'HTML5', category: 'Markup'},
  {name: 'CSS', category: 'Markup'},
  {name: 'SASS', category: 'Markup'},
  {name: 'Responsive Design', category: 'Markup'},
  {name: 'Cross-browser', category: 'Markup'},

  {name: 'Gulp', category: 'Technologies'},
  {name: 'Webpack', category: 'Technologies'},
  {name: 'Node js', category: 'Technologies'},

  {name: 'Bootstrap', category: 'Frameworks'},
  {name: 'Tailwind', category: 'Frameworks'},

  {name: 'Material UI', category: 'Libraries'},
  {name: 'jQuery', category: 'Libraries'},
  {name: 'RxJs', category: 'Libraries'},

  {name: 'BEM', category: 'Methodologies'},
  {name: 'DRY', category: 'Methodologies'},
  {name: 'SOLID', category: 'Methodologies'},

  {name: 'GitHub', category: 'Version Control'},
  {name: 'Firebase', category: 'Version Control'}
];

export const SKILL_CATEGORIES: SkillCategoryType[] = [
  'Languages',
  'Markup',
  'Technologies',
  'Frameworks',
  'Libraries',
  'Methodologies',
  'Version Control'
];

