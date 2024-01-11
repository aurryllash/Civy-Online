import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, User } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products")
  }
  getAllusers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3000/users")
  }


}
