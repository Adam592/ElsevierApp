import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalService } from '../../services/journal.service';
import { Journal } from '../../models/journal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-detail',
  standalone: false,
  templateUrl: './journal-detail.component.html',
  styleUrl: './journal-detail.component.scss'
})
export class JournalDetailComponent {
  journal: Journal | undefined;

  constructor(private route: ActivatedRoute, private journalService: JournalService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.journal = this.journalService.getJournalById(id);
    }
  }

  navigateToList(): void {
    this.router.navigate(['/journal/journal-list']);
  }
  
  navigateToSnippets(): void {
    this.router.navigate(['/journal/snippets']);
  }

  navigateToForm(): void {
    this.router.navigate(['/journal/journal-form']);
  }

  saveArticle(article: Journal): void {
    this.journalService.saveArticleToFile(article).subscribe();
  }
}
