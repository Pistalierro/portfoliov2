import {Component} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {FloatingContactButtonComponent} from './components/floating-contact-button/floating-contact-button.component';
import {ContactsModalComponent} from '../../pages/home/sections/contacts/contacts-modal/contacts-modal.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    FloatingContactButtonComponent,
    ContactsModalComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
