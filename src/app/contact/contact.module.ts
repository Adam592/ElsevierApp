import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';


@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ContactService]
})
export class ContactModule { }
