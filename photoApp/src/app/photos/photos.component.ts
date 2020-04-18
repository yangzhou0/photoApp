import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  subTitle = 'Gallery'
  isVisible = true;
  private _photos: any[];
  @Input() get photos(): any[]{
    return this._photos;
  };
  set photos(value: any[]){
    this._photos = value;
  }

  @Output() upvoteEvent: EventEmitter<string> = new EventEmitter<string>();

  upvote(photo){
    photo.votes += 1;
    this.upvoteEvent.emit(photo.description)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
