import { Component, OnInit } from '@angular/core';
import {LoginService} from './core/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = ''
  title = 'photoApp';
  isLoggedIn: boolean;
  constructor(private loginService: LoginService, private router: Router){}

  onLogout(){
    this.loginService.logOut();
    this.router.navigate(['login'])

  }

  syncLoginInfo(){
    this.isLoggedIn = this.loginService.isLoggedIn;
    this.username = this.loginService.username
  }

  ngOnInit(): void {
    this.syncLoginInfo();
  }
}
