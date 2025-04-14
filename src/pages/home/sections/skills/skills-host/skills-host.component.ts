import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {SkillsTechComponent} from '../skills-tech/skills-tech.component';
import {SkillsToolsComponent} from '../skills-tools/skills-tools.component';
import {SkillsMethodsComponent} from '../skills-methods/skills-methods.component';
import {SkillsOtherComponent} from '../skills-other/skills-other.component';

@Component({
  selector: 'section-skills-host',
  standalone: true,
  imports: [
    NgIf,
    SkillsTechComponent,
    SkillsToolsComponent,
    SkillsMethodsComponent,
    SkillsOtherComponent
  ],
  templateUrl: './skills-host.component.html',
  styleUrl: './skills-host.component.scss'
})
export class SkillsHostComponent {

  selectedSkillTab = 'tech';

  onSelectedTab(tab: string) {
    this.selectedSkillTab = tab;
  }

  isActiveTab(tab: string): boolean {
    return this.selectedSkillTab === tab;
  }
}
