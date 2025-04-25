export type SkillCategoryType =
  | 'Languages'
  | 'Markup'
  | 'Technologies'
  | 'Frameworks'
  | 'Libraries'
  | 'UI Frameworks'
  | 'Version Control'
  | 'Tools'
  | 'Other';

export interface SkillInterface {
  name: string;
  category: SkillCategoryType;
}

export interface ApproachItemInterface {
  name: string;
  type: string;
  description: string;
  icon: string;
}
