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
    this.loginService.logOut();
    this.syncLoginInfo();
    this.router.navigate(['login'])

  }

  onPhotos(){
    if(!this.isLoggedIn){
      this._flashMessagesService.show('Log in first!',{ cssClass: 'alert-danger',timeout: 1500 } );
      return;
    }
    this.router.navigate(['photos'])
  }

  syncLoginInfo(){
    this.isLoggedIn = this.loginService.isLoggedIn;
    this.username = this.loginService.username
    this.warning = false;
  }

  ngOnInit(): void {
  }
}
