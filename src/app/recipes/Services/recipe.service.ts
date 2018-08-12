import { Output, EventEmitter } from '@angular/core';

import {Recipe} from '../recipe.model';

export class RecipeService {
     private recipes: Recipe[] = [
    new Recipe('Beef Stew', 
  'A wonderful winter-time comfort food...',
  'https://www.buffalowildwings.com/globalassets/menuitems/10120003-chicken-quesadilla.png')
    ]; 
    
    @Output() selectedRecipe = new EventEmitter<Recipe>();
    
    getRecipes() {
        return this.recipes.slice();
    }
    
}