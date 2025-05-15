import {AfterViewChecked, Component, HostListener, inject} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ContactsModalService} from '../../../../shared/services/contacts-modal.service';
import {ScrollTrackerService} from '../../../../shared/services/scroll/scroll-tracker.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent implements AfterViewChecked {

  contactsModalService = inject(ContactsModalService);
  private scrollTrackerService = inject(ScrollTrackerService);

  private wasTriggered = false;

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent): void {
    this.contactsModalService.close();
  }

  ngAfterViewChecked(): void {
    const isOpen = this.contactsModalService.isOpen();
    const isVisible = this.contactsModalService.isVisible();

    if (isOpen && !this.wasTriggered) {
      this.scrollTrackerService.triggerAnimationsIn('#contacts');
      this.wasTriggered = true;
    } else if (!isOpen && isVisible && this.wasTriggered) {
      // 🔥 Повторно проигрываем zoom-out
      this.scrollTrackerService.triggerAnimationsIn('#contacts');
      this.wasTriggered = false;
    }
  }
}
