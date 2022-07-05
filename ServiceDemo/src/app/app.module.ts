import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberService } from './number.service';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { StringService } from './string.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NumberService,StringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
