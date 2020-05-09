import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string = ''
  isLoggedIn: boolean = false;

  logIn(username){
    this.isLoggedIn = true;
    this.username = username;
    //triger app.component.onInit()
  }

  logOut(){
    this.isLoggedIn = false;
    this.username = '';
  }

  // constructor(private appComponent: AppComponent) { }
}
