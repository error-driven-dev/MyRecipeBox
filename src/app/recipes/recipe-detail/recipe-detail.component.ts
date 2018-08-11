import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../Services/recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    
    this.recipeService.selectedRecipe.subscribe(recipe => this.selectedRecipe = recipe);
    
  }

}
