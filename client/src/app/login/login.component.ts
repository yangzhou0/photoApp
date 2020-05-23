import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
import {AppComponent} from '../app.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  failedLogin: boolean = false; // initially set to false, toggle to true if user provided wrong credentials
  failedLoginMessage; // when login failed, display this message

  constructor(private authService: AuthService, private router: Router, private appComponent: AppComponent) { }

  onLogin(email,password){
    //when user clicked login button from login form, triger the authService to make calls to server
    this.authService.login({email:email, password:password}).subscribe(feedback=>{
      if (feedback instanceof Object){ //success is true if server checked the credentials
        //update the login information from appComponent
        // navigate to photos component
        this.router.navigate(['photos']);

      }
      else{ // get here if success if false
        this.failedLoginMessage = feedback
        this.failedLogin = true;
      }
    })
  }
  ngOnInit(): void {
  }

}
