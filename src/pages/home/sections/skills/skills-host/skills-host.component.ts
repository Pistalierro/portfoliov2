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
    SkillsTechComponent,
    NgStyle,
  ],
  templateUrl: './skills-host.component.html',
  styleUrl: './skills-host.component.scss'
})
export class SkillsHostComponent {

  activeTab: 'skills' | 'tools' | 'methodologies' = 'skills';
  previousTab: 'skills' | 'tools' | 'methodologies' = this.activeTab;

  activeClass = 'bg-black/60';

  skills: SkillInterface[] = SKILLS;
  projects: ProjectDetailedInterface[] = PROJECTS;
  isSliding: boolean = false;

  slideClassMap: Record<string, string> = {
    skills: '',
    tools: '',
    methodologies: ''
  };

  setActiveTab(tab: 'skills' | 'tools' | 'methodologies' = 'skills') {
    if (tab === this.activeTab) return;

    this.previousTab = this.activeTab;
    this.activeTab = tab;
    this.isSliding = true;

    const direction = this.getAnimationDirection();

    // 💥 Сразу делаем его "грязным", чтобы скрылся градиент
    this.slideClassMap[tab] = direction === 'left'
      ? 'opacity-50 blur-sm translate-x-full'
      : 'opacity-50 blur-sm -translate-x-full';

    // ⏳ Через 50мс убираем blur и включаем прозрачный заезд
    setTimeout(() => {
      this.slideClassMap[tab] = 'opacity-100 blur-0 translate-x-0';

      setTimeout(() => this.isSliding = false, 500);
    }, 50);
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
