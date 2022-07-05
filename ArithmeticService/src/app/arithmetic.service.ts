import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  public Add(no1 : number, no2 : number)
  {
   return no1 + no2;
  }

  public Sub(no1 : number, no2 : number)
  {
  return no1 - no2;
  }
}
