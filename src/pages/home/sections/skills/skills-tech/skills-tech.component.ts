import {Component} from '@angular/core';
import {SKILL_CATEGORIES, SKILLS} from '../../../../../data/skills';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {SkillInterface} from '../../../../../types/skills-interface';

@Component({
	selector: 'block-skills-tech',
	imports: [
		NgForOf,
		NgClass,
		NgIf
	],
	templateUrl: './skills-tech.component.html',
	styleUrl: './skills-tech.component.scss'
})
export class SkillsTechComponent {

	categories = SKILL_CATEGORIES;
	selectedCategory: string = '';
	filteredSkills: SkillInterface[] = [];

	onSelectCategory(category: string): void {
		this.selectedCategory = category;
		this.filteredSkills = SKILLS.filter(skill => skill.category === category);
	}
}
