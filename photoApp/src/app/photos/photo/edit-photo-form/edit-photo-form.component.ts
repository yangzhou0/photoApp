import { Component, OnInit, Input } from '@angular/core';
import {PhotoService} from '../../../core/photo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'edit-photo-form',
  templateUrl: './edit-photo-form.component.html',
  styleUrls: ['./edit-photo-form.component.css']
})
export class EditPhotoFormComponent implements OnInit {
  @Input() photo;
  updatePhoto(photoId,data){
    this.photoService.updatePhoto(photoId,data).subscribe(()=>{
      location.reload();
    })
  }
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {

  }

}
