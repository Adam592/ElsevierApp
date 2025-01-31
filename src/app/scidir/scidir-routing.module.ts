import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScidirListComponent } from './components/scidir-list/scidir-list.component';
import { ScidirFormComponent } from './components/scidir-form/scidir-form.component';

const routes: Routes = [
  { path: 'scidir', redirectTo: '/scidir/scidir-form', pathMatch: 'full' }, 
  { path: 'scidir-list', component: ScidirListComponent },
  { path: 'scidir-form', component: ScidirFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ScidirRoutingModule { }
