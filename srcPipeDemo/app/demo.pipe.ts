import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  //<h1>{{"Marvellous Pune" | demo : "PPA" : "Python" : "Angular"}}</h1>
  transform(value: unknown, ...args: unknown[]): unknown
  {
   var str : string = "";
   
    if(args[0] == "PPA")
    {
      str = "Batches starts from 9th July" + " " +value;
    }
    return str;
  }

}
