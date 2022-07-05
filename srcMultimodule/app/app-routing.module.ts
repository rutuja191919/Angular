import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import lihinyachi garaj nahi lazy loading mule 

const routes: Routes = [
  {path : 'admin', loadChildren : () => import('./admin/admin.module').then(m=>m.AdminModule)},
  {path : 'student', loadChildren : () => import('./student/student.module').then(m=>m.StudentModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
