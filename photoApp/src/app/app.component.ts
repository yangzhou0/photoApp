import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photoApp';
  photoList = [
    {
      description:'ironman1',
      hashtag: 'hashtag1',
      imageUrl: 'http://167.99.14.231:3000/uploaded-images/1586821672692-ironman.jpeg',
      votes: 0
    },
    {
      description:'ironman2',
      hashtag: 'hashtag2',
      imageUrl: 'http://167.99.14.231:3000/uploaded-images/1586888100093-ironman2.jpeg',
      votes: 0
    }
  ]
}
