import {Component, inject, Input, OnChanges} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ProjectDetailedInterface, ProjectPreviewInterface} from '../../../../../types/projects.interface';
import {PROJECTS} from '../../../../../data/projects';
import {TranslatePipe} from '@ngx-translate/core';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'section-skills-tech',
  imports: [
    NgForOf,
    NgClass,
    NgIf,
    TranslatePipe,
    RouterLink,
  ],
  templateUrl: './skills-tech.component.html',
  styleUrl: './skills-tech.component.scss'
})
export class SkillsTechComponent implements OnChanges {

  projects: ProjectDetailedInterface[] = PROJECTS;
  opacityClass: string = 'opacity-100';
  activeFlipIndex: number | null = null;
  @Input() selectedSkill!: string;
  @Input() isSliding = false;
  private scrollTrackerService = inject(ScrollTrackerService);
  private router = inject(Router);

  get filteredProjects(): ProjectPreviewInterface[] {
    if (!this.selectedSkill) return [];
    return this.projects
      .filter(project =>
        project.techStack.includes(this.selectedSkill))
      .map(project => ({...project} as ProjectPreviewInterface));
  }

  ngOnChanges(): void {
    if (this.isSliding) {
      this.opacityClass = 'opacity-50 blur-sm';
      setTimeout(() => this.opacityClass = 'opacity-100 blur-0', 300);
    }

    if (this.selectedSkill) {
      setTimeout(() => {
        this.scrollTrackerService.triggerAnimationsIn('#skills-tech');
      }, 50);
    }
    this.activeFlipIndex = null;
  }

  trackById(index: number, project: ProjectPreviewInterface): number {
    return project.id;
  }

  toggleFlip(i: number): void {
    this.activeFlipIndex = this.activeFlipIndex === i ? null : i;
  }

}
