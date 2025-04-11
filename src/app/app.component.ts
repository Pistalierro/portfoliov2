import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {ScrollService} from '../shared/services/scroll/scroll.service';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  private scrollService = inject(ScrollService);

  ngOnInit() {
    this.scrollService.initScrollTracking();
  }

  ngAfterViewInit(): void {
    document.documentElement.style.scrollBehavior = 'auto';
    const hasScrollTo = !!history.state?.scrollTo;

    if (!hasScrollTo) {
      this.scrollService.restoreScrollPosition();
    }

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 300);
  }
}
