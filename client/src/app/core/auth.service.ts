import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //import baseUrl '/' because this Angular front-end is serving as a static file from server public folder
  baseUrl = environment.baseUrl;

  register(data){
    return this.http.post(`${this.baseUrl}api/users/register`,data) // return observerable
  }
  //call server's user api to verify if credentials are correct.
  login(data){
    return this.http.post(`${this.baseUrl}api/users/login`,data) // return observerable
  }

  logout(){
    localStorage.removeItem('user')
    return this.http.get(`${this.baseUrl}api/users/logout`)
  }

  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'))
  }

  isLoggedIn(){
    let user = this.getUser();
    if(user){
      return true;
    }
    return false;
  }

  constructor(
    private http: HttpClient
  ) { }
}
