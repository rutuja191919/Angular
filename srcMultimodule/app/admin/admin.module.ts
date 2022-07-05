import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdemoComponent } from './ademo/ademo.component';

@NgModule({
  declarations: [
    AdemoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdemoComponent
  ]
})
export class AdminModule { }
