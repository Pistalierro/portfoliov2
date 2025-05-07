import {inject, Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class ScrollService {
  private router = inject(Router);
  private zone = inject(NgZone);

  scrollTo(id: string): void {
    const currentUrl = this.router.url.split('?')[0];
    if (currentUrl === '/' || currentUrl === '/home') {
      this.scrollToElement(id);
    } else {
      void this.router.navigate(['/'], {state: {scrollTo: id}});
    }
  }

  scrollToElement(id: string, behavior: ScrollBehavior = 'smooth'): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior});
    }
  }

  saveScrollPosition(): void {
    sessionStorage.setItem('scrollPositionY', window.scrollY.toString());
  }

  initScrollTracking(): void {
    window.addEventListener('beforeunload', () => this.saveScrollPosition());
  }

  restoreScrollPosition(): void {
    const scrollPositionY = parseFloat(sessionStorage.getItem('scrollPositionY') || '');
    if (!isNaN(scrollPositionY)) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({
            top: scrollPositionY,
            behavior: 'auto'
          });
        }, 0);
      });
    }
  }
}
