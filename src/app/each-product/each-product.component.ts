import { Component, OnInit } from '@angular/core';
import { Product, User } from '../interfaces/product.interface';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrl: './each-product.component.css'
})
export class EachProductComponent implements OnInit{
  item?: Product;
  users!: User[];
  product!: Product[];
  constructor(private productService: AuthService, private route: ActivatedRoute) {}
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

  }
