import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute, NavigationExtras} from '@angular/router';

//import custome modules
import {PhotoService} from '../../../core/photo.service';
import {MessageService} from '../../../core/message.service';
import {PhotoComponent} from '../photo.component'

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
      this.messageService.add('Successfully updated photo!')//add message to let user now once photo updated
      // this.router.navigate([`photos/${photoId}`]);
      location.reload(); // reload the page
      // this.photoComponent.getPhoto();
    })
  }
  constructor(private photoService: PhotoService,
    private messageService: MessageService,
    private router: Router,
    private photoComponent: PhotoComponent){ }

  ngOnInit(): void {

  }

}
