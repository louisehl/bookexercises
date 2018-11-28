import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  
  dish: Dish;

  constructor(private dishService: DishService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.dishService.getDish(id).subscribe(d => this.dish = d);
  }

  goBack(): void {
    this.location.back();
  }

}
