import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {NavbarComponent} from '../layouts/main-layout/navbar/navbar.component';
import {AboutComponent} from '../pages/home/sections/about/about.component';
import {HeroComponent} from '../pages/home/sections/hero/hero.component';
import {ScrollService} from '../shared/services/scroll/scroll.service';
import {PortfolioComponent} from '../pages/home/sections/portfolio/portfolio.component';
import {FooterComponent} from '../layouts/main-layout/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    AboutComponent,
    HeroComponent,
    PortfolioComponent,
    FooterComponent
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
