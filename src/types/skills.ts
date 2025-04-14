export type SkillCategoryType =
  | 'Languages'
  | 'Markup'
  | 'Technologies'
  | 'Frameworks'
  | 'Libraries'
  | 'Methodologies'
  | 'Version Control';

export interface SkillInterface {
  name: string;
  category: SkillCategoryType;
}
