import { Component } from '@angular/core';
import { AuthenticationService } from '../getInto/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isAuthenticated: boolean = false;
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });
  }
  signOut(): void {
    this.authService.signOut();
  }
}
