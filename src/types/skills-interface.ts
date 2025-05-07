export type SkillCategoryType =
  | 'Base'
  | 'Core'
  | 'Advanced'
  | 'Technologies'
  | 'Frameworks'
  | 'UI'
  | 'Libraries'

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
