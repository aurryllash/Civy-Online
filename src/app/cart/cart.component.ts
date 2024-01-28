import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, DoCheck {
  products!: Cart[]
  total: number = 0;
  totalPrice: number = 0;
  isEmpty: boolean = false;

  constructor(private cart: CartService) {}
  ngDoCheck(): void {
    this.total = 0;
    this.totalPrice = 0;
    this.products.forEach(n => {
      this.total += n.quantity
    })

    this.products.forEach(n => {
      this.totalPrice += n.item.price
    })

    this.isEmpty = this.products.length == 0
  }
  ngOnInit(): void {
    // this.products = this.cart.getItem().cartList;
    this.products = this.cart.getItem().cartList;

    
  }
  getItem() {
    this.products = this.cart.getItem().cartList;
  }
  deleteItem(id: string) {
    const Id = this.products.findIndex(item => item.item.id === id);
    
    this.cart.deleteItem(Id);
    this.getItem()
  }
}
