import { Component } from '@angular/core';
import { ScidirService } from '../../services/scidir.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-scidir-form',
  standalone: false,
  templateUrl: './scidir-form.component.html',
  styleUrl: './scidir-form.component.scss'
})
export class ScidirFormComponent {

  constructor(
      private scidirService: ScidirService,
      private router: Router
    ) {}
    
    //Submit form parameters to fetch data
    onSubmit(form: NgForm) {
      if (form.valid) {
      const formValues = form.value;

      const params: { [key: string]: string } = {
        title: formValues.title,
        issn: formValues.issn || '',
        subj: formValues.subj,
        start: formValues.start.toString(),
        count: formValues.count.toString(),
        oa: formValues.oa
      };

      this.scidirService.fetchData(params);
      this.router.navigate(['/scidir/scidir-list']);

    } else {
      console.log('Form is invalid');
      form.control.markAllAsTouched();
    }
    }
    
    //Navigation links
    navigateToList(): void {
      this.router.navigate(['/scidir/scidir-list']);
    }
  
    navigateToSnippets(): void {
      this.router.navigate(['/scidir/snippets']);
    }
}
