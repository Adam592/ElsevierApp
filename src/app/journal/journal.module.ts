import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JournalRoutingModule } from './journal-routing.module';
import { JournalListComponent } from './components/journal-list/journal-list.component';
import { JournalFormComponent } from './components/journal-form/journal-form.component';
import { JournalListElementComponent } from './components/journal-list-element/journal-list-element.component';
import { FormsModule } from '@angular/forms';
import { JournalService } from './services/journal.service';
import { JournalDetailComponent } from './components/journal-detail/journal-detail.component';
import { SnippetsService } from './services/snippets.service';
import { SnippetsComponent } from './components/snippets/snippets.component';
import {HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    JournalListComponent,
    JournalFormComponent,
    JournalListElementComponent,
    JournalDetailComponent,
    SnippetsComponent
  ],
  exports: [
    JournalFormComponent
  ],
  imports: [
    CommonModule,
    JournalRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JournalService,
    SnippetsService
  ]
})
export class JournalModule {}
