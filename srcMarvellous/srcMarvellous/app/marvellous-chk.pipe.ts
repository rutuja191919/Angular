import { outputAst } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number,param : string): string
  {
    var output : string = "";
    
    if(param == "Prime")
    {
      for(var i = 2; i < value ; i++)
      {
        if(value % i == 0)
        {
          break;
        }
      }
      if(i == value)
      {
        output = "Number is prime";
      }
      else
      {
        output = "Number is not prime";
      }
    } 

    else if(param == "Even")
    {
      if(value % 2 == 0)
      {
        output = "Number is even";
      }
      else
      {
        output = "Number is odd";
      }
    }
    
    else if(param = "Perfect")
    {
      var iSum : number = 0;

      for(var i = 1; i <= value/2; i++)
      {
        iSum = iSum + i;
      }

      if(iSum == value)
      {
        output = "Number is perfect";
      }
      else
      {
        output = "Number is not perfect";
      }
    }
    

    return output;
  }

}
