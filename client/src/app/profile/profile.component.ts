import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
import {UserService} from '../core/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  errorMessage;
  canEdit = false;
  getCurrentUser(): void {
    let userID = this.route.snapshot.paramMap.get('id');
    //grab the localStorage user to assign it to variable
    let loggedInUser = this.authService.getUser()
    if (loggedInUser._id == userID){
      this.user = loggedInUser
      this.canEdit = true
    }
    else{
      this.userService.getUser(userID).subscribe((user)=>{
        this.user = user
      });
      this.canEdit = false
    }
  }

  updateProfile(data){
    this.errorMessage = null
    let userId = this.user._id
    this.userService.updateProfile(userId,data).subscribe((user)=>{
      if (typeof user === 'string'){
        this.errorMessage = 'Nickname already taken';
      }
      else{
        this.authService.setUser(user);
        this._flashMessagesService.show('Update Successful', { cssClass: 'alert-success',timeout: 2000 } );
      }
    })
  }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

}
