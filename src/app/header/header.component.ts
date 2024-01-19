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
    let currentUrl = this.router.url
    if(currentUrl == '/registration' || currentUrl == '/signIn') {
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

  ngOnInit(): void {
  }
  signOut(): void {
    sessionStorage.clear()
    this.isAuthenticated = false
    this.router.navigate(['/signIn'])
  }

  switchLanguage(lang: 'geo' | 'en' | "sv") {
    this.translate.use(lang)
  }

}
