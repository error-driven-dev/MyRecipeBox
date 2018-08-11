import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe.model';
import {RecipeService } from './Services/recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css' ], 
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe => this.selectedRecipe = recipe));
    console.log(this.selectedRecipe);
  }


  
}

