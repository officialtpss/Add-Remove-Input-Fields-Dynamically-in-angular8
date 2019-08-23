import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
const routes: Routes = [
  { path: '', redirectTo: '/generate-form', pathMatch: 'full' },
  { path: 'generate-form', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
