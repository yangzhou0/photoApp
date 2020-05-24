import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService} from './core/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string =''
  title = 'photoApp';
  warning: boolean;

  constructor(
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService){}

  onRegisterOrLogoutOrLogin(value){
    if (value === 'logout') {
      //when user click logout, sync the logOut throughout the whole angular site
      this.authService.logout().subscribe(res=>{
        //remove userinfo from localStorage
        this.authService.removeUser();
        //wipe out username so it won't be displayed
        this.username = '';
        this.router.navigate(['login'])
      })
    }
    else if (value == 'register'){
      this.router.navigate(['register'])
    }
    else if (value == 'login'){
      this.router.navigate(['login'])
    }
  }

  checkLogin(): boolean{
    return this.authService.isLoggedIn();
  }


  getCurrentUser(): void {
    let user = this.authService.getUser();
    if (user){
      this.username = user['name']
    }
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }
}
