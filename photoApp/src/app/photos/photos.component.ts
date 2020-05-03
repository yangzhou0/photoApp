import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IPhoto } from '../shared/interface';
import {PhotoService} from '../core/photo.service';
import {MessageService} from '../core/message.service';

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
          this.photos = photos.reverse();
          });
  }

  delete(photo): void{
    if (confirm(`Are you sure you want to delete id#: ${photo._id}?`)){
      this.photoService.deletePhoto(photo._id).subscribe(()=>{
        this.messageService.add(`Successfully deleted id#: ${photo._id}`)
        this.getPhotos();
      });
    }
  }


  upvote(photo){
    photo.likes += 1;
    this.messageService.add('you just liked ' + photo.description)
  }
  constructor(private photoService: PhotoService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPhotos();
    this.photoUrl = this.photoService.baseUrl;
  }

}
