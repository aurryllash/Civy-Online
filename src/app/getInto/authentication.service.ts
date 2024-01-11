import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  signIn(username: string, password: string): void {
    // Implement your authentication logic here
    // Set isAuthenticatedSubject accordingly
    this.isAuthenticatedSubject.next(true);
  }

  signOut(): void {
    // Implement sign-out logic
    // Set isAuthenticatedSubject accordingly
    this.isAuthenticatedSubject.next(false);
  }
  
}
