import { Component, OnInit, Input } from '@angular/core';

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

  upvote(photo){
    photo.votes += 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
