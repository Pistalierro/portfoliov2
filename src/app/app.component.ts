import {Component} from '@angular/core';
import {NavbarComponent} from '../features/navbar/navbar.component';
import {AboutComponent} from '../features/about/about.component';
import {HeroComponent} from '../features/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    AboutComponent,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
