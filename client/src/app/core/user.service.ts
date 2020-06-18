import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  updateProfile(id,data){
    this.http.put(`${this.baseUrl}api/users/${id}`)
  }
  constructor(private http: HttpClient) { }
}
