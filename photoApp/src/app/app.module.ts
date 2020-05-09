//angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';

//custom modules
import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { CreateBarComponent } from './photos/create-bar/create-bar.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { MessagesComponent } from './messages/messages.component';
import { EditPhotoFormComponent } from './photos/photo/edit-photo-form/edit-photo-form.component';
import { LoginComponent } from './login/login.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    CreateBarComponent,
    PhotoComponent,
    MessagesComponent,
    EditPhotoFormComponent,
    LoginComponent,
    PhotosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
