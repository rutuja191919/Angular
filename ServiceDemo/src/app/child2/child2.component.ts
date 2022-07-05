import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  template: `<h1>The capital characters in the string are : {{count}}</h1>`
})
export class Child2Component implements OnInit {

  public count : any = 0;

  constructor(private _obj : StringService) 
  {}

  ngOnInit(): void
  {
   this.count = this._obj.CountCapital("RutujA");
  }

}
