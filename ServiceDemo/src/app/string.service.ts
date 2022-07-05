import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  public CountCapital(str : string) : number
  { 
    var cntcapital : number = 0, iCnt : number = 0;
    
    for(iCnt = 0; iCnt < str.length; iCnt++)
    {
      if((str[iCnt] >= 'A') && (str[iCnt] <= 'Z'))
      {
        cntcapital++;
      }
    }
    return cntcapital;
  }
}
