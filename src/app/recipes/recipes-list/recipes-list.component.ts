import { Component, OnInit, OnDestroy} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../Services/recipe.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy{
 recipes: Recipe[];
 subscription: Subscription;
    

  constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipeAdded.subscribe(
      (recipes: Recipe[]) => { this.recipes = recipes;}
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 
}
