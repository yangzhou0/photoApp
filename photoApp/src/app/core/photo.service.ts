import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PHOTOS } from '../../assets/photos';
import { IPhoto } from '../shared/interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = environment.baseUrl;

  getPhotos(): Observable<any> {
    return this.http.get(this.baseUrl + 'api/photos');
  }

  deletePhoto(photoId: number){
    console.log(this.baseUrl + `api/photos/${photoId}`);
    return this.http.delete(`${this.baseUrl}api/photos/${photoId}`);
  }

  getPhoto(id): IPhoto{
  return PHOTOS.find((el) => {return el._id == id});
  }

  constructor(private http: HttpClient) { }
}
