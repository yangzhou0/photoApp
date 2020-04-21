import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photoApp';
  mostRecentUpvotedPhoto: string;
  handleUpvote(data: string){
    this.mostRecentUpvotedPhoto = data;
  }

}
