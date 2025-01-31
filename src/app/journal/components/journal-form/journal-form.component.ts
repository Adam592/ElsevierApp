import { Component } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-journal-form',
  standalone: false,
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.scss']
})
export class JournalFormComponent {
  constructor(
    private journalService: JournalService,
    private router: Router
  ) {}

  //Pass form data to the service
  onSubmit(form: NgForm) {
    if (form.valid) {
      const formValues = form.value;

      const openaccessValue = formValues.openaccess ? 'OPENACCESS(1)' : 'OPENACCESS(0)';
      delete formValues.OPENACCESS;

      const formattedString = Object.entries(formValues)
        .filter(([key, value]) => value)
        .map(([key, value]) => `${key.toUpperCase()}(${value})`)
        .join(' AND ');

      const finalString = formattedString ? `(${formattedString} AND ${openaccessValue})` : `(${openaccessValue})`;

      this.journalService.fetchData({ query: finalString });
      this.router.navigate(['/journal/journal-list']);

    } else {
      console.log('Form is invalid');
    }
  }

  //Navigation methods
  navigateToList(): void {
    this.router.navigate(['/journal/journal-list']);
  }

  navigateToSnippets(): void {
    this.router.navigate(['/journal/snippets']);
  }
}
