import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalListComponent } from './components/journal-list/journal-list.component';
import { JournalFormComponent } from './components/journal-form/journal-form.component';
import { JournalDetailComponent } from './components/journal-detail/journal-detail.component';
import { SnippetsComponent } from './components/snippets/snippets.component';

const routes: Routes = [
  { path: 'journal', redirectTo: '/journal/journal-form', pathMatch: 'full' },
  { path: 'journal-list', component: JournalListComponent },
  { path: 'journal-form', component: JournalFormComponent },
  { path: 'journal-list/:id', component: JournalDetailComponent },
  { path: 'snippets', component: SnippetsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class JournalRoutingModule { }
