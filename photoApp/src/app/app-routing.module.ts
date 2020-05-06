import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {PhotosComponent} from './photos/photos.component';
import {PhotoComponent} from './photos/photo/photo.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  //set up routing
  { path: 'photos/:id', component: PhotoComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/photos', pathMatch: 'full'}, //www.xx.com would direct to photos component
  { path: '**', pathMatch: 'full', redirectTo: '/photos' } // wildcard, redirect to homepage if no url matched
]; // sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
