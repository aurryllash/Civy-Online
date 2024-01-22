import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements DoCheck{
  isAuthenticated: boolean = false;
  isAdmin: boolean = false


  constructor(private auth: AuthService, private router: Router, private translate: TranslateService) {}

  ngDoCheck(): void {
    const userauth = sessionStorage.getItem("username") == null
    if(userauth) {
      this.isAuthenticated = false
    } else {
      this.isAuthenticated = true
    }
    if(this.auth.getUserRole() == 'admin') {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
  }

  signOut(): void {
    sessionStorage.clear()
    this.isAuthenticated = false
    this.router.navigate(['/signIn'])
  }

  switchLanguage(lang: 'geo' | 'en' | "sv") {
    this.translate.use(lang)
  }

  search(searched: HTMLInputElement) {
    this.router.navigate(['/search/' + searched.value])
    searched.value = ''
  }

}
