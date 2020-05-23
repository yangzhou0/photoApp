import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //import baseUrl '/' because this Angular front-end is serving as a static file from server public folder
  baseUrl = environment.baseUrl;

  //call server's user api to verify if credentials are correct.
  login(data){
    return this.http.post(`${this.baseUrl}api/users/login`,data) // return observerable
  }

  logout(){
    return this.http.get(`${this.baseUrl}api/users/logout`)
  }

  getCurrentUser(){
    return this.http.get(`${this.baseUrl}api/users/currentUser`);
  }

  constructor(
    private http: HttpClient
  ) { }
}
