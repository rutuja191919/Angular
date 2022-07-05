import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SdemoComponent } from './sdemo/sdemo.component';

@NgModule({
  declarations: [
    SdemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
  exports: [
    SdemoComponent
  ]
})
export class StudentModule { }
