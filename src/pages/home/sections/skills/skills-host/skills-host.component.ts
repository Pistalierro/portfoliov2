import {Component} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {PROJECTS} from '../../../../../data/projects';
import {SKILLS} from '../../../../../data/skills';
import {SkillInterface} from '../../../../../types/skills-interface';
import {ProjectDetailedInterface} from '../../../../../types/projects.interface';
import {SkillsTechComponent} from '../skills-tech/skills-tech.component';

@Component({
  selector: 'section-skills-host',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    SkillsTechComponent
  ],
  templateUrl: './skills-host.component.html',
  styleUrl: './skills-host.component.scss'
})
export class SkillsHostComponent {

  activeTab: 'skills' | 'tools' | 'methodologies' = 'skills';
  previousTab: 'skills' | 'tools' | 'methodologies' = this.activeTab;

  activeClass = 'bg-black/60';

  slideClassMap: Record<string, string> = {
    skills: '',
    tools: '',
    methodologies: ''
  };

  skills: SkillInterface[] = SKILLS;
  projects: ProjectDetailedInterface[] = PROJECTS;

  setActiveTab(tab: 'skills' | 'tools' | 'methodologies' = 'skills') {
    if (tab === this.activeTab) return;

    this.previousTab = this.activeTab;
    this.activeTab = tab;

    const direction = this.getAnimationDirection();

    this.slideClassMap[tab] = direction === 'left' ? 'translate-x-full' : '-translate-x-full';

    setTimeout(() => {
      this.slideClassMap[tab] = 'translate-x-0';
    }, 10);
  }

  getAnimationDirection(): 'left' | 'right' {
    const order = ['skills', 'tools', 'methodologies'];
    return order.indexOf(this.activeTab) > order.indexOf(this.previousTab) ? 'left' : 'right';
  }

  getSlideTransform(): string {
    switch (this.activeTab) {
      case 'skills':
        return 'translateX(0%)';
      case 'tools':
        return 'translateX(-100%)';
      case 'methodologies':
        return 'translateX(-200%)';
      default:
        return 'translateX(0%)';
    }
  }
}
