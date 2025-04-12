import {Injectable, signal} from '@angular/core';

const KEY_ARROW_RIGHT = 'ArrowRight';
const KEY_ARROW_LEFT = 'ArrowLeft';
const KEY_SPACE = ' ';
const KEY_SPACE_OLD = 'Spacebar';

@Injectable({providedIn: 'root'})
export class CarouselService {
  isPlaying = true;
  activeSlide = 0;
  previousSlide = 0;
  slideDirection: '' | 'left' | 'right' = '';
  SLIDES_LENGTH = 0; // зададим позже через init
  onSlideChange: ((index: number, direction: 'left' | 'right') => void) | null = null;

  keyboardActive = signal<boolean>(false);
  lastKeyPressed = signal<'left' | 'right' | 'space' | null>(null);

  private slideInterval = 10000;
  private autoPlayIntervalId: ReturnType<typeof setInterval> | null = null;

  private touchStartX = 0;
  private touchEndX = 0;

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

  listenToKeyBoard(): void {
    window.addEventListener('keydown', this.pressKey);
  }

  removeKeyBoardListener(): void {
    window.removeEventListener('keydown', this.pressKey);
  }

  initListeners(el?: HTMLElement): void {
    this.listenToKeyBoard();
    if (el) this.listenToSwipe(el);
  }

  removeListeners(el: HTMLElement): void {
    this.removeKeyBoardListener();
    if (el) this.removeSwipe(el);
  }

  listenToSwipe(el: HTMLElement): void {
    el.addEventListener('touchstart', this.onTouchStart);
    el.addEventListener('touchend', this.onTouchEnd);
  }

  removeSwipe(el: HTMLElement): void {
    el.removeEventListener('touchstart', this.onTouchStart);
    el.removeEventListener('touchend', this.onTouchEnd);
  }

  private handleSwipeGesture(): void {
    const difference = this.touchEndX - this.touchStartX;
    const threshold = 50;

    if (Math.abs(difference) < threshold) return;

    if (difference < 0) {
      this.nextSlide();
    } else this.prevSlide();
  }

  private pressKey = (event: KeyboardEvent): void => {
    const key = event.key;
    let used = false;

    if (document.activeElement !== document.body) return;

    if (key === KEY_ARROW_LEFT) {
      this.prevSlide();
      this.lastKeyPressed.set('left');
      used = true;
    }

    if (key === KEY_ARROW_RIGHT) {
      this.nextSlide();
      this.lastKeyPressed.set('right');
      used = true;
    }

    if (key === KEY_SPACE || key === KEY_SPACE_OLD) {
      event.preventDefault();
      this.toggleCarousel();
      this.lastKeyPressed.set('space');
      used = true;
    }

    if (used) {
      this.keyboardActive.set(true);
      setTimeout(() => {
        this.keyboardActive.set(false);
        this.lastKeyPressed.set(null);
      }, 2000);
    }
  };

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

  private onTouchStart = (event: TouchEvent): void => {
    this.touchStartX = event.touches[0].clientX;
  };

  private onTouchEnd = (event: TouchEvent): void => {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipeGesture();
  };
}
