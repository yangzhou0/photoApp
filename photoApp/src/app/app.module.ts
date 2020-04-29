import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { CreateBarComponent } from './photos/create-bar/create-bar.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { MessagesComponent } from './messages/messages.component';
import { EditPhotoFormComponent } from './photos/edit-photo-form/edit-photo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    CreateBarComponent,
    PhotoComponent,
    MessagesComponent,
    EditPhotoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
