import { Component, OnInit } from '@angular/core';
import { IPhoto } from '../../shared/interface';
import {PhotoService} from '../../core/photo.service';
@Component({
  selector: 'app-create-bar',
  templateUrl: './create-bar.component.html',
  styleUrls: ['./create-bar.component.css']
})
export class CreateBarComponent implements OnInit {
  submitted = false;
  photo={};
  onSubmit(data){
    this.submitted = true;
    console.log(data);
  }
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {

  }

}
