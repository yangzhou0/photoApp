import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PhotoService} from '../../core/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo;
  photoUrl;
  getPhoto(photoId){
    this.photoService.getPhoto(photoId).subscribe(photo=>{
      this.photo = photo;
    })
  }
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
      let photoId = this.route.snapshot.paramMap.get('id');
      this.getPhoto(photoId);
      this.photoUrl = this.photoService.baseUrl;
  }

}
