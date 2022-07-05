import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, Param : string): number
  {
    var n = +Param;

    var mult = value * n;

    return mult;
  }
}
