import { Component } from '@angular/core';
import { ScidirService } from '../../services/scidir.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scidir-list',
  standalone: false,
  templateUrl: './scidir-list.component.html',
  styleUrl: './scidir-list.component.scss'
})
export class ScidirListComponent {
  articles: Article[] = [];

  constructor(private scidirService: ScidirService, private router: Router) {}
  
  ngOnInit() {
    this.articles = this.scidirService.getArticles();
    console.log(this.articles);
  }

  navigateToForm(): void {
      this.router.navigate(['/scidir/scidir-form']);
    }
}
