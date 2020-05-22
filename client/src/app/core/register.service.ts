import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.baseUrl;

  register(data){
    return this.http.post(`${this.baseUrl}api/users/register`,data,{ withCredentials: true }) // return observerable
  }
  constructor(
    private http: HttpClient
  ) { }
}
