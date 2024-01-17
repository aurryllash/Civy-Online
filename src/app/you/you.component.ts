import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/product.interface';

@Component({
  selector: 'app-you',
  templateUrl: './you.component.html',
  styleUrl: './you.component.css'
})
export class YouComponent implements OnInit{

  you!: User;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    const username = sessionStorage.getItem('username')
    this.auth.getAllusers().subscribe(res => {
        const founded = res.find(n => n.username == username)
        if(founded) {
          this.you = founded
        }
    })
  }

  
}
