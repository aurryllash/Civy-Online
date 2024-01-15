import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  constructor(private fb: FormBuilder, private auth: AuthenticationService) {}

  user = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
    // const {email, password} = this.user.value
  }
}
