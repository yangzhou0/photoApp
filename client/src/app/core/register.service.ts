import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl = environment.baseUrl;

  register(data){
    
  }
  constructor(
    private http: HttpClient
  ) { }
}
