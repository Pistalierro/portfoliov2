import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollTrackerService {

  private activeSectionSignal = signal<string>('hero');
  activeSection = this.activeSectionSignal.asReadonly();

  observeSections(sectionIds: string[]): void {
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        this.activeSectionSignal.set(visibleEntries[0].target.id);
      }
    }, {threshold: 0.6});

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  observeSectionsForAnimation(sectionIds: string[], classPrefix = 'animate-block-', threshold: number): void {
    const animatedSections = new Set<string>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(`ID= ${entry.target.id}, ratio= ${entry.intersectionRatio}, isIntersecting= ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          const sectionEl = entry.target as HTMLElement;

          if (!animatedSections.has(sectionEl.id)) {
            animatedSections.add(sectionEl.id);

            const blocks = sectionEl.querySelectorAll(`[data-anim]`) as NodeListOf<HTMLElement>;
            blocks.forEach((el: HTMLElement) => {
              const animClass = el.dataset['anim'];
              const delay = el.dataset['delay'];
              if (!animClass) return;

              if (delay) {
                el.style.animationDelay = delay;
              }
              el.classList.add(animClass); // добавляем animate-* вручную
            });
          }
        }
      });
    }, {
      threshold: 0.3,
      // rootMargin: '0px 0px -10% 0px',
    });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

}
