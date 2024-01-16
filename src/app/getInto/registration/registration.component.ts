import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../confirm-password.validators';
import { CheckUserService } from '../../services/check-user.service';
import { User } from '../../interfaces/product.interface';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  constructor(private fb: FormBuilder, private checkUsername: CheckUserService, private auth: AuthService, private router: Router) {}
  

  user = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    userName: ['', [Validators.required], this.checkUsername.validateUsernameNotTaken.bind(this.checkUsername)],
    email: ['', [Validators.required]],
    check: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repeatPassword: ['', [Validators.required]],
    role: ['']
  }, 
  { 
    validator: ConfirmedValidator('password', 'repeatPassword')
  }
  )

  // autoFill() {
  //   this.user.patchValue({
  //     name: "lasha",
  //     lastName: 'Tsiklauri',
  //     userName: 'yazvnu',
  //     email: "lashas@gmailcom",
  //     check: true,
  //     password: "lashalasha",
  //     repeatPassword: "lashalasha",
  //   })
  // }

  onSubmit() {
    
    const postUser = {...this.user.value}
    delete postUser.repeatPassword
    delete postUser.check

    this.auth.registerUser(postUser as User).subscribe(
      (response) => {
        console.log(response)
        alert("user registered successfully")
        this.router.navigate(['/signIn'])
      },
      error => console.log(error)
    )
  }
}
