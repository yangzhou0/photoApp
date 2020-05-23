import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {AuthService} from './core/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string
  title = 'photoApp';
  warning: boolean;

  constructor(
    private router: Router,
    private _flashMessagesService: FlashMessagesService,
    private authService: AuthService){}

  onLogout(){
    //when user click logout, sync the logOut throughout the whole angular site
    this.authService.logout().subscribe(res=>{
      console.log(res)
    })
    this.router.navigate(['login'])

  }

  checkLogin(): boolean{
    return this.authService.isLoggedIn();
  }

  onPhotos(){
    //when user click photos button on the upper right, redirect to the gallery if loggedin, otherwise pop a flash message
    if(!(this.checkLogin())){
      this._flashMessagesService.show('Log in first!',{ cssClass: 'alert-danger',timeout: 1500 } );
      return;
    }
    this.router.navigate(['photos'])
  }


  ngOnInit(): void {
  }
}
