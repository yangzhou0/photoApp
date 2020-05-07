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
    this.photoService.getPhoto(photoId).subscribe(
      photo => {
        console.log(photo)
        this.photo = photo.body
      },
      error => {
        console.log(error.status)
        if(error.status == 404){
          this.router.navigate(['photos'])
        }
      }
    )
  }

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.getPhoto(); // fetch the photo from server
      this.photoUrl = this.photoService.baseUrl; //server url
  }

}
