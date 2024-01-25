import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  userData: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    sessionStorage.clear()
  }

  user = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit() {
    this.auth.getBycode(this.user.value.email).subscribe(
      (res) => {
      this.userData = res;
      if(this.userData.length !== 0) {
        if(this.userData[0].password == this.user.value.password) {
            sessionStorage.setItem('username', this.userData[0].username)
            sessionStorage.setItem('userrole', this.userData[0].role)
            this.router.navigate(['/home'])
        } else {
          alert("email or password is incorrect...");
          this.user.reset()
        }
      } else {
        alert("email or password is incorrect...");
        this.user.reset()
      }
      
    }
    )
  }
}
