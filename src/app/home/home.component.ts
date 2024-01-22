import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Product, User } from '../interfaces/product.interface';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, DoCheck{
  product!: Product[];
  users!: User[];;
  isEmpty: boolean = false

  constructor(private productService: AuthService, private route: ActivatedRoute) {}
  ngDoCheck(): void {
    if(this.product.length > 0) {
      this.isEmpty = false
    } else {
      this.isEmpty = true
    }
  }
  
  ngOnInit(): void {
    this.productService.getAll().subscribe(response => {
      this.route.params.subscribe(params => {
        if(params['title']) {
          this.product = response.filter(n => n.title.toLowerCase().includes(params['title'].toLowerCase()))
        } else {
          this.product = response
        }
      }) 
      
    })
    this.productService.getAllusers().subscribe(userResponse => {
      this.users = userResponse
    })

    
  }

  getUserName(userId: string) {
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
