import {Component, OnInit, signal} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  imports: [],
  templateUrl: './contacts-form.component.html',
  styleUrl: './contacts-form.component.scss'
})
export class ContactsFormComponent implements OnInit {

  contactsForm!: FormGroup;

  readonly enabledButtonClasses = `text-white bg-gradient-to-r from-white/20 to-white/30 hover:from-white/30 hover:to-white/40 hover:shadow-whiteGlow hover:border-white hover:scale-105 border-white/50`;

  readonly disabledButtonClasses = `bg-white/10 text-white opacity-20 cursor-not-allowed border border-white/10 shadow-none hover:shadow-none hover:border-white/10`;

  isSubmitting = signal<boolean>(false);
  isSuccess = signal<boolean>(false);


  ngOnInit() {
  }
}
