import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.isLoggedIn()) {
      if(route.url.length > 0) {
        let menu = route.url[0].path;
        // console.log('Menu:', menu);
        if(menu == 'user') {
          if(this.auth.getUserRole() == 'admin') {
            return true;
          } else {
            alert("you do not have access!!!")
            this.router.navigate(['/home'])
            return false
          } 
        } else {
          return true
        } 
      } else {
        return true;
      }

    } else {
      this.router.navigate(['/signIn'])
      return false
    }

  }
}
