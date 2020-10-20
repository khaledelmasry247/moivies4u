import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule}from'@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import{FormsModule}from'@angular/forms';
  import { from } from 'rxjs';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignINComponent } from './sign-in/sign-in.component';
import{ReactiveFormsModule}from'@angular/forms';
import { OnTvComponent } from './on-tv/on-tv.component';
import { MoviesComponent } from './movies/movies.component';
import { PopularComponent } from './popular/popular.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { UpcomimgComponent } from './upcomimg/upcomimg.component';
import { AirTodayComponent } from './tv/air-today/air-today.component';
import { TopRelatedComponent } from './tv/top-related/top-related.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MytimePipe } from './mytime.pipe';
import { DisplayMovieComponent } from './display-movie/display-movie.component';
import { SearchPipe } from './search.pipe';
import { CutPipe } from './cut.pipe';
import { NgwWowModule } from 'ngx-wow';
import {NgxTypedJsModule} from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignUpComponent,
    SignINComponent,
    OnTvComponent,
    MoviesComponent,
    PopularComponent,
    NowPlayingComponent,
    UpcomimgComponent,
    AirTodayComponent,
    TopRelatedComponent,
    MoviesDetailsComponent,
    MytimePipe,
    DisplayMovieComponent,
    SearchPipe,
    CutPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    NgxPaginationModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
