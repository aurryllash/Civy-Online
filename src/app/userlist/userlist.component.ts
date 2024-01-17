import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/product.interface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit{

  userList!: User[];
  constructor(private auth: AuthService) {
  }
  ngOnInit(): void {
    this.auth.getAllusers().subscribe(response => {
      this.userList = response
    })
  }
}
