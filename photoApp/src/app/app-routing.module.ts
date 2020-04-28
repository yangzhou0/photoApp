import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {PhotosComponent} from './photos/photos.component';
import {PhotoComponent} from './photos/photo/photo.component';

const routes: Routes = [
  { path: 'photos/:id', component: PhotoComponent},
  { path: 'photos', component: PhotosComponent},
  { path: '', redirectTo: '/photos', pathMatch: 'full'},
  { path: '**', pathMatch: 'full', redirectTo: '/photos' }
]; // sets up routes constant where you define your routes


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
