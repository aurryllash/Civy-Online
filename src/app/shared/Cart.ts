import { Product } from "../interfaces/product.interface";

export class Cart {
    item!: Product;
    quantity: number = 1;
    constructor(item: Product) {
        this.item = item;
    }
}