import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectPreviewInterface} from '../../types/projects.interface';
import {PROJECTS} from '../../data/projects';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {

  projects: ProjectPreviewInterface[] = PROJECTS;
  activeSlide = 0;
  SLIDES_LENGTH = PROJECTS.length;
  isPlaying = true;
  slideDirection: 'left' | 'right' = 'right';
  private autoPlayIntervalId: ReturnType<typeof setInterval> | null = null;
  private slideInterval: number = 2000;

  ngOnInit() {
    this.playCarousel();
  }

  ngOnDestroy() {
    this.pauseCarousel();
  }


  setActiveSlide(index: number) {
    this.pauseCarousel();
    this.activeSlide = index;
  }

  playCarousel(): void {
    if (this.autoPlayIntervalId) return;

    this.autoPlayIntervalId = setInterval(() => {
      const nextIndex = (this.activeSlide + 1) % this.SLIDES_LENGTH;
      this.goToSlide(nextIndex);
    }, this.slideInterval);

    this.isPlaying = true;
  }

  pauseCarousel() {
    if (this.autoPlayIntervalId) {
      clearInterval(this.autoPlayIntervalId);
      this.autoPlayIntervalId = null;
    }
    this.isPlaying = false;
  }

  toggleCarousel = () => this.isPlaying ? this.pauseCarousel() : this.playCarousel();

  nextSlide() {
    this.pauseCarousel();
    const nextIndex = this.activeSlide = (this.activeSlide + 1) % this.SLIDES_LENGTH;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    this.pauseCarousel();
    const prevIndex = this.activeSlide = (this.activeSlide - 1 + this.SLIDES_LENGTH) % this.SLIDES_LENGTH;
    this.goToSlide(prevIndex);
  }

  private goToSlide(index: number) {
    this.activeSlide = index;
  }
}
