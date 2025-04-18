import {Component} from '@angular/core';
import {SKILL_CATEGORIES, SKILLS} from '../../../../../data/skills';
import {SkillCategoryType, SkillInterface} from '../../../../../types/skills-interface';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ProjectDetailedInterface, ProjectPreviewInterface} from '../../../../../types/projects.interface';
import {PROJECTS} from '../../../../../data/projects';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'block-skills-tech',
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    TranslatePipe,
  ],
  templateUrl: './skills-tech.component.html',
  styleUrl: './skills-tech.component.scss'
})
export class SkillsTechComponent {

  categories: SkillCategoryType[] = SKILL_CATEGORIES;
  skills: SkillInterface[] = SKILLS;
  projects: ProjectDetailedInterface[] = PROJECTS;

  selectedCategory!: SkillCategoryType;
  selectedSkill!: string;

  get filteredSkills(): SkillInterface[] {
    return this.selectedCategory ? this.skills.filter(skill => skill.category === this.selectedCategory) : [];
  };

  get filteredProjects(): ProjectPreviewInterface[] {
    if (!this.selectedSkill) return [];
    return this.projects
      .filter(project => project.techStack.includes(this.selectedSkill))
      .map(project => ({...project} as ProjectPreviewInterface));
  }

  onSelectCategory(category: SkillCategoryType) {
    this.selectedCategory = category;
  }

  onSelectedSkill(skill: string) {
    this.selectedSkill = skill;
  }

  trackById(index: number, project: ProjectPreviewInterface): number {
    return project.id;
  }
}
