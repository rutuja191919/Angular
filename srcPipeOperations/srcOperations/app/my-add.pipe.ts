import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, Param : string): number
  {
    var n = +Param;

    var add = value + n;

    return add;
  }

}
