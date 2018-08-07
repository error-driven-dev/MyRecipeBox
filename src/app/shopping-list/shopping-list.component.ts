import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css',  ]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('beef', 1),
    new Ingredient('carrots', 5)];

  constructor() { }

  ngOnInit() {
  }

}
