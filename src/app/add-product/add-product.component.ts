import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Product } from '../interfaces/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  category: string[] = ["men's clothing", "women's clothing","jewelery", "electronics"]
  userID?: string;
  newProduct: any;

  photo!: string;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {

    this.auth.getAllusers().subscribe(res => {
      const username = sessionStorage.getItem('username')
      if(username) {
        this.userID = res.find(n => n.username == username)?.id
      }
    }) 
  }

  product = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    price: [null, [Validators.required,]],
    category: ['', Validators.required],
    Image: ['', Validators.required]
  })

  addProduct() {
    if(this.product.valid) {

      this.newProduct = {
        ...this.product.value,
        userId: this.userID,
        active: true,
        rating: {
          rate: 0,
          count: 0
        },
        image: this.photo
      }

      
      this.auth.addProduct(this.newProduct).subscribe(res => {
        alert("Product added successfully!")
        this.product.reset()
        this.router.navigate(['/myproducts'])
      })


      }
  }

  onChange(event: any) {
    console.log(event.target.files)
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(ev: any) => {
        this.photo = ev.target.result ;
      }
    }
  }

}