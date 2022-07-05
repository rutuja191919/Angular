import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public value : any = "";

  public Send(data : any)
  {
    this.value = data;
  }
 
  public Name = ""; //for sync two way binding

}
