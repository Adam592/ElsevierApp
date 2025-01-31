import { Component, OnInit } from '@angular/core';
import { Journal } from '../../models/journal';
import { SnippetsService } from '../../services/snippets.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snippets',
  standalone: false,
  templateUrl: './snippets.component.html',
  styleUrls: ['./snippets.component.scss']
})
export class SnippetsComponent implements OnInit {
  snippets: Journal[] = [];

  constructor(private snippetService: SnippetsService,  private router: Router) { }

  ngOnInit(): void {
    this.loadSnippets();
  }

  loadSnippets(): void {
    this.snippetService.getSnippets().subscribe(snippets => {
      this.snippets = snippets;
    });
  }

  deleteSnippet(id: number): void {
    this.snippetService.deleteSnippet(id).pipe(
      tap(snippets => this.snippets = snippets)
    ).subscribe();
  }

  downloadSnippets(): void {
    this.snippetService.downloadSnippets();
  }

  navigateToList(): void {
    this.router.navigate(['/journal/journal-list']);
  }

  navigateToForm(): void {
    this.router.navigate(['/journal/journal-form']);
  }
}
