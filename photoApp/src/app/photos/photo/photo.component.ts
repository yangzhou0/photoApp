import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

//import custome modules
import {PhotoService} from '../../core/photo.service';
import { IPhoto } from '../../shared/interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo;
  photoUrl;

  getPhoto(){
    let photoId = this.route.snapshot.paramMap.get('id'); //capture part of the current url from routing
    this.photoService.getPhoto(photoId).subscribe(photo=>{ //the url provides the id needed to fetch the particular photo from server
      this.photo = photo;
    })
  }
  
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
      this.getPhoto(); // fetch the photo from server
      this.photoUrl = this.photoService.baseUrl; //server url
  }

}
