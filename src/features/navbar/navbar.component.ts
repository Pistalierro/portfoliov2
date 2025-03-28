import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgIf, TranslatePipe],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  // ======================
  // Состояние
  // ======================
  isMenuOpen = false;     // мобильное меню
  showLangList = false;   // десктопный список языков

  // ======================
  // Ссылки на DOM
  // ======================
  // мобильное меню
  @ViewChild('mobileMenu') mobileMenuRef!: ElementRef;
  // бургер-кнопка
  @ViewChild('burgerBtn') burgerBtnRef!: ElementRef;
  // ======================
  translateService = inject(TranslateService);

  // ======================
  // Сервис переводов
  // ссылка на корневой элемент компонента
  private elRef = inject(ElementRef);

  // ======================
  // Геттеры

  // ======================
  get currentLang(): string {
    return this.translateService.currentLang;
  }

  get langFlag(): string {
    switch (this.currentLang) {
      case 'ru':
        return '🇷🇺';
      case 'en':
        return '🇬🇧';
      case 'ua':
        return '🇺🇦';
      default:
        return '🌐';
    }
  }

  // ======================
  // Методы
  // ======================
  toggleLangList(): void {
    this.showLangList = !this.showLangList;
  }

  switchLang(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    this.showLangList = false;
  }

  // ======================
  // Клик вне navbar => закрытие
  // ======================
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    // Закрываем десктопное меню языков, если клик не внутри navbar
    if (!this.elRef.nativeElement.contains(target)) {
      this.showLangList = false;
    }

    // Если мобильное меню открыто, и клик не внутри него, и клик не по бургеру → закрыть
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
}
