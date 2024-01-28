import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { AuthService } from './auth.service';
import { cartTotal } from '../shared/cartTotal';
import { Cart } from '../shared/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: cartTotal = new cartTotal();

  constructor(private auth: AuthService) {}
  addCart(details: Product) {
    let product = this.cart.cartList.find(n => n.item.id === details.id)

    if(product) {
      return
    } else {
      this.cart.cartList.push(new Cart(details))
    }
  }
  getItem() {
    return this.cart;
  }
  deleteItem(id: number) {
    this.cart.cartList.splice(id, 1)
  }
}
