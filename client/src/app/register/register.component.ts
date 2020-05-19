import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../core/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onRegister(email,password){
    this.registerService.register({email:email, password:password}).subscribe(()=>{
      
    })

  }
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

}
