import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators'; 

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

  constructor(private dishService: DishService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.dishService.getDishIds().subscribe(ids => this.dishIds = ids);
    this.activatedRoute.params
      .pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(d => {
        this.dish = d;
        this.setPrevNext(d.id);
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
