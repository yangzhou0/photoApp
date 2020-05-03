import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
import {MessageService} from '../../core/message.service';
import {PhotosComponent} from '../photos.component';

@Component({
  selector: 'app-create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.css']
})
export class CreateBarComponent implements OnInit {
  photo = {
    description: 'enter some dope description',
    hashtag: 'enter some cool # ',
    photo: null
  }
  @Output() refreshPhotos: EventEmitter<any> = new EventEmitter<any>()

  onSubmit(){
    let formData = new FormData();
    formData.append('photo', this.photo.photo);
    formData.append('hashtag', this.photo.hashtag);
    formData.append('description', this.photo.description);
    this.photoService.uploadPhoto(formData).subscribe((photo)=>{
      this.messageService.add('Successfully uploaded photo!');
      this.photosComponent.getPhotos();
    })

  }

  handleFileInput(target){
    let photoFile = target.files[0]; // select the single image we choose
    this.photo.photo = photoFile;
    console.log(this.photo);
  }
  constructor(private photoService: PhotoService, private messageService: MessageService, private photosComponent: PhotosComponent ) { }

  ngOnInit(): void {

  }

}
