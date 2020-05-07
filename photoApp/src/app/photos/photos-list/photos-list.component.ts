import { Component,Input, OnInit } from '@angular/core';

//import custome modules
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
import {MessageService} from '../../core/message.service';
import {PhotosComponent} from '../photos.component';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  photos
  subTitle: string = 'Gallery'
  photoUrl: string

  //fetch all photos from MongoDB from ngOnInit
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
        this.getPhotos()
      });
    }
  }

  //like the photo
  upvote(photo){
    photo.likes += 1;
    this.messageService.add('you just liked ' + photo.description) //feedback in messages box
  }

  constructor(private photoService: PhotoService, private messageService: MessageService, private photosComponent: PhotosComponent) { }


  ngOnInit(): void {
    this.getPhotos();
    this.photoUrl = this.photoService.baseUrl;
  }

}
