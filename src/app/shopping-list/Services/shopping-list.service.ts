import { Ingredient } from '../../Shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';


export class ShoppingListService{
    ingredients: Ingredient[] = [
        new Ingredient('beef', 1),
        new Ingredient('carrots', 5),
        ];
    @Output() IngredientAdded = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.IngredientAdded.emit(this.ingredients.slice());
           
        
    }
}