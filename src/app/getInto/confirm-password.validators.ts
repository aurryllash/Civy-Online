import { AbstractControl, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password')?.value;
  const repeatPassword = control.get('repeatPassword')?.value;

  if (password !== repeatPassword?.value) {
    return { passwordsNotMatch: true };
  } else {
    return null;
  }
};
