import { Component, OnInit } from '@angular/core';
import { DISHES } from '../shared/dishes';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  selectedDish: Dish;
  dishes: Dish[] = DISHES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(d: Dish) {
    this.selectedDish = d;
  }

}
