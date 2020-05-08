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
  wrongCredentials:boolean = false;
  constructor(private authService: AuthService, private router: Router, private loginService: LoginService, private appComponent: AppComponent) { }

  onLogin(username,password){
    this.authService.login({username:username, password:password}).subscribe((success)=>{
      if (success){
        // navigate to photos component
        this.loginService.logIn(username);
        //triger app.component ngOnInit
        this.appComponent.syncLoginInfo();
        this.router.navigate(['photos']);

      }
      else{
        this.wrongCredentials = true;
      }
    })
  }
  ngOnInit(): void {
    this.appComponent.syncLoginInfo();
  }

}
