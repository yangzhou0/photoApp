import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

//import custome modules
import { IPhoto } from '../shared/interface';
import {PhotoService} from '../core/photo.service';
import {MessageService} from '../core/message.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private photoService: PhotoService, private messageService: MessageService) { }
  subTitle: string = 'Gallery'
  photos: IPhoto[]; //photoInterface

  getPhotos(): void {
    this.photoService.getPhotos()
        .subscribe(photos => {
          this.messageService.add('PhotoService: fetched all photos'); // when loading all photos on homepage, added a message to let the user know
          this.photos = photos.reverse();
          });
  }

  ngOnInit(): void {
    this.getPhotos()
  }

}
