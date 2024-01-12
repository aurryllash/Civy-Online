import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidator } from '../confirm-password.validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private fb: FormBuilder) {}
  

  user = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repeatPassword: ['', [Validators.required]],
  }, 
  {validators: confirmPasswordValidator  }
     )
  onSubmit() {
    console.log(this.user.get('repeatPassword')?.errors);
    console.log(this.user.get('password')?.errors);
  }
}
