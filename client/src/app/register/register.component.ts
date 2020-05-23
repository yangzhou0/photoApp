import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../core/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  failedRegisterMessage: string;

  onRegister(name,email,password){
    this.authService.register({name:name, email:email, password:password}).subscribe((feedBack)=>{
      if (feedBack instanceof Object){
        this.authService.setUser(feedBack);
        this.router.navigate(['photos'])
      }
      else {
        this.failedRegisterMessage = feedBack
      }
    })

  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
