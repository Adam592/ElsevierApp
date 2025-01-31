import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/journal.service';
import { SnippetsService } from '../../services/snippets.service';
import { Router } from '@angular/router';
import { Journal } from '../../models/journal';

@Component({
  selector: 'app-journal-list',
  standalone: false,
  templateUrl: './journal-list.component.html',
  styleUrls: ['./journal-list.component.scss']
})
export class JournalListComponent implements OnInit {
  journals: Journal[] = [];
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private journalService: JournalService, private snippetService: SnippetsService, private router: Router) {}

  ngOnInit() {
    this.journals = this.journalService.getArticles();
    console.log(this.journals);
  }

  navigateToForm() {
    this.router.navigate(['/journal/journal-form']);
  }

  viewArticle(id: number): void {
    this.router.navigate(['/journal/journal-list', id]);
  }

  saveArticle(article: Journal): void {
    this.snippetService.saveSnippet(article).subscribe({
      next: () => {
        this.errorMessage = null;
        this.successMessage = 'Article added to the snippet.';
        // Optionally reload the list or perform other actions
      },
      error: (err) => {
        this.successMessage = null;
        this.errorMessage = err.message;
      }
    });
  }

  navigateToSnippets(): void {
    this.router.navigate(['/journal/snippets']);
  }
}
