import { Component, DoCheck, OnInit } from '@angular/core';
import { Product, User } from '../interfaces/product.interface';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrl: './each-product.component.css'
})
export class EachProductComponent implements OnInit, DoCheck{
  item?: Product;
  users!: User[];
  product!: Product[];
  isAuthenticated: boolean = false


  constructor(private productService: AuthService, private route: ActivatedRoute, private cart: CartService) {}
  ngDoCheck(): void {
    if(typeof sessionStorage !== 'undefined') {
      const userauth = sessionStorage.getItem("username") == null
    
    
    if(userauth) {
      this.isAuthenticated = false
    } else {
      this.isAuthenticated = true
    }
  }
  }
  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.productService.getAll().subscribe(response => {
        if(params['title']) {
          this.item = response.find(n => n.title.toLowerCase().includes(params['title'].toLowerCase()))
        }
        this.product = response;
      })
    } 
    )

    this.productService.getAllusers().subscribe(response => {
      this.users = response;
    })
  }

  getUserName(userId: any) {
    if (this.users) {
      const nameOfUser = this.users.find(n => n.id === userId);
      if (nameOfUser) {
        return nameOfUser.username;
      } else {
        return "cannot find username";
      }
    } else {
      return "Loading users...";
    }
  }

  addCart() {
    if(this.item) {
      this.cart.addCart(this.item)
    }
  }
  }
