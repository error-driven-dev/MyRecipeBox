import { Ingredient } from '../../Shared/ingredient.model';
import { Output, EventEmitter } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs';


export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('almond milk', 2, ''),
        new Ingredient('half-half', 2),
        ];
        // custom observer: .next will send data and .subscribe will receive data
    @Output() ingredientsChanged = new Subject<Ingredient[]>();
    @Output() shoplistEditor = new Subject<number>();

    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredientById(id: number){
        return this.ingredients[id];
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // emitter that sends new copy of array to subscribers when data has changed
        this.ingredientsChanged.next(this.ingredients.slice());
         }

    addShopList(shopList: Ingredient[]) {
        this.ingredients.push(...shopList);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(id: number, editedItem: Ingredient){
        this.ingredients[id] = editedItem;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientsChanged.next(this.ingredients.slice());

    }


}