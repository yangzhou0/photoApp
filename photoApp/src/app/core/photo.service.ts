import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PHOTOS } from '../../assets/photos';
import { IPhoto } from '../shared/interface';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  getPhotos(): Observable<IPhoto[]> {
    return of(PHOTOS);
  }

  getPhoto(id): IPhoto{
  return PHOTOS.find((el) => {return el._id == id});
  }

  constructor(private http: HttpClient) { }
}
