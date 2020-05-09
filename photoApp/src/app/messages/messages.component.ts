import { Component, OnInit } from '@angular/core';
import {MessageService} from '../core/message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) { } //import MessageService to make messages and methods available to messages.component.html

  ngOnInit(): void {
  }

}
