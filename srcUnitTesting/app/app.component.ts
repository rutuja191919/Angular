import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UT1';
  no = 1;

  Increment()
  {
    this.no++;
  }

  Decrement()
  {
    this.no--;
  }

}
