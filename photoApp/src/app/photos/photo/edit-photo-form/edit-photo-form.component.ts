import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'edit-photo-form',
  templateUrl: './edit-photo-form.component.html',
  styleUrls: ['./edit-photo-form.component.css']
})
export class EditPhotoFormComponent implements OnInit {
  @Input() photo;
  constructor() { }

  ngOnInit(): void {

  }

}
