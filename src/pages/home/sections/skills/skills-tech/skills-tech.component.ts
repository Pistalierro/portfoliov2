import {Component, Input, OnChanges} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {ProjectDetailedInterface, ProjectPreviewInterface} from '../../../../../types/projects.interface';
import {PROJECTS} from '../../../../../data/projects';
import {TranslatePipe} from '@ngx-translate/core';
import {SkillsRadialComponent} from '../skills-radial/skills-radial.component';

@Component({
  selector: 'block-skills-tech',
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    TranslatePipe,
    SkillsRadialComponent,
    NgStyle,
  ],
  templateUrl: './skills-tech.component.html',
  styleUrl: './skills-tech.component.scss'
})
export class SkillsTechComponent implements OnChanges {

  projects: ProjectDetailedInterface[] = PROJECTS;
  selectedSkill!: string;
  opacityClass: string = 'opacity-100';
  radialReset = 0;

  @Input() isSliding = false;

  get filteredProjects(): ProjectPreviewInterface[] {
    if (!this.selectedSkill) return [];
    return this.projects
      .filter(project => project.techStack.includes(this.selectedSkill))
      .map(project => ({...project} as ProjectPreviewInterface));
  }

  ngOnChanges(): void {
    if (this.isSliding) {
      this.opacityClass = 'opacity-50 blur-sm';
      setTimeout(() => this.opacityClass = 'opacity-100 blur-0', 300);
    }
  }

  trackById(index: number, project: ProjectPreviewInterface): number {
    return project.id;
  }

  onSkillSelected(skill: string) {
    this.selectedSkill = skill;
    this.radialReset++;
  }
}
