import { Component, OnInit } from '@angular/core';
import{AuthServiceService}from'../auth-service.service';
  import { from } from 'rxjs';
@Component({
  selector: 'app-upcomimg',
  templateUrl: './upcomimg.component.html',
  styleUrls: ['./upcomimg.component.scss']
})
export class UpcomimgComponent implements OnInit {

  upcoming_movies:any;
  page=1;
  totalRecords;
  imgsrc:string='https://image.tmdb.org/t/p/w500/';


  constructor( private _AuthServiceService:AuthServiceService) {


//  the first fire which work when open page the default value of page is 1
    this.getPopularMovies(this.page);
 console.log(this.page);
   }



// function which sent data to api .it need the number of page every Sending
getPopularMovies(page)
{

  this._AuthServiceService.up_coming(page).subscribe((res)=>{


    console.log(res.results);
    this.upcoming_movies=res.results;
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
