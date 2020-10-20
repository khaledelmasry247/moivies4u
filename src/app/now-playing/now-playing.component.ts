import { Component, OnInit } from '@angular/core';
 import{AuthServiceService}from'../auth-service.service';
  import { from } from 'rxjs';
@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {
   page=1;
   playing_movies:any;
   totalRecords;
   imgsrc:string='https://image.tmdb.org/t/p/w500/';

  constructor(private _AuthServiceService:AuthServiceService) {


      //  the first fire which work when open page the default value of page is 1
          this.getPopularMovies(this.page);
            console.log(this.page);
        
      
       }
      
      
      
      // function which sent data to api .it need the number of page every Sending
      getPopularMovies(page)
      {
      
        this._AuthServiceService.Now_playing(page).subscribe((res)=>{
      
      
          console.log(res.results);
          this.playing_movies=res.results;
          this.totalRecords = res.total_pages;
      
      
         })
      
      
        }
                 
      
        // function which get page number and sent it to the function that take page number
      
      getPagesIn(page)
      {
       this.page=page;
       this.getPopularMovies(this.page);
      }
      
      
      
      

 
  ngOnInit(): void {
  }









}
