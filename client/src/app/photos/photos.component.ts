import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

//import custome modules
import { IPhoto } from '../shared/interface';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  isLoggedIn: boolean

  checkLoggedIn(){
    //sync with loginService
    this.isLoggedIn = this.loginService.isLoggedIn
    if(!this.isLoggedIn){
      //redirect to login page if not loggedin
      this.router.navigate(['login'])
    }
  }

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
    //check if user is logged in at first, redirect to login page if not logged in.
    this.checkLoggedIn()
  }

}
