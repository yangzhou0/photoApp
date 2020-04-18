import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  subTitle = 'Gallery'
  isVisible = true;
  private _photos: any[];
  @Input() get photos(): any[]{
    return this._photos;
  };
  set photos(value: any[]){
    this._photos = value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
