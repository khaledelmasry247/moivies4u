import { Component, OnInit } from '@angular/core';
import { ActivatedRoute}from'@angular/router';
  import { from } from 'rxjs';
  import{AuthServiceService}from'../auth-service.service';
  import{MytimePipe}from '../mytime.pipe';
  declare var $:any;
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  movie_id;
  movie_details:any;
  imgsrc:string='https://image.tmdb.org/t/p/w500/';
  cover:boolean=true;
  constructor( private _ActivatedRoute:ActivatedRoute,private _AuthServiceService:AuthServiceService) {


 this.movie_id= this._ActivatedRoute.snapshot.paramMap.get('id');
  console.log(this.movie_id);

   this._AuthServiceService.getMovieDetails(this.movie_id).subscribe((res)=>{


            console.log(res);
            this.movie_details=res;

   })
   }

   onScroll(event)
   {
     console.log(event);
   }

  ngOnInit(): void {
  }





}
