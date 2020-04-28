import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IPhoto } from '../shared/interface';
import {PhotoService} from '../core/photo.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  subTitle = 'Gallery'
  isVisible = true;
  photos: IPhoto[];
  photoUrl: string;
  getPhotos(): void {
    this.photoService.getPhotos()
        .subscribe(photos => {
          this.photos = photos;
          console.log('type: ' + typeof photos);//object/array
          console.log('length: ' + photos.length);//1
          });
  }

  delete(photo): void{
    console.log(photo._id);
    this.photoService.deletePhoto(photo._id).subscribe(()=>{this.getPhotos()});
  }

  @Output() upvoteEvent: EventEmitter<string> = new EventEmitter<string>();

  upvote(photo){
    photo.likes += 1;
    this.upvoteEvent.emit(photo.description)
  }
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();
    this.photoUrl = this.photoService.baseUrl;
  }

}
