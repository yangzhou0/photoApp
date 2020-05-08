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
    this.isLoggedIn = this.loginService.isLoggedIn
    if(!this.isLoggedIn){
      this.router.navigate(['login'])
    }
  }

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
    this.checkLoggedIn()
  }

}
