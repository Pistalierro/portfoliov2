import {AfterViewInit, Component, inject, NgZone, OnDestroy, OnInit} from '@angular/core';
import {ScrollService} from '../shared/services/scroll/scroll.service';
import {RouterOutlet} from '@angular/router';
import {take} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  private scrollService = inject(ScrollService);
  private zone = inject(NgZone);

  ngOnInit() {
    this.scrollService.initScrollTracking();
  }

  ngAfterViewInit(): void {
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      console.log('[AppComponent] Angular stable. Try restoring scroll.');
      setTimeout(() => {
        this.scrollService.restoreScrollPosition();
      }, 100);
    });
  }

  ngOnDestroy(): void {
    console.log('[AppComponent] Destroyed. Saving scroll.');
    this.scrollService.saveScrollPosition();
  }
}
