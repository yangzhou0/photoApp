import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
    let photoId = this.route.snapshot.params.id;
    this.photoService.getPhoto(photoId).subscribe(photo=>{
      this.photo = photo;
    })
  }
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit(): void {
      this.getPhoto();
      this.photoUrl = this.photoService.baseUrl;
  }

}
