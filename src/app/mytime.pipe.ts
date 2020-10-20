import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytime'
})
export class MytimePipe implements PipeTransform {

  transform(value:number): any{

  if(value>0&&(value/60)<1)

{
  return value+'minutes'


}else{


  return (value/60)+'hours'
}








}

}
