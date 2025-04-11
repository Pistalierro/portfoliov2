import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private router = inject(Router);

  scrollTo(id: string): void {
    const currentUrl = this.router.url.split('?')[0];
    if (currentUrl === '/' || currentUrl === '/home') {
      this.scrollToElement(id);
    } else {
      void this.router.navigate(['/'], {state: {scrollTo: id}});
    }

  } ;

  scrollToElement(id: string, behavior: ScrollBehavior = 'smooth'): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior});
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
