import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../core/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onRegister(name,email,password){
    this.authService.register({name:name, email:email, password:password}).subscribe((registeredUser)=>{
      this.authService.setUser(registeredUser);
      this.router.navigate(['photos'])
    })

  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
