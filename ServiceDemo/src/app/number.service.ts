import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public CkhPrime(no : number) : boolean
  {
    var iCnt : number = 0;
    for(iCnt = 2; iCnt < no ;iCnt++)
    {
      if(no % iCnt == 0)
      {
        break;
      }
    }
    if(iCnt == no)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
