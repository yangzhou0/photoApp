import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../core/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onRegister(name,email,password){
    this.registerService.register({name:name, email:email, password:password}).subscribe((registeredUser)=>{
      this.router.navigate(['photos'])
    })

  }
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
