import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FLY_ANIMATIONS} from '../../../../shared/constants/animations.const';
import {paragraphInterface, paragraphsInterface} from '../../../../types/text-animations.interface';
import {TypewriterService} from '../../../../shared/services/typewriter.service';

@Component({
  selector: 'section-hero',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {

  paragraph: paragraphInterface[][] = [];
  paragraphs: paragraphsInterface[][][] = [];

  totalLettersCount = 0;
  typedLetterIndex = -1;

  translateService = inject(TranslateService);
  typewriterService = inject(TypewriterService);

  @ViewChild('heroSection') heroRef!: ElementRef;

  readonly flyAnimations = FLY_ANIMATIONS;

  ngOnInit() {
    this.updateText();
    this.translateService.onLangChange.subscribe(() => this.updateText());
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.updateText();
          observer.disconnect();
        }
      },
      {threshold: 0.5}
    );
    observer.observe(this.heroRef.nativeElement);
  }

  private updateText(): void {
    const title = this.translateService.instant('HERO.TITLE');
    const desc = this.translateService.instant('HERO.DESCRIPTION');

    this.paragraph = this.buildTitleLetters(title);

    if (!Array.isArray(desc)) return;
    this.paragraphs = this.buildParagraphs(desc);
    this.startTypingObserver();
  }

  private buildTitleLetters(title: string): paragraphInterface[][] {
    let globalIndex = 0;
    return title.split(' ').map(word =>
      word.split('').map((char: string) => {
        const letter = {
          char: char === ' ' ? '\u00A0' : char,
          anim: this.flyAnimations[Math.floor(Math.random() * this.flyAnimations.length)],
          delay: globalIndex * 0.08,
        };
        globalIndex++;
        return letter;
      })
    );
  }


  private buildParagraphs(descArray: string[]): any[][][] {
    let globalIndex = 0;
    return descArray.map((paragraph: string, paragraphIndex: number) => {
      const words = paragraph.split(' ');
      const baseDelay = paragraphIndex * paragraph.length * 0.02;
      let letterIndexInsideParagraph = 0;

      return words.map((word: string) => {
        const letters = word.split('').map((char: string) => {
          const letter = {
            char,
            anim: 'animate-letter-typing',
            delay: baseDelay + (letterIndexInsideParagraph * 0.01),
            letterIndexGlobal: globalIndex
          };
          letterIndexInsideParagraph++;
          globalIndex++;
          return letter;
        });

        letters.push({
          char: '\u00A0',
          anim: '',
          delay: baseDelay + (letterIndexInsideParagraph * 0.02),
          letterIndexGlobal: globalIndex
        });
        letterIndexInsideParagraph++;
        globalIndex++;

        return letters;
      });
    });
  }

  private startTypingObserver(): void {
    const allLetters: { delay: number; letterIndexGlobal: number }[] = [];

    this.paragraphs.forEach(par => {
      par.forEach(word => {
        word.forEach(letter => {
          allLetters.push(letter);
        });
      });
    });

    this.totalLettersCount = allLetters.length;

    this.typewriterService.observeTyping(
      allLetters,
      (currentIndex) => {
        this.typedLetterIndex = currentIndex;
      }
    );
  }

}
