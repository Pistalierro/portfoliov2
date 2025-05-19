import {AbstractControl, ValidationErrors} from '@angular/forms';

export function customEmailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value?.toLowerCase().trim();
  if (!value) return null;
  const emailRegEx = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  return emailRegEx.test(value) ? null : {invalidEmail: true};
}
