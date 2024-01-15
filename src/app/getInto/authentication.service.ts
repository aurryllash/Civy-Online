import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails)
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users?email=${email}`)
  }
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
