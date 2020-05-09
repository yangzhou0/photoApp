import { Component,Input, OnInit } from '@angular/core';

//import custome modules
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
import {PhotosComponent} from '../photos.component';

//thirparty modules
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {
  photos
  subTitle: string = 'Gallery'
  photoUrl: string
  username: string
  //fetch all photos from MongoDB from ngOnInit
  getPhotos(): void {
    this.photoService.getPhotos()
        .subscribe(photos => {
          this.photos = photos.reverse();
          });
  }

  //delete particular photo
  delete(photo): void{
    if (confirm(`Are you sure you want to delete id#: ${photo._id}?`)){
      this.photoService.deletePhoto(photo._id).subscribe(()=>{
        this.getPhotos();
        this._flashMessagesService.show(`Deleted ${photo._id}`, { cssClass: 'alert-success',timeout: 4000 } );
      });
    }
  }

  //like the photo
  upvote(photo){
    photo.likes += 1;
    this.photoService.updatePhoto(photo._id,{likes:photo.likes}).subscribe(()=>{
    }
    )
  }

  constructor(private photoService: PhotoService,
    private photosComponent: PhotosComponent,
    private _flashMessagesService: FlashMessagesService) { }


  ngOnInit(): void {
    this.getPhotos();
    this.photoUrl = this.photoService.baseUrl;
  }

}
