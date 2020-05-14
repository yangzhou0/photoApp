import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
import {LoginService} from '../core/login.service'
import {AppComponent} from '../app.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  wrongCredentials:boolean = false; // initially set to false, toggle to true if user provided wrong credentials
  constructor(private authService: AuthService, private router: Router, private loginService: LoginService, private appComponent: AppComponent) { }

  onLogin(username,password){
    //when user clicked login button from login form, triger the authService to make calls to server
    this.authService.login({username:username, password:password}).subscribe((success)=>{
      if (success){ //success is true if server checked the credentials
        this.loginService.logIn(username);
        //update the login information from appComponent
        this.appComponent.syncLoginInfo();
        // navigate to photos component
        this.router.navigate(['photos']);

      }
      else{ // get here if success if false
        this.wrongCredentials = true;
      }
    })
  }
  ngOnInit(): void {
  }

}
