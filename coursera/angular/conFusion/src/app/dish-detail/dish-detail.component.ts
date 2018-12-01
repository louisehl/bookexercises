import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators'; 
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  dishIds: string[];
  prev: string;
  next: string;
  dish: Dish;
  commentForm: FormGroup;
  errMsg: string;
  dishCopy: Dish;

  @ViewChild('fform') commentFormDirective;

  formErrors = {
    'author': '',
    'comment': ''
  }

  validationMessages = {
    'author': {
      'required': 'Name is required',
      'minlength': 'Name must be at least 2 characters',
      'maxlength': 'Name cannot be longer than 25 characters'
    },
    'comment': { 'required': 'Comment is required' }
  }


  constructor(private dishService: DishService,
              private activatedRoute: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              @Inject('BaseURL') private BaseURL) {
    this.createForm();
  }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(ids => this.dishIds = ids);
    this.activatedRoute.params
      .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(d => {
        this.dish = d;
        this.dishCopy = d;
        this.setPrevNext(d.id);
      },
      errMsg => this.errMsg = errMsg);
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: [5],
      comment: ['', Validators.required]
    });

    this.commentForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); //reset form validation messages
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) return;
    const form = this.commentForm;
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
    let comment = new Comment();
    comment.author = this.commentForm.get('author').value;
    comment.rating = this.commentForm.get('rating').value;
    comment.comment = this.commentForm.get('comment').value;
    comment.date = new Date().toISOString();
    this.dishCopy.comments.push(comment);
    this.dishService.putDish(this.dishCopy)
      .subscribe(dish => {
        this.dish = dish;
        this.dishCopy = dish;
      }, errMsg => {
        this.dish = null;
        this.dishCopy = null;
        this.errMsg = <any>errMsg;
      })
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

}
