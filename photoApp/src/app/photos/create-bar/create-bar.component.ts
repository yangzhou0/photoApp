import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
@Component({
  selector: 'app-create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.css']
})
export class CreateBarComponent implements OnInit {

  constructor(private photoService: PhotoService) { }
  uploadPhoto(description,hashtag,photo){
    console.log('description: ' + description)
    console.log('hashtag: ' + hashtag)
    console.log('type of photo: ' + typeof photo)
    let data = {
      description: description,
      hashtag: hashtag,
      photo: photo
    }
    this.photoService.uploadPhoto(data).subscribe(()=>{console.log('success')});
  }
  ngOnInit(): void {
  }

}
