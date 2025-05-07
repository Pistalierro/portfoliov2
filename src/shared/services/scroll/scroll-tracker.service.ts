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
      rootMargin: '0px 0px -10% 0px',
    });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }


  setActiveSection(id: string): void {
    this.activeSectionSignal.set(id);
  }

  observeAnimatedElements(threshold = 0.2): void {
    const animatedElements = new Set<HTMLElement>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;

        if (entry.isIntersecting && !animatedElements.has(el)) {
          animatedElements.add(el);

          const animClass = el.dataset['anim'];
          const delay = el.dataset['delay'];

          if (delay) {
            el.style.animationDelay = delay;
          }

          el.classList.add(animClass!);
          el.classList.remove('pre-animate');

          observer.unobserve(el); // отключаем, чтобы не повторялось
        }
      });
    }, {
      threshold,
      rootMargin: '0px 0px -10% 0px'
    });

    const allAnimElements = document.querySelectorAll('[data-anim]') as NodeListOf<HTMLElement>;
    allAnimElements.forEach(el => observer.observe(el));
  }

  triggerAnimationsIn(selectorOrElement: string | HTMLElement): void {
    const container = typeof selectorOrElement === 'string'
      ? document.querySelector(selectorOrElement)
      : selectorOrElement;

    if (!container) return;

    const elements = container.querySelectorAll('[data-anim][data-repeat]') as NodeListOf<HTMLElement>;

    elements.forEach(el => {
      const animClass = el.dataset['anim'];
      const delay = el.dataset['delay'];

      if (!animClass) return;

      el.classList.remove(animClass); // сброс предыдущей анимации
      void el.offsetWidth; // рефлоу

      if (delay) {
        el.style.animationDelay = delay;
      } else {
        el.style.animationDelay = '';
      }

      el.classList.add(animClass);
    });
  }


}
