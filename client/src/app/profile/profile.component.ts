import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/auth.service'
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
    
  }
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getCurrentUser()
  }

}
