import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
import {UserService} from '../core/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user
  getCurrentUser(): void {
    //grab the localStorage user to assign it to variable
    this.user = this.authService.getUser();
  }

  updateProfile(data){
    let userId = this.user._id
    this.userService.updateProfile(userId,data).subscribe((user)=>{
      this.authService.setUser(user);
      this._flashMessagesService.show('Update Successful', { cssClass: 'alert-success',timeout: 2000 } );
      // this.getCurrentUser()
    })
  }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

}
