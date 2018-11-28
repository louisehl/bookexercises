import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Promise<Dish[]> {
    return new Promise(resolve => {
      // simulating server latency with 2s delay
      setTimeout(() => resolve(DISHES), 2000);
    });
  }

  getDish(id: string): Promise<Dish> {
    return new Promise(r => {
      setTimeout(() => r(DISHES.filter(dish => dish.id === id)[0]), 2000);
    });
    
  }

  getFeaturedDish(): Promise<Dish> {
    return new Promise(r => {
      setTimeout(() => r(DISHES.filter(dish => dish.featured)[0]), 2000);
    });
  }
}
