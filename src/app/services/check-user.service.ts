import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {  Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUserService {

  constructor(private http: HttpClient) { }
  validateUsernameNotTaken(control: AbstractControl) {
    return this.checkUsernameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      })
    );
  }

  checkUsernameNotTaken(username: string): Observable<boolean> {
    return this.http.get("http://localhost:3000/users").pipe(
      map((usernameList: any) =>
        usernameList.filter((user: { username: string; }) => user.username === username)
      ),
      map(users => !users.length)
    );
  }

}
