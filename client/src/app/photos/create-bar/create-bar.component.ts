import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
import {PhotosComponent} from '../photos.component';
import {PhotosListComponent} from '../photos-list/photos-list.component';

@Component({
  selector: 'app-create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.css']
})
export class CreateBarComponent implements OnInit {
  @Input() author;

  // hardcoded photo object served as a placeholder for two-way binding with the #newPhotoForm
  photo = {
    description: 'enter some dope description',
    hashtag: 'enter some cool # ',
    photo: null
  }

  onSubmit(){
    let formData = new FormData(); //used to upload image file
    //grab the data from the #newPhotoForm and attach it to formData
    formData.append('photo', this.photo.photo);
    formData.append('hashtag', this.photo.hashtag);
    formData.append('description', this.photo.description);
    formData.append('author', this.author);

    //call photoService.uploadPhoto with data from form to POST API and interact with MongoDB through back-end server
    this.photoService.uploadPhoto(formData).subscribe((photo)=>{
      this.photosListComponent.getPhotos();
    })

  }


  handleFileInput(target){
    // select the single image we choose and add it to photo.photo property
    let photoFile = target.files[0];
    this.photo.photo = photoFile;
  }
  constructor(
    private photoService: PhotoService,
    private photosListComponent: PhotosListComponent ) { }

  ngOnInit(): void {

  }

}
