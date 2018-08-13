import { Ingredient } from '../../Shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';


export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('almond milk', 2, ''),
        new Ingredient('half-half', 2),
        ];
    @Output() ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
           
         }
    addShopList(shopList: Ingredient[]) {
        this.ingredients.push(...shopList);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    deleteIngredient() {}

    clearList() {
        this.ingredients = [];
    }
}