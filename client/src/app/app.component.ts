import { Component, OnInit } from '@angular/core';
import {LoginService} from './core/login.service'
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = ''
  title = 'photoApp';
  isLoggedIn: boolean;
  warning: boolean;
  constructor(private loginService: LoginService, private router: Router, private _flashMessagesService: FlashMessagesService){}

  onLogout(){
    //when user click logout, sync the logOut throughout the whole angular site
    this.loginService.logOut();
    this.syncLoginInfo();
    this.router.navigate(['login'])

  }

  onPhotos(){
    //when user click photos button on the upper right, redirect to the gallery if loggedin, otherwise pop a flash message
    if(!this.isLoggedIn){
      this._flashMessagesService.show('Log in first!',{ cssClass: 'alert-danger',timeout: 1500 } );
      return;
    }
    this.router.navigate(['photos'])
  }

  syncLoginInfo(){
    //when logout is clicked from appComponent.html or login button is clicked from login.html,
    //this syncLoginInfo function is called to update the properties on this component properly
    this.isLoggedIn = this.loginService.isLoggedIn;
    this.username = this.loginService.username
    this.warning = false;
  }

  ngOnInit(): void {
  }
}
