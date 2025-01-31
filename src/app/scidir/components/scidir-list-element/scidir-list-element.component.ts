import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-scidir-list-element',
  standalone: false,
  templateUrl: './scidir-list-element.component.html',
  styleUrl: './scidir-list-element.component.scss'
})
export class ScidirListElementComponent {
  
  @Input() 
  article: Article = new Article();
}
