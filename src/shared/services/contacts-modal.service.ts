import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsModalService {

  isOpen = signal<boolean>(false);
  isVisible = signal<boolean>(false);

  open(): void {
    this.isVisible.set(true);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    setTimeout(() => this.isVisible.set(false), 300);
  }

  toggle(): void {
    if (!this.isOpen()) {
      this.open();
    } else {
      this.close(); // а здесь уже есть задержка
    }
  }
}
