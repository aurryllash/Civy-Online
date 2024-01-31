import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements DoCheck, OnInit {

  isAuthenticated!: boolean;
  product!: Product[];
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.auth.getAll().subscribe(res => {
      this.product = res.filter(n => n.active)
      console.log(this.product)
    })
  }

  ngDoCheck(): void {
    if(typeof sessionStorage !== 'undefined') {
      const username = sessionStorage.getItem('username')
      if(username) {
        this.isAuthenticated = true
      } else {
        this.isAuthenticated = false
      }
    }
  }

  


}
