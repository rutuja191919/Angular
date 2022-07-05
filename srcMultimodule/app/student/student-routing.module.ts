import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SdemoComponent } from './sdemo/sdemo.component';

const routes: Routes = [
  {path: ' ',component: SdemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
