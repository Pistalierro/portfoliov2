import {AfterViewInit, Component, ElementRef, inject, QueryList, ViewChildren} from '@angular/core';
import {ApproachItemInterface} from '../../../../../types/skills-interface';
import {APPROACH_ITEMS} from '../../../../../data/skills';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {ScrollTrackerService} from '../../../../../shared/services/scroll/scroll-tracker.service';
import {CARDS_ANIMATION_DIRECTIONS} from '../../../../../shared/constants/animations.const';

@Component({
  selector: 'block-skill-approach',
  imports: [
    NgForOf,
    TranslatePipe,
  ],
  templateUrl: './skill-approach.component.html',
  styleUrl: './skill-approach.component.scss'
})
export class SkillApproachComponent implements AfterViewInit {

  items: ApproachItemInterface[] = APPROACH_ITEMS;

  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef<HTMLElement>>;

  private autoScrollFrameId: number | null = null;
  private autoScrollDelay = 2000;

  private scrollTrackerService = inject(ScrollTrackerService);

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollTrackerService.observeSectionsForAnimation(['skills-approach'], '', 0.3);
    });
  }

  getAnimAndDelayByIndex(index: number): { anim: string, delay: string } {
    const width = window.innerWidth;
    const delay = `${index * 0.1}s`;
    let anim: string[];

    if (width >= 1024) {
      anim = CARDS_ANIMATION_DIRECTIONS.lg;
    } else if (width >= 768) {
      anim = CARDS_ANIMATION_DIRECTIONS.md;
    } else anim = CARDS_ANIMATION_DIRECTIONS.sm;

    return {
      anim: anim[index] || 'animate-block-zoom-in',
      delay
    };
  }

  onCardHover(index: number) {
    const container = this.scrollContainers.get(index)?.nativeElement;
    if (!container) return;

    container.scrollTop = 0;

    if (this.autoScrollFrameId) {
      cancelAnimationFrame(this.autoScrollFrameId);
      this.autoScrollFrameId = null;
    }

    setTimeout(() => {
      this.startAutoScroll(container);
    }, this.autoScrollDelay);
  }

  startAutoScroll(el: HTMLElement, speed: number = 30) {
    const distance = el.scrollHeight - el.clientHeight;
    if (distance < 0) return;

    const duration = (distance / speed) * 1000;
    const startScroll = el.scrollTop;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const easeProgress = this.easeInOutQuad(rawProgress);
      el.scrollTop = startScroll + distance * rawProgress;

      if (rawProgress < 1) {
        this.autoScrollFrameId = requestAnimationFrame(animate);
      } else {
        this.autoScrollFrameId = null;
      }
    };

    this.autoScrollFrameId = requestAnimationFrame(animate);
  }

  private easeInOutQuad(t: number): number {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  }
}
