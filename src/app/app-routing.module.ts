import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignINComponent } from './sign-in/sign-in.component';
import { PopularComponent } from './popular/popular.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { UpcomimgComponent } from './upcomimg/upcomimg.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const routes: Routes = [


  {path:'home',component:HomeComponent},
  {path:'popular',component:PopularComponent},
 
  {path:'movieDetails/:id',component:MoviesDetailsComponent},
  {path:'Now_playing',component:NowPlayingComponent},
  {path:'upcaming',component:UpcomimgComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'sign-in',component:SignINComponent},

  {path:'**',component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
