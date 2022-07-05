import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
