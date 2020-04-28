import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPhoto } from '../shared/interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = environment.baseUrl; //'http://localhost:8001/'

  getPhotos(): Observable<any> {
    return this.http.get(`${this.baseUrl}api/photos`);
  }

  getPhoto(photoId): Observable<any>{
    return this.http.get(`${this.baseUrl}api/photos/${photoId}`)
  }

  deletePhoto(photoId: number){
    console.log(this.baseUrl + `api/photos/${photoId}`);
    return this.http.delete(`${this.baseUrl}api/photos/${photoId}`);
  }

  uploadPhoto(data){
    console.log('loading');
    console.log(data);
    return this.http.post(`${this.baseUrl}api/photos/`,data)
  }


  constructor(private http: HttpClient) { }
}
