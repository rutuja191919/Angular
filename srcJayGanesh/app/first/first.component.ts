import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})

export class FirstComponent
{
   //Characteristics
   public name : string = "Rutuja Rajesh Chaudhari";

  //Behaviour
   Display() : string
   {
    var ret : string = "Hello "+this.name;
    return ret;
   } 

   Addition(No1 : number, No2 : number) : number
   {
     return No1+No2;
   }

}
