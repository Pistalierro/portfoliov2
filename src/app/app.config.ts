import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideTranslate} from '../core/i18n/translate.provider';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';

function setRealVh() {
  const vh = window.innerHeight * 0.01;
  console.log('Real vh set:', vh);
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setRealVh();
window.addEventListener('resize', setRealVh);
window.addEventListener('orientationchange', setRealVh);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideHttpClient(),
    ...provideTranslate().providers,
    provideAnimations(),
  ]
};
