import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform 
{
  transform(str : string)
  {
    str.split("").reverse().join(""); //canonical function call- split into character arraya then reverse the array and then again join that characters into string
    return str;
  }

}
