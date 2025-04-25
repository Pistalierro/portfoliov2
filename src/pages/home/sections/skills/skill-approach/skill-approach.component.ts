import {Component} from '@angular/core';
import {ApproachItemInterface} from '../../../../../types/skills-interface';
import {APPROACH_ITEMS} from '../../../../../data/skills';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'block-skill-approach',
  imports: [
    NgForOf
  ],
  templateUrl: './skill-approach.component.html',
  styleUrl: './skill-approach.component.scss'
})
export class SkillApproachComponent {

  items: ApproachItemInterface[] = APPROACH_ITEMS;
}
