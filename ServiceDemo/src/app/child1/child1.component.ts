import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  template:`
  <ng-template #prime>
  <h1>Number is prime number</h1>
  </ng-template>

  <ng-template #notprime>
  <h1>Number is not a prime number</h1>
  </ng-template>

  <h1 *ngIf = "Result;then prime;else notprime"></h1>`
})
export class Child1Component implements OnInit {

  constructor(private _obj : NumberService) { }
  
  public Result : any;

  ngOnInit(): void 
  {
   this.Result = this._obj.CkhPrime(13);
  }

}
