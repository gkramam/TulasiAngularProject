import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';

const routes: Routes = [
  
  {path:'',component:LoginComponent},
  {path:'register-user',component:RegisterUserComponent},
  
  {path:'add',component:AddMovieComponent},
  {path:'edit',component:EditMovieComponent},
  {path:'view/:Id',component:ViewMovieComponent},
  {path:'home',component:HomeComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
