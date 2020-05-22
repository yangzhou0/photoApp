import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

//import custome modules
import { IPhoto } from '../shared/interface';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  isLoggedIn: boolean

  constructor( private router: Router){}

  ngOnInit(): void {
    //check if user is logged in at first, redirect to login page if not logged in.
  }

}
