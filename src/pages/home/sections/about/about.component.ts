import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {ScrollService} from '../../../../shared/services/scroll/scroll.service';
import {NgForOf, NgIf} from '@angular/common';
import {ScrollTrackerService} from '../../../../shared/services/scroll/scroll-tracker.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'section-about',
  standalone: true,
  imports: [
    NgIf,
    TranslatePipe,
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  isModalOpen = false;
  isMobile: boolean = false;

  scrollService = inject(ScrollService);
  scrollTrackerService = inject(ScrollTrackerService);
  @ViewChild('aboutSection', {static: true}) aboutSection!: ElementRef;

  ngOnInit(): void {
    this.scrollTrackerService.observeSectionsForAnimation(['about'], 'animate-block-', 0.6);
    this.isMobile = window.innerWidth < 768;
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
