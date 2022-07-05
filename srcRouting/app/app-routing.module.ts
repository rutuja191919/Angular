import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BatchesComponent } from './batches/batches.component';
import { InvalidComponent } from './invalid/invalid.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
{path : 'Batches', component : BatchesComponent},
{path : 'Subjects', component : SubjectsComponent},
{path : 'About', component : AboutusComponent},
{path : '', component : AboutusComponent}, //default routing
{path : '**', component : InvalidComponent} //wildcard route for security 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
