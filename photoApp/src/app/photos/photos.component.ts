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
  
  ngOnInit(): void {
  }

}
