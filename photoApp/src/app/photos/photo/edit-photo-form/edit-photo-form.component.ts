import { Component, OnInit, Input } from '@angular/core';
import {PhotoService} from '../../../core/photo.service';
import {MessageService} from '../../../core/message.service';
import { Router,ActivatedRoute, NavigationExtras} from '@angular/router';

@Component({
  selector: 'edit-photo-form',
  templateUrl: './edit-photo-form.component.html',
  styleUrls: ['./edit-photo-form.component.css']
})
export class EditPhotoFormComponent implements OnInit {
  @Input() photo;
  updatePhoto(photoId,data){
    this.photoService.updatePhoto(photoId,data).subscribe(()=>{
      this.messageService.add('Successfully updated photo!')
      this.router.navigate(['/photos/' + photoId]);
    })
  }
  constructor(private photoService: PhotoService, private messageService: MessageService, private router: Router, ){ }

  ngOnInit(): void {

  }

}
