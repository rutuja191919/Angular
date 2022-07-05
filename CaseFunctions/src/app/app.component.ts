import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';

  text : string = "Marvellous_Infosystems";

  public upper()
  {
    this.text = this.text.toUpperCase();
  }
 
  public lower()
  {
    this.text = this.text.toLowerCase();
  }
}
