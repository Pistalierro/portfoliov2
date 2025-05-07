import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

console.error = (...args) => {
  alert('Console error: ' + args.join(' '));
  window.console.log(...args);
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
