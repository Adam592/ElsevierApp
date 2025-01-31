import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Feedback } from '../../models/feedback';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  constructor(private contactService: ContactService) {}

  feedback: Feedback = new Feedback();
  popupMessage = '';
  showPopup = false;
  isSuccess = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.valid) {
      this.feedback = { ...form.value };
      this.contactService.postFeedback(this.feedback)
        .then((data: Feedback) => {
          this.isSuccess = true;
          this.popupMessage = 'Form submitted successfully!';
          this.showPopup = true;
        })
        .catch((error: any) => {
          this.isSuccess = false;
          this.popupMessage = 'Failed to submit the form. Please try again.';
          this.showPopup = true;
        });
    } else {
      this.popupMessage = 'Failed to submit the form. Please try again.';
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}