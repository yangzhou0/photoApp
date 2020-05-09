import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute, NavigationExtras} from '@angular/router';

//import custome modules
import {PhotoService} from '../../../core/photo.service';
import {PhotoComponent} from '../photo.component'

//thirparty modules
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'edit-photo-form',
  templateUrl: './edit-photo-form.component.html',
  styleUrls: ['./edit-photo-form.component.css']
})
export class EditPhotoFormComponent implements OnInit {
  @Input() photo;
  editing = false;

// toggle property for *ngIf in order to hide or display the editting form
  toggleEdit(boolean){
    this.editing = boolean;
  }

  //call updatePhoto from PhotoService
  updatePhoto(photoId,data){
    this.photoService.updatePhoto(photoId,data).subscribe(()=>{
      this.photoComponent.getPhoto();
      this._flashMessagesService.show('Update Successful', { cssClass: 'alert-success',timeout: 2000 } );
    })
  }
  constructor(private photoService: PhotoService,
    private router: Router,
    private photoComponent: PhotoComponent,
    private _flashMessagesService: FlashMessagesService){ }

  ngOnInit(): void {

  }

}
