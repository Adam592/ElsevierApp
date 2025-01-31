import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string = 'http://localhost:3000/feedback';

  constructor() { }

  postFeedback(feedback: Feedback): Promise<Feedback> {
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }
}
