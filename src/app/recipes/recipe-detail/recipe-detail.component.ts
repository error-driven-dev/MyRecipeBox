import { Component, OnInit, Input } from '@angular/core';
import {RecipeService} from '../Services/recipe.service';
import {Recipe} from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/Services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {

  }
  onAddList(){
    this.shopListService.addShopList(this.recipe.ingredients);
  }
}
