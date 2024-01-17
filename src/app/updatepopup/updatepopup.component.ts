import { Component, Inject } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../services/auth.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrl: './updatepopup.component.css'
})
export class UpdatepopupComponent {

  constructor(private auth: AuthService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  delete(itemId: string) {

  }
}
