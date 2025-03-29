import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NgClass, NgForOf} from '@angular/common';
import {FLY_ANIMATIONS} from '../../shared/constants/animations.const';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {

  letters: { char: string; anim: string }[] = [];
  paragraphs: { char: string; anim: string }[][] = [];

  translateService = inject(TranslateService);

  @ViewChild('heroSection') heroRef!: ElementRef;

  readonly flyAnimations = FLY_ANIMATIONS;

  ngOnInit() {
    this.updateText();
    this.translateService.onLangChange.subscribe(() => this.updateText());
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting) {
        this.updateText();
      }
    }, {threshold: 0.5});
    observer.observe(this.heroRef.nativeElement);
  }

  private updateText(): void {
    const title = this.translateService.instant('HERO.TITLE');
    const desc = this.translateService.instant('HERO.DESCRIPTION');

    this.letters = title.split('').map((char: any) => ({
      char: char === ' ' ? '\u00A0' : char,
      anim: this.flyAnimations[Math.floor(Math.random() * this.flyAnimations.length)]
    }));

    if (!Array.isArray(desc)) {
      console.warn('HERO.DESCRIPTION должен быть массивом, а не:', desc);
      return;
    }


    this.paragraphs = desc.map((paragraph: string) => {
      return paragraph.split('').map((char, i) => ({
        char: char === ' ' ? '\u00A0' : char, // если хотим не терять пробелы
        anim: this.flyAnimations[Math.floor(Math.random() * this.flyAnimations.length)]
      }));
    });
  }
}
