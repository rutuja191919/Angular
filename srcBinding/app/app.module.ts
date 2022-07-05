import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { MarvellousComponent } from './marvellous/marvellous.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    MarvellousComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
