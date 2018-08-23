import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from './Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css',  ]
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[];

  constructor(private listService: ShoppingListService) { }

  ngOnInit() {

    this.ingredients = this.listService.getIngredients();
    this.listService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => { this.ingredients = ingredients; });
  }
  
  // sends the index of selected item to the service
  onEdit(i: number) {
    this.listService.shoplistEditor.next(i);

  }

}
