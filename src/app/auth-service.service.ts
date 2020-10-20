import { Injectable } from '@angular/core';
import{HttpClient}from'@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _HttpClient:HttpClient) { }


  getAllDetails():Observable<any>
  {

 return this._HttpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=d1f1d4a56129ac167e61a02a7386468a&language=en-US&page=1');

  }



  
 

 


                      //  pagination method


  getAllMovies(page: number): Observable<any> {
    let httpUrlMovies = this._HttpClient.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`
      );

  return httpUrlMovies;
}


 popular_movies(page:Number):Observable<any>
 {
         return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);

 }


Now_playing(page:number):Observable<any>
  {

  return this._HttpClient.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);

  }

 


  up_coming(page:number):Observable<any>
  {

  return this._HttpClient.get(` https://api.themoviedb.org/3/movie/upcoming?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US&page=${page}`);

  }

  getMovieDetails(movie_id):Observable<any>
  {

 return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=9a488f87b254e094333aeaba9bacbf16&language=en-US`);

  }











}