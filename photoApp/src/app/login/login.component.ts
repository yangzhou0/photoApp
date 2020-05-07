import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(username,password){
    this.authService.login({username:username, password:password}).subscribe((boolean)=>{
      if (boolean){
        // navigate to photos component
        this.router.navigate(['photos']);

      }
      else{
        console.log('false credentials')

      }
    })
  }
  ngOnInit(): void {
  }

}
