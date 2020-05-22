import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {PhotosComponent} from './photos/photos.component';
import {PhotoComponent} from './photos/photo/photo.component';
import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { RegisterComponent } from './register/register.component';

import {LoginComponent} from './login/login.component';

const routes: Routes = [
  //set up routing
  { path: 'photos',
    component: PhotosComponent,
    children:[
      {
        path: ':id',
        component: PhotoComponent
      },
      {
        path: '',
        component: PhotosListComponent
      }
    ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}, //www.xx.com would direct to photos component
  { path: '**', pathMatch: 'full', redirectTo: '/login' } // wildcard, redirect to homepage if no url matched
]; // sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
