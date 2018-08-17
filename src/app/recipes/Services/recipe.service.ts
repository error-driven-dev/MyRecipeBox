import { Output, EventEmitter } from '@angular/core';

import {Recipe} from '../recipe.model';
import { Ingredient } from '../../Shared/ingredient.model';

export class RecipeService {
     private recipes: Recipe[] = [
    new Recipe('Beef Stew', 
  'A wonderful winter-time comfort food...',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4y_ALfRIMKv2mwZyhH4SV8_ExH8GDnQkdn-fSnBhCi8BidLOog', [
    new Ingredient('beef', 1, 'lb'),
    new Ingredient('carrots', 5, 'whole'),
    ])
    ]; 

    getRecipes() {
        return this.recipes.slice();
    }
    
    getRecipe(id: number) {
        return this.recipes[id];
    }
}