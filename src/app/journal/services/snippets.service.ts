import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Journal } from '../models/journal';
import { switchMap, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnippetsService {

  private apiUrl = 'http://localhost:3000/snippets';

  constructor(private http: HttpClient) { }

  getSnippets(): Observable<Journal[]> {
    return this.http
      .get<Journal[]>(this.apiUrl)
      .pipe(
        map((snippets: Journal[]) => 
          snippets.map((snippet: Journal) => new Journal().deserialize(snippet))
        )
      );
  }

  saveSnippet(article: Journal): Observable<any> {
    return this.getSnippets().pipe(
      switchMap((snippets: Journal[]) => {
        const exists = snippets.some(snippet => snippet.issn === article.issn);
        if (exists) {
          return throwError(() => new Error('Snippet already exists'));
        } else {
          const snippetWithId = { ...article, id: article.issn.toString() };
          return this.http.post<Journal>(this.apiUrl, snippetWithId).pipe(map(() => undefined));
        }
      })
    );
  }

  deleteSnippet(id: number): Observable<Journal[]> {
    return this.http.delete<void>(`${this.apiUrl}/${id.toString()}`).pipe(
      switchMap(() => this.getSnippets())
    );
  }

  downloadSnippets(): void {
    this.getSnippets().subscribe(snippets => {
      const blob = new Blob([JSON.stringify(snippets, null, 2)], { type: 'application/json' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'snippets.json';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
