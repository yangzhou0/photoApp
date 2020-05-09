import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'//make this service availabel for the whole app
})

export class MessageService {
  messages: string[] = []; //create messages box for MessageService to iterate through

  add(message: string): void{ // add new message to the messages array
    this.messages.push(message);
  }

  clear(): void{
    this.messages = []; //clear out the messages array
  }

  constructor() { }
}
