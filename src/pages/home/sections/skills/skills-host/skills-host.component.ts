import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgSwitch, NgSwitchCase} from '@angular/common';
import {PROJECTS} from '../../../../../data/projects';
import {SKILLS} from '../../../../../data/skills';
import {SkillInterface} from '../../../../../types/skills-interface';
import {ProjectDetailedInterface} from '../../../../../types/projects.interface';
import {SkillApproachComponent} from '../skill-approach/skill-approach.component';
import {SkillsTechComponent} from '../skills-tech/skills-tech.component';
import {SkillsRadialComponent} from '../skills-radial/skills-radial.component';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';

@Component({
  selector: 'section-skills-host',
  standalone: true,
  imports: [NgClass, SkillApproachComponent, SkillsTechComponent, SkillsRadialComponent, NgSwitch, NgSwitchCase],
  templateUrl: './skills-host.component.html',
  styleUrl: './skills-host.component.scss'
})
export class SkillsHostComponent implements OnInit {

  activeTab: 'skills' | 'approach' = 'skills';
  previousTab: 'skills' | 'approach' = this.activeTab;
  selectedSkill!: string;
  radialReset = 0;

  activeClass = 'bg-gradient-to-br from-orange-400 to-orange-600 scale-105 shadow-accentGlow border border-white/30';
  baseClass = 'text-white bg-black/30 border-black/30 hover:bg-black/50';

  skills: SkillInterface[] = SKILLS;
  projects: ProjectDetailedInterface[] = PROJECTS;

  animationDirection: 'left' | 'right' = 'right';
  firstRenderer: boolean = true;

  scrollTrackerService = inject(ScrollTrackerService);

  ngOnInit() {
    this.scrollTrackerService.observeSectionsForAnimation(['skills-host'], '', 0.3);
  }

  setActiveTab(tab: 'skills' | 'approach' = 'skills') {
    if (tab === this.activeTab) return;


    this.firstRenderer = false;
    this.previousTab = this.activeTab;
    this.activeTab = tab;
    this.animationDirection = tab === 'approach' ? 'left' : 'right';

    setTimeout(() => {
      this.scrollTrackerService.triggerAnimationsIn('#skills-host');
    });
  }

  onSkillSelected(skill: string) {
    this.selectedSkill = skill;
    this.radialReset++;
  }
}
