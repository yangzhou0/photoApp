import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;

  login(data){
    return this.http.post(`${this.baseUrl}api/users`,data)
  }
  constructor(
    private http: HttpClient
  ) { }
}
