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
  getPhotos(): void {
    this.photoService.getPhotos()
        .subscribe(photos => this.photos = photos);
  }

  @Output() upvoteEvent: EventEmitter<string> = new EventEmitter<string>();

  upvote(photo){
    photo.votes += 1;
    this.upvoteEvent.emit(photo.description)
  }
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos()
  }

}
