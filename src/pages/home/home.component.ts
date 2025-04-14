import {Component, inject, OnInit} from '@angular/core';
import {HeroComponent} from './sections/hero/hero.component';
import {AboutComponent} from './sections/about/about.component';
import {PortfolioComponent} from './sections/portfolio/portfolio.component';
import {ScrollService} from '../../shared/services/scroll/scroll.service';
import {ScrollTrackerService} from '../../shared/services/scroll/scroll-tracker.service';
import {SkillsHostComponent} from './sections/skills/skills-host/skills-host.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    PortfolioComponent,
    SkillsHostComponent,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private scrollService = inject(ScrollService);
  private scrollTrackerService = inject(ScrollTrackerService);

  ngOnInit() {
    const scrollTo = history.state?.scrollTo;

    if (scrollTo) {
      document.documentElement.style.removeProperty('scroll-behavior');
      this.scrollTrackerService.setActiveSection(scrollTo);

      setTimeout(() => {
        this.scrollService.scrollToElement(scrollTo, 'auto');
        history.replaceState({}, '');
        document.documentElement.style.setProperty('scroll-behavior', 'smooth');

        setTimeout(() => {
          this.scrollTrackerService.observeSections(['hero', 'about', 'portfolio', 'skills-host', 'contacts']);
        }, 200);

      }, 50);
    }
  }
}
