import { Injectable } from '@angular/core';
import { Journal } from '../models/journal';
import { Observable } from 'rxjs';
import { SnippetsService } from './snippets.service';


@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private snippetsService: SnippetsService) { }

  private journals: Journal[] = [];

  fetchData(data: { query: string }) {
    const apiUrl = 'https://api.elsevier.com/content/search/scopus';

    const queryParams = new URLSearchParams(data).toString();
    console.log('Query Params:', queryParams);

    this.journals = [];

    return fetch(`${apiUrl}?${queryParams}`, {
      method: 'GET',
      headers: {
        'X-ELS-APIKey': "YOUR_API_KEY",
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Fetched Data:', data); 
      if (data) { 
        console.log(data['search-results']);
        const articles = data['search-results']['entry'].map((result: any) => {
          const article = new Journal(
            parseInt(result['prism:issn'], 10),
            result['prism:doi'],
            result['dc:title'],
            result['citedby-count'],
            result['dc:creator'],
            result['prism:pageRange'],
            result['prism:publicationName'],
            result['prism:url'],
            result['prism:volume'],
          );
          this.journals.push(article);
          return article;
        });
        return articles;
      } else {
        console.error('Unexpected data structure:', data);
        return [];
      }
    })
    .catch(error => {
      console.error('Error:', error);
      return [];
    });
  }

  addArticle (article: Journal) {
    this.journals.push(article);
  }
  getArticles(){
    return this.journals;
  }

  getJournalById(id: number): Journal | undefined {
    return this.journals.find(journal => journal.issn === id);
  }

  saveArticleToFile(article: Journal): Observable<Journal> {
    return this.snippetsService.saveSnippet(article);
  }
}
