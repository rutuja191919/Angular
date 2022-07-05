import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  template: `<h1> Addition is : {{Addition}}</h1>
  <h1>Substraction is : {{Substraction}}</h1>
  `
})
export class DemoComponent implements OnInit {

  public Addition : any = 0;
  public Substraction : any = 0;

  constructor(private _obj : ArithmeticService)
  { }

  ngOnInit(): void 
  {
   this.Addition = this._obj.Add(10,20);
   this.Substraction = this._obj.Sub(20,10); 
  }

}
