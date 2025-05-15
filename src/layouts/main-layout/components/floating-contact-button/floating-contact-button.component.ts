import {Component, inject} from '@angular/core';
import {ContactsModalService} from '../../../../shared/services/contacts-modal.service';

@Component({
  selector: 'app-floating-contact-button',
  imports: [],
  templateUrl: './floating-contact-button.component.html',
  styleUrl: './floating-contact-button.component.scss'
})
export class FloatingContactButtonComponent {

  contactsModalService = inject(ContactsModalService);

}
