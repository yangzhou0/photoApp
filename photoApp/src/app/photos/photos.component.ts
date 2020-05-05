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
  //initial data fed to html to render, subject to change
  subTitle = 'Gallery'
  photos: IPhoto[]; //photoInterface
  photoUrl: string;

  //obtain photos from server
  getPhotos(): void {
    this.photoService.getPhotos()
        .subscribe(photos => {
          this.messageService.add('PhotoService: fetched all photos'); // when loading all photos on homepage, added a message to let the user know
          this.photos = photos.reverse();
          });
  }

  //delete particular photo
  delete(photo): void{
    if (confirm(`Are you sure you want to delete id#: ${photo._id}?`)){
      this.photoService.deletePhoto(photo._id).subscribe(()=>{
        this.messageService.add(`Successfully deleted id#: ${photo._id}`)
        this.getPhotos();
      });
    }
  }

  //like the photo
  upvote(photo){
    photo.likes += 1;
    this.messageService.add('you just liked ' + photo.description)
  }

  constructor(private photoService: PhotoService, private messageService: MessageService) { }


  ngOnInit(): void {
    this.getPhotos(); //fetch photos to display onInit
    this.photoUrl = this.photoService.baseUrl;
  }

}
