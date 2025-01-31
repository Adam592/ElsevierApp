import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { JournalModule } from './journal/journal.module';
import { ScidirModule } from './scidir/scidir.module';
import { ContactModule } from './contact/contact.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JournalModule, CommonModule, ScidirModule, ContactModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToContact() {
    this.router.navigate(['/contact-form']);
  }

  navigateToJournal() {
    this.router.navigate(['/journal/journal-form']);
  }

  navigateToScidir() {
    this.router.navigate(['/scidir/scidir-form']);
  }
}
