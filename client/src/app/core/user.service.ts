import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  updateProfile(id,data){
    return this.http.put(`${this.baseUrl}api/users/${id}`,data)
  }
  constructor(private http: HttpClient) { }
}
