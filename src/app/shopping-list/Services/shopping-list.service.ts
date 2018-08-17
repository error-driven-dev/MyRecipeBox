import { Ingredient } from '../../Shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs';


export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('almond milk', 2, ''),
        new Ingredient('half-half', 2),
        ];
    @Output() ingredientsChanged = new Subject<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        
        this.ingredientsChanged.next(this.ingredients.slice());
           
         }
    addShopList(shopList: Ingredient[]) {
        this.ingredients.push(...shopList);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient() {}

    clearList() {
        this.ingredients = [];
    }
}