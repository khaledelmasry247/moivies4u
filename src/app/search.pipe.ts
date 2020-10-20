import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(AllMovies:any[],item:string): any {

       if(item==undefined)
       {
         return AllMovies;
       }
return  AllMovies.filter(function(AllMovies){

  return AllMovies.title.includes(item);

       })
      }
      
    }
  


