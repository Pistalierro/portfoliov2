import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CarouselService {
  isPlaying = true;
  activeSlide = 0;
  previousSlide = 0;
  slideDirection: '' | 'left' | 'right' = '';
  SLIDES_LENGTH = 0; // зададим позже через init
  onSlideChange: ((index: number, direction: 'left' | 'right') => void) | null = null;
  private slideInterval = 10000;
  private autoPlayIntervalId: ReturnType<typeof setInterval> | null = null;

  init(slidesLength: number, onSlideChange: (index: number, direction: 'left' | 'right') => void) {
    this.SLIDES_LENGTH = slidesLength;
    this.onSlideChange = onSlideChange;
  }

  playCarousel() {
    if (this.autoPlayIntervalId) return;

    this.autoPlayIntervalId = setInterval(() => {
      const nextIndex = (this.activeSlide + 1) % this.SLIDES_LENGTH;
      this.autoSlideTo(nextIndex, 'right');
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

  toggleCarousel() {
    this.isPlaying ? this.pauseCarousel() : this.playCarousel();
  }

  nextSlide() {
    const nextIndex = (this.activeSlide + 1) % this.SLIDES_LENGTH;
    this.manualSlideTo(nextIndex, 'right');
  }

  prevSlide() {
    const prevIndex = (this.activeSlide - 1 + this.SLIDES_LENGTH) % this.SLIDES_LENGTH;
    this.manualSlideTo(prevIndex, 'left');
  }

  setActiveSlide(index: number) {
    this.pauseCarousel();
    const direction = index > this.activeSlide ? 'right' : 'left';
    this.goToSlide(index, direction);
  }

  manualSlideTo(index: number, direction: 'left' | 'right') {
    this.pauseCarousel();
    this.goToSlide(index, direction);
  }

  private autoSlideTo(index: number, direction: 'left' | 'right') {
    this.goToSlide(index, direction);
  }

  private goToSlide(index: number, direction: 'left' | 'right') {
    if (index === this.activeSlide) return;

    this.previousSlide = this.activeSlide;
    this.activeSlide = index;
    this.slideDirection = direction;

    if (this.onSlideChange) {
      this.onSlideChange(index, direction);
    }
  }
}
