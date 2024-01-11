import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product, User } from '../interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  product!: Product[];
  users!: User[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAll().subscribe(response => {
      this.product = response
    })
    this.productService.getAllusers().subscribe(userResponse => {
      this.users = userResponse
    })
  }
  getUserName(userId: number) {
    const nameOfUser = this.users.find(n => n.id === userId)
    if(nameOfUser) {
      return nameOfUser.username;
    } else {
      return "idk"
    }
    
  }
  
}
