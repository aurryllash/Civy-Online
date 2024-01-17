import { Component, Inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Product, User } from '../interfaces/product.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrl: './myproducts.component.css'
})
export class MyproductsComponent {

  myProducts!: Product[];
 

  constructor(private auth: AuthService, private dialog: MatDialog) {
    const username = sessionStorage.getItem('username')
    this.auth.getAllusers().subscribe(res => {
      const userId = res.find(n => n.username == username)?.id
      if(userId) {
        this.auth.getAll().subscribe(response => {
          this.myProducts = response.filter(n => n.userId == userId)
        })
      }
    })
  }

  updateProduct(code: any) {
    this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '400px',
      height: '200px',
      position: {
        right: '40%',
        left: '40%',
        top: '-15%'
      },
      data: {
        usercode: code
      },
    })
  }



}
