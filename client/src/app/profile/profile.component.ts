import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
import {UserService} from '../core/user.service';

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
      // this.getCurrentUser()
    })
  }

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

}
