import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  onLogin(username,password){
    this.authService.login({username:username, password:password}).subscribe(()=>{
      
    })
  }
  ngOnInit(): void {
  }

}
