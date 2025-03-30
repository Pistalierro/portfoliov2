import {AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {ScrollService} from '../../shared/services/scroll/scroll.service';
import {ScrollTrackerService} from '../../shared/services/scroll/scroll-tracker.service';
import {getLangFlag} from '../../shared/utils/lang-flag.helpers';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, TranslatePipe],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements AfterViewInit {

  isMenuOpen = false;
  showLangList = false;

  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef;
  @ViewChild('burgerBtn') burgerBtnRef!: ElementRef;
  translateService = inject(TranslateService);
  scrollService = inject(ScrollService);

  private scrollTrackerService = inject(ScrollTrackerService);
  activeSection = this.scrollTrackerService.activeSection;

  private elRef = inject(ElementRef);

  get currentLang(): string {
    return this.translateService.currentLang;
  }

  get langFlag(): string {
    return getLangFlag(this.currentLang);
  }

  ngAfterViewInit(): void {
    this.scrollTrackerService.observeSections(['hero', 'about', 'projects', 'skills', 'contacts']);
  }

  toggleLangList(): void {
    this.showLangList = !this.showLangList;
  }

  switchLang(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.showLangList = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!this.elRef.nativeElement.contains(target)) {
      this.showLangList = false;
    }

    if (
      this.isMenuOpen &&
      this.mobileMenuRef &&
      !this.mobileMenuRef.nativeElement.contains(target) &&
      this.burgerBtnRef &&
      !this.burgerBtnRef.nativeElement.contains(target)
    ) {
      this.isMenuOpen = false;
    }
  }

  scrollToSection(id: string): void {
    this.scrollService.scrollToElement(id);
    this.isMenuOpen = false;
  }
}
