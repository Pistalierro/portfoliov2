export type SkillCategoryType =
  | 'TECH.TABS.BASE'
  | 'TECH.TABS.CORE'
  | 'TECH.TABS.ADVANCED'
  | 'TECH.TABS.FRAMEWORKS'
  | 'TECH.TABS.UI'
  | 'TECH.TABS.LIBRARIES'

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
