import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Article } from '../models/article'
@Injectable({
  providedIn: 'root'
})
export class ScidirService {

  private apiUrl = 'https://api.elsevier.com/content/serial/title';
  private articles: Article[] = [];

  constructor() { }

  fetchData(data: { [key: string]: string }) {
    let httpParams = new HttpParams();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, data[key]);
      }
    }

    const queryParams = httpParams.toString();
    this.articles = [];

    return fetch(`${this.apiUrl}?${queryParams}`, {
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
      if (data) { 
        const articles = data['serial-metadata-response']['entry'].map((entry: any) => {
          const article = new Article(
            entry['prism:issn'] || 'No data found',
            entry['openaccessType'] || 'No data found',
            entry['prism:url'] || 'No data found',
            entry['dc:title'] || 'No data found',
            entry['dc:publisher'] || 'No data found',
            entry['citeScoreYearInfoList']['citeScoreCurrentMetric'] || 'No data found',
            entry['citeScoreYearInfoList']['citeScoreCurrentMetricYear'] || 'No data found',
            entry['citeScoreYearInfoList']['citeScoreTracker'] || 'No data found',
            entry['citeScoreYearInfoList']['citeScoreTrackerYear'] || 'No data found',
            entry['citeScoreYearInfoList']['citeScoreYearInfo'] || 'No data found',
          );
          this.articles.push(article);
          return article;
        });
        return articles;
      } else {
        return [];
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
  }

  getArticles(): Article[] {
    return this.articles;
  }
}
