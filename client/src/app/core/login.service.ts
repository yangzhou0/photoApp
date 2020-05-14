import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string = '' //initially set username to empty
  isLoggedIn: boolean = false; //initially set isLoggedIn to false

  logIn(username){
    //when login is called, set isLoggedIn to true, username to username user provided
    this.isLoggedIn = true;
    this.username = username;
  }

  logOut(){
    this.isLoggedIn = false; //when logout is called, set isLoggedIn to false, username to empty string
    this.username = '';
  }

}
