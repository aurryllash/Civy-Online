import { Component, Inject, OnInit } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrl: './updatepopup.component.css'
})
export class UpdatepopupComponent implements OnInit{

  constructor(private auth: AuthService, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
  private dialog: MatDialogRef<UpdatepopupComponent>) {
    if(this.data.usercode != null && this.data.usercode != '') {
      this.auth.getProductById(this.data.usercode).subscribe(res => {
        if (Array.isArray(res) && res.length > 0) {
          this.editData = res[0];
          console.log(this.editData)
        }
        
        this.product.setValue({id: this.editData.id, title: this.editData.title, price: this.editData.price, description: this.editData.description, category: this.editData.category, image: this.editData.image, rating: {
          rate: this.editData.rating.rate, 
          count: this.editData.rating.count
        }, userId: this.editData.userId, active: !this.editData.active})
      })
    } 
   }

  editData!: Product;

  ngOnInit(): void {
    
  }

  updateProduct() {

    if(this.product.valid) {
      const productData: Product = this.product.value as Product;
      this.auth.updateProduct(this.product.value.id, productData)
      .subscribe(res => {
        alert("product updated successfully!");
        this.dialog.close();
        
      }
      ) 
      console.log(productData)
    } 
    
  }
  
  product = this.fb.group({
      id: '',
      title: [''],
      price: 0,
      description: [''],
      category: [''],
      image: [''],
      rating: {
        rate: 0, 
        count: 0
      },
      userId: [''],
      active: [false]
  })
}
