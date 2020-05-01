import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPhoto } from '../shared/interface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl = environment.baseUrl; //'http://localhost:8001/'

  getPhotos(): Observable<any> {
    this.messageService.add('PhotoService: fetched all photos');
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
    return this.http.post(`${this.baseUrl}api/photos/`,data)
  }

  updatePhoto(id,data){
    return this.http.put(`${this.baseUrl}api/photos/${id}`,data)
  }


  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
}
