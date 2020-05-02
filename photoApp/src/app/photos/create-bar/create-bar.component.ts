import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
@Component({
  selector: 'app-create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.css']
})
export class CreateBarComponent implements OnInit {
  photo = {
    description: 'enter some dope description',
    hashtag: 'enter some cool # ',
    photo: File
  }
  onSubmit(){

  }

  handleFileInput(target){
    let photoFile = target.files[0]; // select the single image we choose
    this.photo.photo = photoFile;
    console.log(this.photo);
  }
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

  }

}
