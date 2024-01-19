import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Product, User } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

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

  getProductById(Id: string) {
    return this.http.get('http://localhost:3000/products?id='+Id)
  }

  registerUser(userDetails: User) {
    return this.http.post(`http://localhost:3000/users`, userDetails)
  }

  updateProduct(code: any, inputData: Product) {
    const url = `http://localhost:3000/products?id=${code}`
  
    return this.http.patch(url, inputData, this.httpOptions)
  }
  addProduct(productDetails: Product) {
    return this.http.post(`http://localhost:3000/products`, productDetails)
  }
  

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }
  getUserRole() {
    return sessionStorage.getItem('userrole')!=null ? sessionStorage.getItem('userrole')?.toString() : ''
  }
}
