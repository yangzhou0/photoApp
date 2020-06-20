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
  user
  editingProfile = false
  getCurrentUser(): void {
    let userID = this.route.snapshot.paramMap.get('id');
    //grab the localStorage user to assign it to variable
    this.user = this.authService.getUser();
    if (this.user._id == userID){
      this.editingProfile = true
    }
    else{
      //set this.user to the one from DB corresponding to the userID
      //this.editingProfile = false
    }
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
    private route: ActivatedRoute,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

}
