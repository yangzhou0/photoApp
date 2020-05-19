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
import { EditPhotoFormComponent } from './photos/photo/edit-photo-form/edit-photo-form.component';
import { LoginComponent } from './login/login.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';

//third party modules
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    CreateBarComponent,
    PhotoComponent,
    EditPhotoFormComponent,
    LoginComponent,
    PhotosListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
