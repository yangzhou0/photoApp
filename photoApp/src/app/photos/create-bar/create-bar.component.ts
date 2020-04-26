import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
@Component({
  selector: 'app-create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.css']
})
export class CreateBarComponent implements OnInit {

  constructor(private photoService: PhotoService) { }
  uploadPhoto(description,hashtag){

  }
  ngOnInit(): void {
  }

}
