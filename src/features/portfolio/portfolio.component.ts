import {ChangeDetectorRef, Component, ElementRef, inject, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ProjectPreviewInterface} from '../../types/projects.interface';
import {PROJECTS} from '../../data/projects';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {TypewriterService} from '../../shared/services/typewriter.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass, RouterLink, TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {
  projects: ProjectPreviewInterface[] = PROJECTS;
  SLIDES_LENGTH = PROJECTS.length;

  isPlaying = true;
  activeSlide = 0;
  previousSlide = 0;
  slideDirection: '' | 'left' | 'right' = '';
  isFirstLoad = true;
  infoVisible = true;

  typedLetterIndex = -1;
  jsonLetters: { char: string; delay: number; letterIndexGlobal: number }[] = [];

  @ViewChild('thumbsContainer', {static: true}) thumbsContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('jsonContainer') jsonContainer!: ElementRef<HTMLDivElement>;
  @ViewChildren('thumb') thumbs!: QueryList<ElementRef<HTMLDivElement>>;

  typewriterService = inject(TypewriterService);
  sanitizer = inject(DomSanitizer);
  private cdr: ChangeDetectorRef;

  private autoPlayIntervalId: ReturnType<typeof setInterval> | null = null;
  private slideInterval = 10000;

  constructor(cdr: ChangeDetectorRef) {
    this.cdr = cdr;
  }

  get typedJson(): string {
    return this.jsonLetters
      .slice(0, this.typedLetterIndex + 1)
      .map(l => l.char)
      .join('');
  }

  ngOnInit() {
    this.previousSlide = this.activeSlide;
    this.playCarousel();

    setTimeout(() => {
      this.isFirstLoad = false;
    }, 100);

    setTimeout(() => this.scrollToActiveThumbnail(), 0);
    this.cdr.detectChanges();
    setTimeout(() => {
      this.initJsonTyping(this.projects[this.activeSlide]);
    }, 0);
  }

  ngOnDestroy() {
    this.pauseCarousel();
  }

  setActiveSlide(index: number) {
    this.pauseCarousel();
    const direction = index > this.activeSlide ? 'right' : 'left';
    this.goToSlide(index, direction);
    this.scrollToActiveThumbnail();
  }

  nextSlide() {
    const nextIndex = (this.activeSlide + 1) % this.SLIDES_LENGTH;
    this.manualSlideTo(nextIndex, 'right');
  }

  prevSlide() {
    const prevIndex = (this.activeSlide - 1 + this.SLIDES_LENGTH) % this.SLIDES_LENGTH;
    this.manualSlideTo(prevIndex, 'left');
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

  manualSlideTo(index: number, direction: 'left' | 'right') {
    this.pauseCarousel();
    this.goToSlide(index, direction);
  }

  private initJsonTyping(project: any): void {
    const jsonStr = JSON.stringify(project, null, 2);
    let index = 0;

    this.jsonLetters = jsonStr.split('').map((char) => ({
      char,
      delay: index * 0.01,
      letterIndexGlobal: index++
    }));

    this.typedLetterIndex = -1;

    this.typewriterService.observeTyping(
      this.jsonLetters,
      (currentIndex) => {
        this.typedLetterIndex = currentIndex;
        this.cdr.detectChanges(); // Обязательно
        this.scrollJsonToBottom();
      }
    );
  }

  private scrollToActiveThumbnail() {
    const container = this.thumbsContainer?.nativeElement;
    const activeThumb = this.thumbs?.get(this.activeSlide)?.nativeElement;

    if (container && activeThumb) {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        // Горизонтальное выравнивание
        const containerLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const thumbOffsetLeft = activeThumb.offsetLeft;
        const thumbWidth = activeThumb.clientWidth;

        const scrollTo = thumbOffsetLeft - containerWidth / 2 + thumbWidth / 2;

        container.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      } else {
        const containerTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        const thumbOffsetTop = activeThumb.offsetTop;
        const thumbHeight = activeThumb.clientHeight;

        const scrollTo = thumbOffsetTop - containerHeight / 2 + thumbHeight / 2;

        container.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  }


  private autoSlideTo(index: number, direction: 'left' | 'right') {
    this.goToSlide(index, direction);
  }

  private goToSlide(index: number, direction: 'left' | 'right') {
    if (index === this.activeSlide) return;

    this.infoVisible = false;

    setTimeout(() => {
      this.previousSlide = this.activeSlide;
      this.activeSlide = index;
      this.slideDirection = direction;

      this.infoVisible = true;

      this.scrollToActiveThumbnail();
      this.initJsonTyping(this.projects[this.activeSlide]); // перезапуск печати
    }, 10);
  }

  private scrollJsonToBottom() {
    if (this.jsonContainer?.nativeElement) {
      const el = this.jsonContainer.nativeElement;
      el.scrollTop = el.scrollHeight;
    }
  }
}
