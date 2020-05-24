import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../core/auth.service'
import {AppComponent} from '../app.component'

//import custome modules
import { IPhoto } from '../shared/interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private appComponent: AppComponent
  ){}

  checkLoggedin(){
    if (this.authService.isLoggedIn()){
      this.appComponent.username = this.authService.getUser()['name']
    }
  }

  ngOnInit(): void {
    this.checkLoggedin()
  }

}
