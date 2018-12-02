import { Component, OnInit, ViewChild } from '@angular/core';
import { Feedback, ContactType } from '../shared/feedback';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flyInOut, expand } from '../animations/app.animations';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackCopy: Feedback;
  contactType = ContactType;
  errMsg: string;
  submitted: boolean = false;

  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 2 characters',
      'maxlength': 'First name cannot be longer than 25 characters'
    },
    'lastname': {
      'required': 'Last name is required',
      'minlength': 'Last name must be at least 2 characters',
      'maxlength': 'Last name cannot be longer than 25 characters'
    },
    'telnum': {
      'required': 'Telephone number must be provided',
      'pattern': 'Telephone number must be numbers'
    },
    'email': {
      'required': 'Email is required',
      'email': 'The email is not a valid format'
    }
  };

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) return;
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        //clear previous error messages if any
        this.formErrors[field] = '';
        
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.submitted = true;
    this.feedbackCopy = this.feedbackForm.value;
    this.feedbackService.submitFeedback(this.feedbackCopy)
      .subscribe(feedback => {
        this.feedback = feedback;
        setTimeout(() => this.resetFeedback(), 8000);
      }, errMsg => this.errMsg = <any>errMsg);
  }

  resetFeedback() {
    this.feedback = null;
    this.feedbackCopy = null;
    this.submitted = false;
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
