import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {NavbarComponent} from '../features/navbar/navbar.component';
import {AboutComponent} from '../features/about/about.component';
import {HeroComponent} from '../features/hero/hero.component';
import {ScrollService} from '../shared/services/scroll/scroll.service';
import {PortfolioComponent} from '../features/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    AboutComponent,
    HeroComponent,
    PortfolioComponent
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
    this.scrollService.restoreScrollPosition();

    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 300);
  }
}
