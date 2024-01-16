import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, User } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products")
  }

  getAllusers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users")
  }

  getBycode(email: any) {
    return this.http.get('http://localhost:3000/users?email='+email)
  }

  registerUser(userDetails: User) {
    return this.http.post(`http://localhost:3000/users`, userDetails)
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }
  getUserRole() {
    return sessionStorage.getItem('role')!=null ? sessionStorage.getItem('role')?.toString() : ''
  }
  

}
