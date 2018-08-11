import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../Services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes: Recipe[];
    

  constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe){
   
    this.recipeService.selectedRecipe.emit(recipe);
  }
}