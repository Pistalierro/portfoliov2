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

}
