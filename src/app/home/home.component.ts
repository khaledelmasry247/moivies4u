import { Component, OnInit, Input } from '@angular/core';
import{AuthServiceService}from'../auth-service.service';
import { from } from 'rxjs';
import { GlobalDataSummary } from './global-data';
import{SearchPipe}from'../search.pipe';
import{CutPipe}from'../cut.pipe';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  AllMovies:any;
  imgsrc:string='https://image.tmdb.org/t/p/w500/';
 
 item;
 
  page: number = 1

totalRecords: number;
movies:any;

  slideConfig={"slidesToShow": 5,'autoplaySpeed':4000, "slidesToScroll": 4,'autoplay':true};

  constructor(private _AuthServiceService:AuthServiceService, private _NgwWowService:NgwWowService) {

    this.getMovies(this.page);

 this._NgwWowService.init();
    this._AuthServiceService.getAllDetails().subscribe((res)=>{
        this.AllMovies=res.results;
        

    })

  }

  getMovies(data) {
    this._AuthServiceService .getAllMovies(data).subscribe((res) => {
      this.movies = res.results;
      this.totalRecords = res.total_pages;
    });
  }

  getPagesIn(pageNo: number) {
    this.page = pageNo;
    this.getMovies(this.page);
  }

 


 


  
  ngOnInit() {
    this._NgwWowService.init();
  }


  
  reset()
  {
    this._NgwWowService.init();
  }
}
