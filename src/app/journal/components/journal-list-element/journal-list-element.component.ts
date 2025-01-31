import { Component, Input } from '@angular/core';
import { Journal } from '../../models/journal';

@Component({
  selector: 'app-journal-list-element',
  standalone: false,
  templateUrl: './journal-list-element.component.html',
  styleUrl: './journal-list-element.component.scss'
})
export class JournalListElementComponent {
  
  @Input() 
  journal: Journal = new Journal();
}
