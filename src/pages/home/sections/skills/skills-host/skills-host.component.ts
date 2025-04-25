import {Component} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {PROJECTS} from '../../../../../data/projects';
import {SKILLS} from '../../../../../data/skills';
import {SkillInterface} from '../../../../../types/skills-interface';
import {ProjectDetailedInterface} from '../../../../../types/projects.interface';
import {SkillsTechComponent} from '../skills-tech/skills-tech.component';
import {SkillApproachComponent} from '../skill-approach/skill-approach.component';
import {SkillsRadialComponent} from '../skills-radial/skills-radial.component';

@Component({
  selector: 'section-skills-host',
  standalone: true,
  imports: [
    NgClass,
    SkillsTechComponent,
    NgStyle,
    SkillApproachComponent,
    SkillsRadialComponent,
  ],
  templateUrl: './skills-host.component.html',
  styleUrl: './skills-host.component.scss'
})
export class SkillsHostComponent {

  activeTab: 'skills' | 'approach' = 'skills';
  previousTab: 'skills' | 'approach' = this.activeTab;
  selectedSkill!: string;
  radialReset = 0;

  activeClass = 'bg-gradient-to-br from-orange-400 to-orange-600 scale-105 shadow-accentGlow border border-white/30';
  baseClass = 'text-white bg-black/30 border-black/30 hover:bg-black/50 text-white ';

  skills: SkillInterface[] = SKILLS;
  projects: ProjectDetailedInterface[] = PROJECTS;
  isSliding: boolean = false;

  slideClassMap: Record<string, string> = {
    skills: '',
    approach: '',
  };

  setActiveTab(tab: 'skills' | 'approach' = 'skills') {
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
    const order = ['skills', 'approach'];
    return order.indexOf(this.activeTab) > order.indexOf(this.previousTab) ? 'left' : 'right';
  }

  getSlideTransform(): string {
    switch (this.activeTab) {
      case 'skills':
        return 'translateX(0%)';
      case 'approach':
        return 'translateX(-100%)';
      default:
        return 'translateX(0%)';
    }
  }

  onSkillSelected(skill: string) {
    this.selectedSkill = skill;
    this.radialReset++;
  }
}
