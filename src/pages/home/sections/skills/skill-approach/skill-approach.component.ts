import {AfterViewInit, Component, inject} from '@angular/core';
import {ApproachItemInterface} from '../../../../../types/skills-interface';
import {APPROACH_ITEMS} from '../../../../../data/skills';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';

@Component({
  selector: 'block-skill-approach',
  imports: [
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './skill-approach.component.html',
  styleUrl: './skill-approach.component.scss'
})
export class SkillApproachComponent implements AfterViewInit {

  items: ApproachItemInterface[] = APPROACH_ITEMS;
  private scrollTrackerService = inject(ScrollTrackerService);

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollTrackerService.observeSectionsForAnimation(['skills-approach'], '', 0.3);
    });
  }

  getAnimAndDelayByIndex(index: number): { anim: string, delay: string } {
    const width = window.innerWidth;
    const delay = `${index * 0.1}s`;

    if (width >= 1024) { // lg
      const anims = [
        'animate-block-fly-left-top', 'animate-block-fly-top', 'animate-block-fly-top', 'animate-block-fly-right-top',
        'animate-block-fly-left', 'animate-block-zoom', 'animate-block-zoom', 'animate-block-fly-right',
        'animate-block-fly-left-bottom', 'animate-block-fly-bottom', 'animate-block-fly-bottom', 'animate-block-fly-right-bottom'
      ];
      return {anim: anims[index] || 'animate-block-zoom', delay};
    }

    if (width >= 768) { // md
      const anims = [
        'animate-block-fly-left-top', 'animate-block-fly-top', 'animate-block-fly-right-top',
        'animate-block-fly-left', 'animate-block-zoom', 'animate-block-fly-right',
        'animate-block-fly-left', 'animate-block-zoom', 'animate-block-fly-right',
        'animate-block-fly-left-bottom', 'animate-block-zoom', 'animate-block-fly-right-bottom'
      ];
      return {anim: anims[index] || 'animate-block-zoom', delay};
    }

    const anims = [
      'animate-block-fly-left-top', 'animate-block-fly-right-top',
      'animate-block-fly-left', 'animate-block-fly-right',
      'animate-block-zoom', 'animate-block-zoom',
      'animate-block-zoom', 'animate-block-zoom',
      'animate-block-fly-left-bottom', 'animate-block-fly-right-bottom',
      'animate-block-zoom', 'animate-block-zoom'
    ];
    return {anim: anims[index] || 'animate-block-zoom', delay};
  }
}
