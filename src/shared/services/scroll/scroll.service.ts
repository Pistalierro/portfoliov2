import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToElement(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior: 'smooth'});
  }

  saveScrollPosition(): void {
    sessionStorage.setItem('scrollPositionY', window.scrollY.toString());
  }

  restoreScrollPosition(): void {
    const scrollPositionY = sessionStorage.getItem('scrollPositionY');
    if (scrollPositionY) {
      setTimeout(() => {
        window.scrollTo({
          top: parseFloat(scrollPositionY),
          behavior: 'auto'
        });
      }, 50);
    }
  }

  initScrollTracking(): void {
    window.addEventListener('beforeunload', () => {
      this.saveScrollPosition();
    });
  }
}
