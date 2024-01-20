import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Product } from '../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrl: './myproducts.component.css'
})
export class MyproductsComponent implements OnInit{

  myProducts!: Product[];
  checkProduct: boolean = true;
 
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
  ngOnInit(): void {
    if(this.myProducts.length > 0) {
      this.checkProduct = true
    } else {
      this.checkProduct = false
    }
  }

  updateProduct(Id: number) {
   const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '400px',
      height: '200px',
      data: {
        usercode: Id
      },
    })
    popup.afterClosed().subscribe()
  }
}
